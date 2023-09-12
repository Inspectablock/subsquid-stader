import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './stader-rewards.abi.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ETHReceived: new LogEvent<([sender: string, amount: bigint] & {sender: string, amount: bigint})>(
        abi, '0xbfe611b001dfcd411432f7bf0d79b82b4b2ee81511edac123a3403c357fb972a'
    ),
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    OperatorRewardsClaimed: new LogEvent<([recipient: string, ethRewards: bigint, sdRewards: bigint] & {recipient: string, ethRewards: bigint, sdRewards: bigint})>(
        abi, '0x62bc6d6d870f047ea4dd686d08bfda93e24cac6b8dae0d740f6fa33071f3f0af'
    ),
    OperatorRewardsUpdated: new LogEvent<([ethRewards: bigint, totalETHRewards: bigint, sdRewards: bigint, totalSDRewards: bigint] & {ethRewards: bigint, totalETHRewards: bigint, sdRewards: bigint, totalSDRewards: bigint})>(
        abi, '0x0e357ad2594fa2d9d8c6dc7c280141cc1b89ba4c9714a96fd3f409f4fded31d0'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
    ),
    ProtocolETHRewardsTransferred: new LogEvent<([ethRewards: bigint] & {ethRewards: bigint})>(
        abi, '0x292921846cb4d7dd20ae1c60a15192efacaaa30028f2043998f925c6c10a8150'
    ),
    RoleAdminChanged: new LogEvent<([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})>(
        abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'
    ),
    RoleGranted: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
    ),
    RoleRevoked: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
    UpdatedStaderConfig: new LogEvent<([staderConfig: string] & {staderConfig: string})>(
        abi, '0xdb2219043d7b197cb235f1af0cf6d782d77dee3de19e3f4fb6d39aae633b4485'
    ),
    UpdatedStaderOperatorRegistry: new LogEvent<([staderOperatorRegistry: string] & {staderOperatorRegistry: string})>(
        abi, '0x9ea3d4ab5ce0102a316617bb8bbf02dbb10d19c7f7fd9903efd2e136658ebefb'
    ),
    UpdatedStaderValidatorRegistry: new LogEvent<([staderValidatorRegistry: string] & {staderValidatorRegistry: string})>(
        abi, '0xf583e0ea5b9579df6531ea89b81be75889dde9f34d35e2402ca38e93c0b5db0a'
    ),
    UserETHRewardsTransferred: new LogEvent<([ethRewards: bigint] & {ethRewards: bigint})>(
        abi, '0x7083eaccdb1f2834d37a767b05f3b72d54217404ee1cb70aa1b774e4e8a02dda'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    claim: new Func<[_index: Array<bigint>, _amountSD: Array<bigint>, _amountETH: Array<bigint>, _merkleProof: Array<Array<string>>], {_index: Array<bigint>, _amountSD: Array<bigint>, _amountETH: Array<bigint>, _merkleProof: Array<Array<string>>}, []>(
        abi, '0xd009b3d0'
    ),
    claimedRewards: new Func<[_: string, _: bigint], {}, boolean>(
        abi, '0xfb831b9a'
    ),
    getCurrentRewardsIndex: new Func<[], {}, bigint>(
        abi, '0x189956a2'
    ),
    getRewardCycleDetails: new Func<[_index: bigint], {_index: bigint}, ([_startBlock: bigint, _endBlock: bigint] & {_startBlock: bigint, _endBlock: bigint})>(
        abi, '0xd2bff5ed'
    ),
    getRewardDetails: new Func<[], {}, ([currentIndex: bigint, currentStartBlock: bigint, currentEndBlock: bigint] & {currentIndex: bigint, currentStartBlock: bigint, currentEndBlock: bigint})>(
        abi, '0xd0c40276'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    handleRewards: new Func<[_rewardsData: ([reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint] & {reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint})], {_rewardsData: ([reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint] & {reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint})}, []>(
        abi, '0x0d83e4ed'
    ),
    handledRewards: new Func<[_: bigint], {}, boolean>(
        abi, '0xebc0f5f7'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    initialBlock: new Func<[], {}, bigint>(
        abi, '0x2cb15864'
    ),
    initialize: new Func<[_admin: string, _staderConfig: string], {_admin: string, _staderConfig: string}, []>(
        abi, '0x485cc955'
    ),
    lastReportedRewardsData: new Func<[], {}, ([reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint] & {reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint})>(
        abi, '0x251272e0'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    rewardsDataMap: new Func<[_: bigint], {}, ([reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint] & {reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint})>(
        abi, '0x4a321b79'
    ),
    staderConfig: new Func<[], {}, string>(
        abi, '0x490ffa35'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    totalOperatorETHRewardsRemaining: new Func<[], {}, bigint>(
        abi, '0xc8725d82'
    ),
    totalOperatorSDRewardsRemaining: new Func<[], {}, bigint>(
        abi, '0x47675c9e'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
    updateStaderConfig: new Func<[_staderConfig: string], {_staderConfig: string}, []>(
        abi, '0x9ee804cb'
    ),
    verifyProof: new Func<[_index: bigint, _operator: string, _amountSD: bigint, _amountETH: bigint, _merkleProof: Array<string>], {_index: bigint, _operator: string, _amountSD: bigint, _amountETH: bigint, _merkleProof: Array<string>}, boolean>(
        abi, '0xfffbe459'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    claimedRewards(arg0: string, arg1: bigint): Promise<boolean> {
        return this.eth_call(functions.claimedRewards, [arg0, arg1])
    }

    getCurrentRewardsIndex(): Promise<bigint> {
        return this.eth_call(functions.getCurrentRewardsIndex, [])
    }

    getRewardCycleDetails(_index: bigint): Promise<([_startBlock: bigint, _endBlock: bigint] & {_startBlock: bigint, _endBlock: bigint})> {
        return this.eth_call(functions.getRewardCycleDetails, [_index])
    }

    getRewardDetails(): Promise<([currentIndex: bigint, currentStartBlock: bigint, currentEndBlock: bigint] & {currentIndex: bigint, currentStartBlock: bigint, currentEndBlock: bigint})> {
        return this.eth_call(functions.getRewardDetails, [])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    handledRewards(arg0: bigint): Promise<boolean> {
        return this.eth_call(functions.handledRewards, [arg0])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    initialBlock(): Promise<bigint> {
        return this.eth_call(functions.initialBlock, [])
    }

    lastReportedRewardsData(): Promise<([reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint] & {reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint})> {
        return this.eth_call(functions.lastReportedRewardsData, [])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    rewardsDataMap(arg0: bigint): Promise<([reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint] & {reportingBlockNumber: bigint, index: bigint, merkleRoot: string, poolId: number, operatorETHRewards: bigint, userETHRewards: bigint, protocolETHRewards: bigint, operatorSDRewards: bigint})> {
        return this.eth_call(functions.rewardsDataMap, [arg0])
    }

    staderConfig(): Promise<string> {
        return this.eth_call(functions.staderConfig, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    totalOperatorETHRewardsRemaining(): Promise<bigint> {
        return this.eth_call(functions.totalOperatorETHRewardsRemaining, [])
    }

    totalOperatorSDRewardsRemaining(): Promise<bigint> {
        return this.eth_call(functions.totalOperatorSDRewardsRemaining, [])
    }

    verifyProof(_index: bigint, _operator: string, _amountSD: bigint, _amountETH: bigint, _merkleProof: Array<string>): Promise<boolean> {
        return this.eth_call(functions.verifyProof, [_index, _operator, _amountSD, _amountETH, _merkleProof])
    }
}
