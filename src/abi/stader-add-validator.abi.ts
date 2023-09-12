import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './stader-add-validator.abi.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AddedValidatorKey: new LogEvent<([nodeOperator: string, pubkey: string, validatorId: bigint] & {nodeOperator: string, pubkey: string, validatorId: bigint})>(
        abi, '0xab5128638b64e6216e80dfafa70d3cb6d54913a536dc41e76eb4a04cfbe979cf'
    ),
    DecreasedTotalActiveValidatorCount: new LogEvent<([totalActiveValidatorCount: bigint] & {totalActiveValidatorCount: bigint})>(
        abi, '0x5040a06a11b7d9b75fc56fbbd207905dbaa4ac86c0dc9cc7fff40cd1d92aece3'
    ),
    IncreasedTotalActiveValidatorCount: new LogEvent<([totalActiveValidatorCount: bigint] & {totalActiveValidatorCount: bigint})>(
        abi, '0x5818a627697795ff3c3403f320c7549835866cfb64a0b06a6f7f077bc478e9f2'
    ),
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    OnboardedOperator: new LogEvent<([nodeOperator: string, nodeRewardAddress: string, operatorId: bigint, optInForSocializingPool: boolean] & {nodeOperator: string, nodeRewardAddress: string, operatorId: bigint, optInForSocializingPool: boolean})>(
        abi, '0x55b1a82a03cdb2847b1ec26dcac8ce8b3fc5f310388290b048c0ee9ac1ce8dd4'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
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
    TransferredCollateralToPool: new LogEvent<([amount: bigint] & {amount: bigint})>(
        abi, '0x9407b62b10143b3ae08ce1cc7f9b66af41a4431ad59107e53ff54d6401e0730a'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
    UpdatedInputKeyCountLimit: new LogEvent<([batchKeyDepositLimit: bigint] & {batchKeyDepositLimit: bigint})>(
        abi, '0x5fd0fcd821abb4c92d47c4740e5f4a25ef35e99ee092d170faa0e5cb47013c36'
    ),
    UpdatedMaxNonTerminalKeyPerOperator: new LogEvent<([maxNonTerminalKeyPerOperator: bigint] & {maxNonTerminalKeyPerOperator: bigint})>(
        abi, '0xacda2fe79efeffc359206ddeeb45f26ba1596223e01e1585458603af76e880a2'
    ),
    UpdatedNextQueuedValidatorIndex: new LogEvent<([nextQueuedValidatorIndex: bigint] & {nextQueuedValidatorIndex: bigint})>(
        abi, '0x711359152f2039f4182a096114b0d199c5f8e9cb268caff34080855c42ff4da9'
    ),
    UpdatedOperatorDetails: new LogEvent<([nodeOperator: string, operatorName: string, rewardAddress: string] & {nodeOperator: string, operatorName: string, rewardAddress: string})>(
        abi, '0xadc8722095edf061d7fdcb583105c05bf9eb15488503b621c39e254d87269777'
    ),
    UpdatedSocializingPoolState: new LogEvent<([operatorId: bigint, optedForSocializingPool: boolean, block: bigint] & {operatorId: bigint, optedForSocializingPool: boolean, block: bigint})>(
        abi, '0xc0465abaf1d51829975919c02418d521476b44f330a31d78bb6b4e96465e746b'
    ),
    UpdatedStaderConfig: new LogEvent<([staderConfig: string] & {staderConfig: string})>(
        abi, '0xdb2219043d7b197cb235f1af0cf6d782d77dee3de19e3f4fb6d39aae633b4485'
    ),
    UpdatedValidatorDepositBlock: new LogEvent<([validatorId: bigint, depositBlock: bigint] & {validatorId: bigint, depositBlock: bigint})>(
        abi, '0xce479ab1b7a806fa3704c907b8fae15a191ad8da9a1671659e4f411f516c4c01'
    ),
    UpdatedVerifiedKeyBatchSize: new LogEvent<([verifiedKeysBatchSize: bigint] & {verifiedKeysBatchSize: bigint})>(
        abi, '0x5d19c92c6893231b764f3320c712a4d056ff157295c8b620d893dbbed1a869b4'
    ),
    UpdatedWithdrawnKeyBatchSize: new LogEvent<([withdrawnKeysBatchSize: bigint] & {withdrawnKeysBatchSize: bigint})>(
        abi, '0x5aa519ec64f29fb81c513568f7c6839ee0265b5799bb434dfa467be612125950'
    ),
    ValidatorMarkedAsFrontRunned: new LogEvent<([pubkey: string, validatorId: bigint] & {pubkey: string, validatorId: bigint})>(
        abi, '0x4e93215f00bc729272f0ff71afd3d0f385208cbf6c999fe776ad07c623b83466'
    ),
    ValidatorMarkedReadyToDeposit: new LogEvent<([pubkey: string, validatorId: bigint] & {pubkey: string, validatorId: bigint})>(
        abi, '0x21d79a0b22a7d5a18b9535162fe2f0580e24c042b0541a05afc298a77ddf5693'
    ),
    ValidatorStatusMarkedAsInvalidSignature: new LogEvent<([pubkey: string, validatorId: bigint] & {pubkey: string, validatorId: bigint})>(
        abi, '0x596ee835bed6cb827d21ba1785c468f0755ee40d33d87132df5d2ec90b645f9f'
    ),
    ValidatorWithdrawn: new LogEvent<([pubkey: string, validatorId: bigint] & {pubkey: string, validatorId: bigint})>(
        abi, '0x450186694fefe67df6156f60235e4073b623160f28a0b85908ebc864316abf79'
    ),
}

export const functions = {
    COLLATERAL_ETH: new Func<[], {}, bigint>(
        abi, '0x4f59ed80'
    ),
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    FRONT_RUN_PENALTY: new Func<[], {}, bigint>(
        abi, '0xbb7306bf'
    ),
    POOL_ID: new Func<[], {}, number>(
        abi, '0xe0d7d0e9'
    ),
    addValidatorKeys: new Func<[_pubkey: Array<string>, _preDepositSignature: Array<string>, _depositSignature: Array<string>], {_pubkey: Array<string>, _preDepositSignature: Array<string>, _depositSignature: Array<string>}, []>(
        abi, '0xdeacde2b'
    ),
    changeSocializingPoolState: new Func<[_optInForSocializingPool: boolean], {_optInForSocializingPool: boolean}, string>(
        abi, '0xf90b0838'
    ),
    getAllActiveValidators: new Func<[_pageNumber: bigint, _pageSize: bigint], {_pageNumber: bigint, _pageSize: bigint}, Array<([status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint] & {status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint})>>(
        abi, '0x99888898'
    ),
    getAllNodeELVaultAddress: new Func<[_pageNumber: bigint, _pageSize: bigint], {_pageNumber: bigint, _pageSize: bigint}, Array<string>>(
        abi, '0x2d32924f'
    ),
    getCollateralETH: new Func<[], {}, bigint>(
        abi, '0xb01db078'
    ),
    getOperatorRewardAddress: new Func<[_operatorId: bigint], {_operatorId: bigint}, string>(
        abi, '0x83ea2358'
    ),
    getOperatorTotalKeys: new Func<[_operatorId: bigint], {_operatorId: bigint}, bigint>(
        abi, '0xc34ade5c'
    ),
    getOperatorTotalNonTerminalKeys: new Func<[_nodeOperator: string, _startIndex: bigint, _endIndex: bigint], {_nodeOperator: string, _startIndex: bigint, _endIndex: bigint}, bigint>(
        abi, '0x8a25bcec'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    getSocializingPoolStateChangeBlock: new Func<[_operatorId: bigint], {_operatorId: bigint}, bigint>(
        abi, '0xebb5c174'
    ),
    getTotalActiveValidatorCount: new Func<[], {}, bigint>(
        abi, '0x77c359e1'
    ),
    getTotalQueuedValidatorCount: new Func<[], {}, bigint>(
        abi, '0x7bd977d9'
    ),
    getValidatorsByOperator: new Func<[_operator: string, _pageNumber: bigint, _pageSize: bigint], {_operator: string, _pageNumber: bigint, _pageSize: bigint}, Array<([status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint] & {status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint})>>(
        abi, '0x683547b8'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    increaseTotalActiveValidatorCount: new Func<[_count: bigint], {_count: bigint}, []>(
        abi, '0x59c3c9b7'
    ),
    initialize: new Func<[_admin: string, _staderConfig: string], {_admin: string, _staderConfig: string}, []>(
        abi, '0x485cc955'
    ),
    inputKeyCountLimit: new Func<[], {}, number>(
        abi, '0xe0bf8b53'
    ),
    isExistingOperator: new Func<[_operAddr: string], {_operAddr: string}, boolean>(
        abi, '0xf9c4dda4'
    ),
    isExistingPubkey: new Func<[_pubkey: string], {_pubkey: string}, boolean>(
        abi, '0x36514d9f'
    ),
    markValidatorReadyToDeposit: new Func<[_readyToDepositPubkey: Array<string>, _frontRunPubkey: Array<string>, _invalidSignaturePubkey: Array<string>], {_readyToDepositPubkey: Array<string>, _frontRunPubkey: Array<string>, _invalidSignaturePubkey: Array<string>}, []>(
        abi, '0x13797bff'
    ),
    maxNonTerminalKeyPerOperator: new Func<[], {}, bigint>(
        abi, '0x50d5d7ab'
    ),
    nextOperatorId: new Func<[], {}, bigint>(
        abi, '0x2d1dbd74'
    ),
    nextQueuedValidatorIndex: new Func<[], {}, bigint>(
        abi, '0x74338e6d'
    ),
    nextValidatorId: new Func<[], {}, bigint>(
        abi, '0xf7c09189'
    ),
    nodeELRewardVaultByOperatorId: new Func<[_: bigint], {}, string>(
        abi, '0x9344b242'
    ),
    onboardNodeOperator: new Func<[_optInForSocializingPool: boolean, _operatorName: string, _operatorRewardAddress: string], {_optInForSocializingPool: boolean, _operatorName: string, _operatorRewardAddress: string}, string>(
        abi, '0x044d2fe8'
    ),
    operatorIDByAddress: new Func<[_: string], {}, bigint>(
        abi, '0xcac8b306'
    ),
    operatorStructById: new Func<[_: bigint], {}, ([active: boolean, optedForSocializingPool: boolean, operatorName: string, operatorRewardAddress: string, operatorAddress: string] & {active: boolean, optedForSocializingPool: boolean, operatorName: string, operatorRewardAddress: string, operatorAddress: string})>(
        abi, '0xc8a00e7a'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    queuedValidators: new Func<[_: bigint], {}, bigint>(
        abi, '0xbc4a3ad5'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    socializingPoolStateChangeBlock: new Func<[_: bigint], {}, bigint>(
        abi, '0x84522a6d'
    ),
    staderConfig: new Func<[], {}, string>(
        abi, '0x490ffa35'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    totalActiveValidatorCount: new Func<[], {}, bigint>(
        abi, '0x84b0fa4c'
    ),
    transferCollateralToPool: new Func<[_amount: bigint], {_amount: bigint}, []>(
        abi, '0x5ae7f25d'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
    updateDepositStatusAndBlock: new Func<[_validatorId: bigint], {_validatorId: bigint}, []>(
        abi, '0x186d9541'
    ),
    updateInputKeyCountLimit: new Func<[_inputKeyCountLimit: number], {_inputKeyCountLimit: number}, []>(
        abi, '0x2517cfbf'
    ),
    updateMaxNonTerminalKeyPerOperator: new Func<[_maxNonTerminalKeyPerOperator: bigint], {_maxNonTerminalKeyPerOperator: bigint}, []>(
        abi, '0x60c3cf3f'
    ),
    updateNextQueuedValidatorIndex: new Func<[_nextQueuedValidatorIndex: bigint], {_nextQueuedValidatorIndex: bigint}, []>(
        abi, '0xb8d2f06c'
    ),
    updateOperatorDetails: new Func<[_operatorName: string, _rewardAddress: string], {_operatorName: string, _rewardAddress: string}, []>(
        abi, '0x58a994ea'
    ),
    updateStaderConfig: new Func<[_staderConfig: string], {_staderConfig: string}, []>(
        abi, '0x9ee804cb'
    ),
    updateVerifiedKeysBatchSize: new Func<[_verifiedKeysBatchSize: bigint], {_verifiedKeysBatchSize: bigint}, []>(
        abi, '0xaf533aa8'
    ),
    validatorIdByPubkey: new Func<[_: string], {}, bigint>(
        abi, '0x5c2c30a5'
    ),
    validatorIdsByOperatorId: new Func<[_: bigint, _: bigint], {}, bigint>(
        abi, '0xd5e1e5ce'
    ),
    validatorQueueSize: new Func<[], {}, bigint>(
        abi, '0x49911bfb'
    ),
    validatorRegistry: new Func<[_: bigint], {}, ([status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint] & {status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint})>(
        abi, '0x5a1239c1'
    ),
    verifiedKeyBatchSize: new Func<[], {}, bigint>(
        abi, '0xab3e71eb'
    ),
    withdrawnValidators: new Func<[_pubkeys: Array<string>], {_pubkeys: Array<string>}, []>(
        abi, '0x264f27f3'
    ),
}

export class Contract extends ContractBase {

    COLLATERAL_ETH(): Promise<bigint> {
        return this.eth_call(functions.COLLATERAL_ETH, [])
    }

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    FRONT_RUN_PENALTY(): Promise<bigint> {
        return this.eth_call(functions.FRONT_RUN_PENALTY, [])
    }

    POOL_ID(): Promise<number> {
        return this.eth_call(functions.POOL_ID, [])
    }

    getAllActiveValidators(_pageNumber: bigint, _pageSize: bigint): Promise<Array<([status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint] & {status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint})>> {
        return this.eth_call(functions.getAllActiveValidators, [_pageNumber, _pageSize])
    }

    getAllNodeELVaultAddress(_pageNumber: bigint, _pageSize: bigint): Promise<Array<string>> {
        return this.eth_call(functions.getAllNodeELVaultAddress, [_pageNumber, _pageSize])
    }

    getCollateralETH(): Promise<bigint> {
        return this.eth_call(functions.getCollateralETH, [])
    }

    getOperatorRewardAddress(_operatorId: bigint): Promise<string> {
        return this.eth_call(functions.getOperatorRewardAddress, [_operatorId])
    }

    getOperatorTotalKeys(_operatorId: bigint): Promise<bigint> {
        return this.eth_call(functions.getOperatorTotalKeys, [_operatorId])
    }

    getOperatorTotalNonTerminalKeys(_nodeOperator: string, _startIndex: bigint, _endIndex: bigint): Promise<bigint> {
        return this.eth_call(functions.getOperatorTotalNonTerminalKeys, [_nodeOperator, _startIndex, _endIndex])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    getSocializingPoolStateChangeBlock(_operatorId: bigint): Promise<bigint> {
        return this.eth_call(functions.getSocializingPoolStateChangeBlock, [_operatorId])
    }

    getTotalActiveValidatorCount(): Promise<bigint> {
        return this.eth_call(functions.getTotalActiveValidatorCount, [])
    }

    getTotalQueuedValidatorCount(): Promise<bigint> {
        return this.eth_call(functions.getTotalQueuedValidatorCount, [])
    }

    getValidatorsByOperator(_operator: string, _pageNumber: bigint, _pageSize: bigint): Promise<Array<([status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint] & {status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint})>> {
        return this.eth_call(functions.getValidatorsByOperator, [_operator, _pageNumber, _pageSize])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    inputKeyCountLimit(): Promise<number> {
        return this.eth_call(functions.inputKeyCountLimit, [])
    }

    isExistingOperator(_operAddr: string): Promise<boolean> {
        return this.eth_call(functions.isExistingOperator, [_operAddr])
    }

    isExistingPubkey(_pubkey: string): Promise<boolean> {
        return this.eth_call(functions.isExistingPubkey, [_pubkey])
    }

    maxNonTerminalKeyPerOperator(): Promise<bigint> {
        return this.eth_call(functions.maxNonTerminalKeyPerOperator, [])
    }

    nextOperatorId(): Promise<bigint> {
        return this.eth_call(functions.nextOperatorId, [])
    }

    nextQueuedValidatorIndex(): Promise<bigint> {
        return this.eth_call(functions.nextQueuedValidatorIndex, [])
    }

    nextValidatorId(): Promise<bigint> {
        return this.eth_call(functions.nextValidatorId, [])
    }

    nodeELRewardVaultByOperatorId(arg0: bigint): Promise<string> {
        return this.eth_call(functions.nodeELRewardVaultByOperatorId, [arg0])
    }

    operatorIDByAddress(arg0: string): Promise<bigint> {
        return this.eth_call(functions.operatorIDByAddress, [arg0])
    }

    operatorStructById(arg0: bigint): Promise<([active: boolean, optedForSocializingPool: boolean, operatorName: string, operatorRewardAddress: string, operatorAddress: string] & {active: boolean, optedForSocializingPool: boolean, operatorName: string, operatorRewardAddress: string, operatorAddress: string})> {
        return this.eth_call(functions.operatorStructById, [arg0])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    queuedValidators(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.queuedValidators, [arg0])
    }

    socializingPoolStateChangeBlock(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.socializingPoolStateChangeBlock, [arg0])
    }

    staderConfig(): Promise<string> {
        return this.eth_call(functions.staderConfig, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    totalActiveValidatorCount(): Promise<bigint> {
        return this.eth_call(functions.totalActiveValidatorCount, [])
    }

    validatorIdByPubkey(arg0: string): Promise<bigint> {
        return this.eth_call(functions.validatorIdByPubkey, [arg0])
    }

    validatorIdsByOperatorId(arg0: bigint, arg1: bigint): Promise<bigint> {
        return this.eth_call(functions.validatorIdsByOperatorId, [arg0, arg1])
    }

    validatorQueueSize(): Promise<bigint> {
        return this.eth_call(functions.validatorQueueSize, [])
    }

    validatorRegistry(arg0: bigint): Promise<([status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint] & {status: number, pubkey: string, preDepositSignature: string, depositSignature: string, withdrawVaultAddress: string, operatorId: bigint, depositBlock: bigint, withdrawnBlock: bigint})> {
        return this.eth_call(functions.validatorRegistry, [arg0])
    }

    verifiedKeyBatchSize(): Promise<bigint> {
        return this.eth_call(functions.verifiedKeyBatchSize, [])
    }
}
