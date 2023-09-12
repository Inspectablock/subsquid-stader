export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotManager",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotOperator",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotStaderContract",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CooldownNotComplete",
        "inputs": []
    },
    {
        "type": "error",
        "name": "DuplicatePoolIDOrPoolNotAdded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InSufficientBalance",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidBondEthValue",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidKeyCount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidStartAndEndIndex",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MisMatchingInputKeysSize",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoChangeInState",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotEnoughSDCollateral",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OperatorAlreadyOnBoardedInProtocol",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OperatorIsDeactivate",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OperatorNotOnBoarded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PageNumberIsZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PubkeyAlreadyExist",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TooManyVerifiedKeysReported",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TooManyWithdrawnKeysReported",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UNEXPECTED_STATUS",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "maxKeyLimitReached",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddedValidatorKey",
        "inputs": [
            {
                "type": "address",
                "name": "nodeOperator",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "pubkey",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "validatorId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DecreasedTotalActiveValidatorCount",
        "inputs": [
            {
                "type": "uint256",
                "name": "totalActiveValidatorCount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "IncreasedTotalActiveValidatorCount",
        "inputs": [
            {
                "type": "uint256",
                "name": "totalActiveValidatorCount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Initialized",
        "inputs": [
            {
                "type": "uint8",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OnboardedOperator",
        "inputs": [
            {
                "type": "address",
                "name": "nodeOperator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "nodeRewardAddress",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "operatorId",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "optInForSocializingPool",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Paused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "previousAdminRole",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "newAdminRole",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleGranted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleRevoked",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TransferredCollateralToPool",
        "inputs": [
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Unpaused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedInputKeyCountLimit",
        "inputs": [
            {
                "type": "uint256",
                "name": "batchKeyDepositLimit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedMaxNonTerminalKeyPerOperator",
        "inputs": [
            {
                "type": "uint64",
                "name": "maxNonTerminalKeyPerOperator",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedNextQueuedValidatorIndex",
        "inputs": [
            {
                "type": "uint256",
                "name": "nextQueuedValidatorIndex",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedOperatorDetails",
        "inputs": [
            {
                "type": "address",
                "name": "nodeOperator",
                "indexed": true
            },
            {
                "type": "string",
                "name": "operatorName",
                "indexed": false
            },
            {
                "type": "address",
                "name": "rewardAddress",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedSocializingPoolState",
        "inputs": [
            {
                "type": "uint256",
                "name": "operatorId",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "optedForSocializingPool",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "block",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedStaderConfig",
        "inputs": [
            {
                "type": "address",
                "name": "staderConfig",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedValidatorDepositBlock",
        "inputs": [
            {
                "type": "uint256",
                "name": "validatorId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "depositBlock",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedVerifiedKeyBatchSize",
        "inputs": [
            {
                "type": "uint256",
                "name": "verifiedKeysBatchSize",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedWithdrawnKeyBatchSize",
        "inputs": [
            {
                "type": "uint256",
                "name": "withdrawnKeysBatchSize",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ValidatorMarkedAsFrontRunned",
        "inputs": [
            {
                "type": "bytes",
                "name": "pubkey",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "validatorId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ValidatorMarkedReadyToDeposit",
        "inputs": [
            {
                "type": "bytes",
                "name": "pubkey",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "validatorId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ValidatorStatusMarkedAsInvalidSignature",
        "inputs": [
            {
                "type": "bytes",
                "name": "pubkey",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "validatorId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ValidatorWithdrawn",
        "inputs": [
            {
                "type": "bytes",
                "name": "pubkey",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "validatorId",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "COLLATERAL_ETH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "DEFAULT_ADMIN_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "FRONT_RUN_PENALTY",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "POOL_ID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "addValidatorKeys",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes[]",
                "name": "_pubkey"
            },
            {
                "type": "bytes[]",
                "name": "_preDepositSignature"
            },
            {
                "type": "bytes[]",
                "name": "_depositSignature"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "changeSocializingPoolState",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_optInForSocializingPool"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "feeRecipientAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "getAllActiveValidators",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pageNumber"
            },
            {
                "type": "uint256",
                "name": "_pageSize"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "components": [
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "bytes",
                        "name": "pubkey"
                    },
                    {
                        "type": "bytes",
                        "name": "preDepositSignature"
                    },
                    {
                        "type": "bytes",
                        "name": "depositSignature"
                    },
                    {
                        "type": "address",
                        "name": "withdrawVaultAddress"
                    },
                    {
                        "type": "uint256",
                        "name": "operatorId"
                    },
                    {
                        "type": "uint256",
                        "name": "depositBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "withdrawnBlock"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getAllNodeELVaultAddress",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pageNumber"
            },
            {
                "type": "uint256",
                "name": "_pageSize"
            }
        ],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCollateralETH",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getOperatorRewardAddress",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operatorId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getOperatorTotalKeys",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operatorId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_totalKeys"
            }
        ]
    },
    {
        "type": "function",
        "name": "getOperatorTotalNonTerminalKeys",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_nodeOperator"
            },
            {
                "type": "uint256",
                "name": "_startIndex"
            },
            {
                "type": "uint256",
                "name": "_endIndex"
            }
        ],
        "outputs": [
            {
                "type": "uint64",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getSocializingPoolStateChangeBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operatorId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getTotalActiveValidatorCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getTotalQueuedValidatorCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getValidatorsByOperator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_operator"
            },
            {
                "type": "uint256",
                "name": "_pageNumber"
            },
            {
                "type": "uint256",
                "name": "_pageSize"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "components": [
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "bytes",
                        "name": "pubkey"
                    },
                    {
                        "type": "bytes",
                        "name": "preDepositSignature"
                    },
                    {
                        "type": "bytes",
                        "name": "depositSignature"
                    },
                    {
                        "type": "address",
                        "name": "withdrawVaultAddress"
                    },
                    {
                        "type": "uint256",
                        "name": "operatorId"
                    },
                    {
                        "type": "uint256",
                        "name": "depositBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "withdrawnBlock"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "grantRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "increaseTotalActiveValidatorCount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_count"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_admin"
            },
            {
                "type": "address",
                "name": "_staderConfig"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "inputKeyCountLimit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint16",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isExistingOperator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_operAddr"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isExistingPubkey",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "_pubkey"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "markValidatorReadyToDeposit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes[]",
                "name": "_readyToDepositPubkey"
            },
            {
                "type": "bytes[]",
                "name": "_frontRunPubkey"
            },
            {
                "type": "bytes[]",
                "name": "_invalidSignaturePubkey"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "maxNonTerminalKeyPerOperator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint64",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nextOperatorId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nextQueuedValidatorIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nextValidatorId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nodeELRewardVaultByOperatorId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "onboardNodeOperator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_optInForSocializingPool"
            },
            {
                "type": "string",
                "name": "_operatorName"
            },
            {
                "type": "address",
                "name": "_operatorRewardAddress"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "feeRecipientAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "operatorIDByAddress",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "operatorStructById",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "active"
            },
            {
                "type": "bool",
                "name": "optedForSocializingPool"
            },
            {
                "type": "string",
                "name": "operatorName"
            },
            {
                "type": "address",
                "name": "operatorRewardAddress"
            },
            {
                "type": "address",
                "name": "operatorAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "pause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "paused",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "queuedValidators",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "socializingPoolStateChangeBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "staderConfig",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "totalActiveValidatorCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferCollateralToPool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unpause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateDepositStatusAndBlock",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_validatorId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateInputKeyCountLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16",
                "name": "_inputKeyCountLimit"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateMaxNonTerminalKeyPerOperator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "_maxNonTerminalKeyPerOperator"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateNextQueuedValidatorIndex",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_nextQueuedValidatorIndex"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateOperatorDetails",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_operatorName"
            },
            {
                "type": "address",
                "name": "_rewardAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateStaderConfig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_staderConfig"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateVerifiedKeysBatchSize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_verifiedKeysBatchSize"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "validatorIdByPubkey",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "validatorIdsByOperatorId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "validatorQueueSize",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "validatorRegistry",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": "status"
            },
            {
                "type": "bytes",
                "name": "pubkey"
            },
            {
                "type": "bytes",
                "name": "preDepositSignature"
            },
            {
                "type": "bytes",
                "name": "depositSignature"
            },
            {
                "type": "address",
                "name": "withdrawVaultAddress"
            },
            {
                "type": "uint256",
                "name": "operatorId"
            },
            {
                "type": "uint256",
                "name": "depositBlock"
            },
            {
                "type": "uint256",
                "name": "withdrawnBlock"
            }
        ]
    },
    {
        "type": "function",
        "name": "verifiedKeyBatchSize",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "withdrawnValidators",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes[]",
                "name": "_pubkeys"
            }
        ],
        "outputs": []
    }
]
