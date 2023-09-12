import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './stader-deposit.abi.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
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
    SDDeposited: new LogEvent<([operator: string, sdAmount: bigint] & {operator: string, sdAmount: bigint})>(
        abi, '0x112973aa2e3b182a34447572d830c1e97afc414558a08f33554be8e545224259'
    ),
    SDSlashed: new LogEvent<([operator: string, auction: string, sdSlashed: bigint] & {operator: string, auction: string, sdSlashed: bigint})>(
        abi, '0xe4a6f5b1a676a94b2af7a506093c172e23d46a5bea6f2d783d4d32c9047800f4'
    ),
    SDWithdrawn: new LogEvent<([operator: string, sdAmount: bigint] & {operator: string, sdAmount: bigint})>(
        abi, '0x48c1f846fa4bc05385324ee60316f9c6778ed2b5f205a6319678a609b8767607'
    ),
    UpdatedPoolIdForOperator: new LogEvent<([poolId: number, operator: string] & {poolId: number, operator: string})>(
        abi, '0x834f00ba6adeb9f7123fa03b8252cdda3f81509cc96c3c2239420138fa1b895e'
    ),
    UpdatedPoolThreshold: new LogEvent<([poolId: number, minThreshold: bigint, withdrawThreshold: bigint] & {poolId: number, minThreshold: bigint, withdrawThreshold: bigint})>(
        abi, '0x18757dd1fbfe2ad823e1bd4de3f8a2ee76b49f92f6aa34cc7cbf717cdf4d1758'
    ),
    UpdatedStaderConfig: new LogEvent<([staderConfig: string] & {staderConfig: string})>(
        abi, '0xdb2219043d7b197cb235f1af0cf6d782d77dee3de19e3f4fb6d39aae633b4485'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    convertETHToSD: new Func<[_ethAmount: bigint], {_ethAmount: bigint}, bigint>(
        abi, '0xe614e17c'
    ),
    convertSDToETH: new Func<[_sdAmount: bigint], {_sdAmount: bigint}, bigint>(
        abi, '0xdfdafccb'
    ),
    depositSDAsCollateral: new Func<[_sdAmount: bigint], {_sdAmount: bigint}, []>(
        abi, '0xfcb7e032'
    ),
    getMinimumSDToBond: new Func<[_poolId: number, _numValidator: bigint], {_poolId: number, _numValidator: bigint}, bigint>(
        abi, '0x379b727e'
    ),
    getOperatorWithdrawThreshold: new Func<[_operator: string], {_operator: string}, bigint>(
        abi, '0x9871a30a'
    ),
    getRemainingSDToBond: new Func<[_operator: string, _poolId: number, _numValidator: bigint], {_operator: string, _poolId: number, _numValidator: bigint}, bigint>(
        abi, '0x351691ab'
    ),
    getRewardEligibleSD: new Func<[_operator: string], {_operator: string}, bigint>(
        abi, '0x3909afd3'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasEnoughSDCollateral: new Func<[_operator: string, _poolId: number, _numValidator: bigint], {_operator: string, _poolId: number, _numValidator: bigint}, boolean>(
        abi, '0xb178e38e'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    initialize: new Func<[_admin: string, _staderConfig: string], {_admin: string, _staderConfig: string}, []>(
        abi, '0x485cc955'
    ),
    maxApproveSD: new Func<[], {}, []>(
        abi, '0x3e04cd35'
    ),
    operatorSDBalance: new Func<[_: string], {}, bigint>(
        abi, '0xf9af40b8'
    ),
    poolThresholdbyPoolId: new Func<[_: number], {}, ([minThreshold: bigint, maxThreshold: bigint, withdrawThreshold: bigint, units: string] & {minThreshold: bigint, maxThreshold: bigint, withdrawThreshold: bigint, units: string})>(
        abi, '0x8a9b3738'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    slashValidatorSD: new Func<[_validatorId: bigint, _poolId: number], {_validatorId: bigint, _poolId: number}, []>(
        abi, '0x4c538f58'
    ),
    staderConfig: new Func<[], {}, string>(
        abi, '0x490ffa35'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    updatePoolThreshold: new Func<[_poolId: number, _minThreshold: bigint, _maxThreshold: bigint, _withdrawThreshold: bigint, _units: string], {_poolId: number, _minThreshold: bigint, _maxThreshold: bigint, _withdrawThreshold: bigint, _units: string}, []>(
        abi, '0xe0412f0e'
    ),
    updateStaderConfig: new Func<[_staderConfig: string], {_staderConfig: string}, []>(
        abi, '0x9ee804cb'
    ),
    withdraw: new Func<[_requestedSD: bigint], {_requestedSD: bigint}, []>(
        abi, '0x2e1a7d4d'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    convertETHToSD(_ethAmount: bigint): Promise<bigint> {
        return this.eth_call(functions.convertETHToSD, [_ethAmount])
    }

    convertSDToETH(_sdAmount: bigint): Promise<bigint> {
        return this.eth_call(functions.convertSDToETH, [_sdAmount])
    }

    getMinimumSDToBond(_poolId: number, _numValidator: bigint): Promise<bigint> {
        return this.eth_call(functions.getMinimumSDToBond, [_poolId, _numValidator])
    }

    getOperatorWithdrawThreshold(_operator: string): Promise<bigint> {
        return this.eth_call(functions.getOperatorWithdrawThreshold, [_operator])
    }

    getRemainingSDToBond(_operator: string, _poolId: number, _numValidator: bigint): Promise<bigint> {
        return this.eth_call(functions.getRemainingSDToBond, [_operator, _poolId, _numValidator])
    }

    getRewardEligibleSD(_operator: string): Promise<bigint> {
        return this.eth_call(functions.getRewardEligibleSD, [_operator])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    hasEnoughSDCollateral(_operator: string, _poolId: number, _numValidator: bigint): Promise<boolean> {
        return this.eth_call(functions.hasEnoughSDCollateral, [_operator, _poolId, _numValidator])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    operatorSDBalance(arg0: string): Promise<bigint> {
        return this.eth_call(functions.operatorSDBalance, [arg0])
    }

    poolThresholdbyPoolId(arg0: number): Promise<([minThreshold: bigint, maxThreshold: bigint, withdrawThreshold: bigint, units: string] & {minThreshold: bigint, maxThreshold: bigint, withdrawThreshold: bigint, units: string})> {
        return this.eth_call(functions.poolThresholdbyPoolId, [arg0])
    }

    staderConfig(): Promise<string> {
        return this.eth_call(functions.staderConfig, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
