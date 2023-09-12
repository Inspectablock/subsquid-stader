import {TypeormDatabase} from '@subsquid/typeorm-store'
import {assertNotNull} from '@subsquid/evm-processor'
import {DataHandlerContext} from '@subsquid/evm-processor'
import {Store} from './db'

import {
    Transaction, 
    Block, 
    EventAddValidatorKeys,
    EventDepositSDAsCollateral, 
    EventOperatorRewardsUpdated, 
    EventOperatorRewardsClaimed, 
    Transfer} from './model'
import {EntityBuffer} from './entityBuffer'

import {
    ACCOUNT_ADDRESSES, 
    DEPOSIT_CONTRACT, 
    CLAIM_CONTRACT, 
    VALIDATOR_CONTRACT, 
    STADER_TOKEN_CONTRACT, 
    processor,
    Log,
    Transaction as ChainTransaction
} from './processor'


import * as rewardSpec from "./abi/stader-rewards.abi";
import * as depositSpec from "./abi/stader-deposit.abi";
import * as validatorSpec from "./abi/stader-add-validator.abi";
import * as sdTokeSpec from "./abi/stader-token.abi";

function parseEvent(ctx: DataHandlerContext<Store>, log: Log) {
    try {
        let blockTime = BigInt(log.block.timestamp)
        switch (log.topics[0]) {
            case sdTokeSpec.events.Transfer.topic: {
                let transaction = assertNotNull(log.transaction, `Missing transaction`)
                let e = sdTokeSpec.events.Transfer.decode(log)
                let from = e.from.toLowerCase()
                let to = e.to.toLowerCase()
                let amount = e.value

                EntityBuffer.add(
                    new Transfer({
                        id: log.id,
                        transactionHash: transaction.hash,
                        blockNumber: log.block.height,
                        blockTime: blockTime,
                        to: to,
                        from: from,
                        amount: amount,
                        tokenSymbol:'SD'
                    })
                )
                break;
            }
            case rewardSpec.events.OperatorRewardsClaimed.topic: {
                let e = rewardSpec.events.OperatorRewardsClaimed.decode(log)
                let transaction = assertNotNull(log.transaction, `Missing transaction`)

                EntityBuffer.add(
                    new EventOperatorRewardsClaimed({
                        id: log.id,
                        amountSd: e.sdRewards,
                        amountEth: e.ethRewards,
                        to: e[0].toLowerCase(),
                        transactionHash: transaction.hash,
                        blockNumber: log.block.height,
                        blockTime: BigInt(log.block.timestamp)
                    })
                );
                break;
            } 
            case rewardSpec.events.OperatorRewardsUpdated.topic: {
                let transaction = assertNotNull(log.transaction, `Missing transaction`)

                EntityBuffer.add(
                    new EventOperatorRewardsUpdated({
                        id: log.id,
                        transactionHash: transaction.hash,
                        blockNumber: log.block.height,
                        blockTime: BigInt(log.block.timestamp)
                    })
                )
                break;
            } 
            case depositSpec.events.SDDeposited.topic: {
                let e = depositSpec.events.SDDeposited.decode(log)
                let transaction = assertNotNull(log.transaction, `Missing transaction`)
                let amount = e.sdAmount
                let from = e.operator
                
                EntityBuffer.add(
                    new EventDepositSDAsCollateral({
                        id: log.id,
                        transactionHash: transaction.hash,
                        amount: amount,
                        from: from.toLowerCase(),
                        blockNumber: log.block.height,
                        blockTime: BigInt(log.block.timestamp)
                    })
                )
                break;
            }
            case validatorSpec.events.AddedValidatorKey.topic: {
                let e = validatorSpec.events.AddedValidatorKey.decode(log)
                let transaction = assertNotNull(log.transaction, `Missing transaction`)
                let from = e.nodeOperator

                EntityBuffer.add(
                    new EventAddValidatorKeys({
                        id: log.id,
                        transactionHash: transaction.hash,
                        from: from.toLowerCase(),
                        blockNumber: log.block.height,
                        blockTime: BigInt(log.block.timestamp)
                    })
                )
                break;
            }
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: log.block.height, blockHash: log.block.hash}, `Unable to decode event "${log.topics[0]}"`)
    }
}

function parseFunction(ctx: DataHandlerContext<Store>, transaction: ChainTransaction, blk: Block) {
    if (!transaction.to) {
        return
    }
    try {
        let func = null
        if (transaction.input == '0x') {
            // This is just a send transaction
            func = 'send'
        } else {
            switch (transaction.input.slice(0, 10)) {
                case validatorSpec.functions['addValidatorKeys'].sighash: {
                    func = 'addValidatorKeys'
                    break
                }
                case sdTokeSpec.functions['transfer'].sighash: {
                    func = 'transfer'
                    break
                }
                case rewardSpec.functions['claimedRewards'].sighash:
                case rewardSpec.functions['claim'].sighash:
                {
                    func = 'claimRewards'
                    break
                }
                case depositSpec.functions['depositSDAsCollateral'].sighash:
                {
                    func = 'depositSDAsCollateral'
                    break
                }
            }
        }

        if (!func) {
            func = transaction.sighash
        }

        let transactionFee = BigInt(0)
        if (transaction.gasUsed !== undefined) {
            transactionFee = transaction.gasPrice * transaction.gasUsed
        }

        EntityBuffer.add(
            new Transaction({
                id: transaction.id,
                block: blk,
                hash: transaction.hash,
                transactionFee: transactionFee,
                to: transaction.to.toLowerCase(),
                from: transaction.from.toLowerCase(),
                func: func,
                value: transaction.value
            })
        )
    }
    catch (error) {
        ctx.log.error({error, blockNumber: transaction.block.height, blockHash: transaction.block.hash}, `Unable to decode function "${transaction.input.slice(0, 10)}"`)
    }
}

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {

    const applicableContracts = [
        DEPOSIT_CONTRACT, 
        CLAIM_CONTRACT, 
        VALIDATOR_CONTRACT, 
        STADER_TOKEN_CONTRACT
    ]

    for (let block of ctx.blocks) {
        ctx.log.info(`Block Header ${block.header.id}`);
        let blk = new Block({
            id: block.header.id,
            number: block.header.height,
            timestamp: new Date(block.header.timestamp),
        })
        EntityBuffer.add(blk)

        // Parse events
        for (let log of block.logs) {
            if (applicableContracts.includes(log.address)) {
                parseEvent(ctx, log)
            }
        }

        // Parse transactions
        for (let transaction of block.transactions) {
            if (transaction.to && transaction.from) {
                if (ACCOUNT_ADDRESSES.includes(transaction.from.toLowerCase()) || ACCOUNT_ADDRESSES.includes(transaction.to.toLowerCase())) {
                    parseFunction(ctx, transaction, blk)
                } else {
                    ctx.log.warn(`Not a filtered address ?! TO: ${transaction.to} FROM: ${transaction.from}`);
                }
            } 
        }
    }

    for (let entities of EntityBuffer.flush()) {
        await ctx.store.insert(entities)
    }
})

