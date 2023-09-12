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
        "name": "CallerNotWithdrawVault",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientSDToWithdraw",
        "inputs": [
            {
                "type": "uint256",
                "name": "operatorSDCollateral"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidPoolId",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidPoolLimit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoStateChange",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SDTransferFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAddress",
        "inputs": []
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
        "name": "SDDeposited",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "sdAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SDSlashed",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "auction",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "sdSlashed",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SDWithdrawn",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "sdAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedPoolIdForOperator",
        "inputs": [
            {
                "type": "uint8",
                "name": "poolId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedPoolThreshold",
        "inputs": [
            {
                "type": "uint8",
                "name": "poolId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "minThreshold",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "withdrawThreshold",
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
                "indexed": true
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
        "name": "convertETHToSD",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_ethAmount"
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
        "name": "convertSDToETH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_sdAmount"
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
        "name": "depositSDAsCollateral",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_sdAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getMinimumSDToBond",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "_poolId"
            },
            {
                "type": "uint256",
                "name": "_numValidator"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_minSDToBond"
            }
        ]
    },
    {
        "type": "function",
        "name": "getOperatorWithdrawThreshold",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_operator"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "operatorWithdrawThreshold"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRemainingSDToBond",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_operator"
            },
            {
                "type": "uint8",
                "name": "_poolId"
            },
            {
                "type": "uint256",
                "name": "_numValidator"
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
        "name": "getRewardEligibleSD",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_operator"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_rewardEligibleSD"
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
        "name": "hasEnoughSDCollateral",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_operator"
            },
            {
                "type": "uint8",
                "name": "_poolId"
            },
            {
                "type": "uint256",
                "name": "_numValidator"
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
        "name": "maxApproveSD",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "operatorSDBalance",
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
        "name": "poolThresholdbyPoolId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "minThreshold"
            },
            {
                "type": "uint256",
                "name": "maxThreshold"
            },
            {
                "type": "uint256",
                "name": "withdrawThreshold"
            },
            {
                "type": "string",
                "name": "units"
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
        "name": "slashValidatorSD",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_validatorId"
            },
            {
                "type": "uint8",
                "name": "_poolId"
            }
        ],
        "outputs": []
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
        "name": "updatePoolThreshold",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "_poolId"
            },
            {
                "type": "uint256",
                "name": "_minThreshold"
            },
            {
                "type": "uint256",
                "name": "_maxThreshold"
            },
            {
                "type": "uint256",
                "name": "_withdrawThreshold"
            },
            {
                "type": "string",
                "name": "_units"
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
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_requestedSD"
            }
        ],
        "outputs": []
    }
]
