import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import * as contractStaderRewardsAbi from './abi/stader-rewards.abi'
import * as contractStaderDepositAbi from './abi/stader-deposit.abi'
import * as contractAddValidatorAbi from './abi/stader-add-validator.abi'
import * as contractStaderTokenAbi from './abi/stader-token.abi'


if (!process.env.ACCOUNT_ADDRESSES) {
    console.error("You must specify a list of account address `ACCOUNT_ADDRESSES`");    
    process.exit(1)
} 
if (!process.env.FROM_BLOCK) {
    console.error("You must specify a `FROM_BLOCK`");    
    process.exit(1)
} 
if (!process.env.CHAIN_RPC) {
    console.error("You must specify a `CHAIN_RPC`");    
    process.exit(1)
} 

let fromBlock = Number(process.env.FROM_BLOCK);
export const ACCOUNT_ADDRESSES = process.env.ACCOUNT_ADDRESSES.split(',')
export const DEPOSIT_CONTRACT = '0x7af4730cc8ebad1a050dcad5c03c33d2793ee91f'
export const CLAIM_CONTRACT = '0x1de458031bfbe5689ded5a8b9ed57e1e79eab2a4'
export const VALIDATOR_CONTRACT = '0x4f4bfa0861f62309934a5551e0b2541ee82fdcf1'
export const STADER_TOKEN_CONTRACT = '0x30d20208d987713f46dfd34ef128bb16c404d10f'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('eth-mainnet'),
        chain: process.env.CHAIN_RPC
    })
    .setFinalityConfirmation(10)
    .setFields({
        transaction: {
            from: true,
            to: true,
            value: true,
            hash: true,
            effectiveGasPrice: true,
            gas: true,
            gasPrice: true,
            gasUsed: true,
            cumulativeGasUsed: true,
            maxFeePerGas: true,
            maxPriorityFeePerGas: true,
            contractAddress: true,
            input: true,
            type: true,
            sighash: true,
        },
    })
    .setBlockRange({
        from: fromBlock,
    })
    .addTransaction({
        from: ACCOUNT_ADDRESSES, 
    })
    .addTransaction({
        to: ACCOUNT_ADDRESSES, 
    })
    .addLog({
        address: [CLAIM_CONTRACT],
        topic0: [
            contractStaderRewardsAbi.events['ETHReceived'].topic,
            contractStaderRewardsAbi.events['Initialized'].topic,
            contractStaderRewardsAbi.events['OperatorRewardsClaimed'].topic,
            contractStaderRewardsAbi.events['OperatorRewardsUpdated'].topic,
            contractStaderRewardsAbi.events['Paused'].topic,
            contractStaderRewardsAbi.events['ProtocolETHRewardsTransferred'].topic,
            contractStaderRewardsAbi.events['RoleAdminChanged'].topic,
            contractStaderRewardsAbi.events['RoleGranted'].topic,
            contractStaderRewardsAbi.events['RoleRevoked'].topic,
            contractStaderRewardsAbi.events['Unpaused'].topic,
            contractStaderRewardsAbi.events['UpdatedStaderConfig'].topic,
            contractStaderRewardsAbi.events['UpdatedStaderOperatorRegistry'].topic,
            contractStaderRewardsAbi.events['UpdatedStaderValidatorRegistry'].topic,
            contractStaderRewardsAbi.events['UserETHRewardsTransferred'].topic,
        ],
        transaction: true,
        range: {
            from: fromBlock,
        },
    })
    .addLog({
        address: [DEPOSIT_CONTRACT],
        topic0: [
            contractStaderDepositAbi.events['SDDeposited'].topic,
        ],
        transaction: true,
        range: {
            from: fromBlock,
        },
    })
    .addLog({
        address: [VALIDATOR_CONTRACT],
        topic0: [
            contractAddValidatorAbi.events['AddedValidatorKey'].topic,
        ],
        transaction: true,
        range: {
            from: fromBlock,
        },
    })
    .addLog({
        address: [STADER_TOKEN_CONTRACT],
        topic0: [
            contractStaderTokenAbi.events['Transfer'].topic,
        ],
        transaction: true,
        range: {
            from: fromBlock,
        },
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
