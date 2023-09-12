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
        "name": "CallerNotStaderContract",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ETHTransferFailed",
        "inputs": [
            {
                "type": "address",
                "name": "recipient"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "error",
        "name": "FutureCycleIndex",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientETHRewards",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientSDRewards",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidCycleIndex",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidProof",
        "inputs": [
            {
                "type": "uint256",
                "name": "cycle"
            },
            {
                "type": "address",
                "name": "operator"
            }
        ]
    },
    {
        "type": "error",
        "name": "RewardAlreadyClaimed",
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "uint256",
                "name": "cycle"
            }
        ]
    },
    {
        "type": "error",
        "name": "RewardAlreadyHandled",
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
        "name": "ETHReceived",
        "inputs": [
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            },
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
        "name": "OperatorRewardsClaimed",
        "inputs": [
            {
                "type": "address",
                "name": "recipient",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "ethRewards",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sdRewards",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OperatorRewardsUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "ethRewards",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalETHRewards",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sdRewards",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalSDRewards",
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
        "name": "ProtocolETHRewardsTransferred",
        "inputs": [
            {
                "type": "uint256",
                "name": "ethRewards",
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
        "type": "event",
        "anonymous": false,
        "name": "UpdatedStaderOperatorRegistry",
        "inputs": [
            {
                "type": "address",
                "name": "staderOperatorRegistry",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedStaderValidatorRegistry",
        "inputs": [
            {
                "type": "address",
                "name": "staderValidatorRegistry",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UserETHRewardsTransferred",
        "inputs": [
            {
                "type": "uint256",
                "name": "ethRewards",
                "indexed": false
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
        "name": "claim",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_index"
            },
            {
                "type": "uint256[]",
                "name": "_amountSD"
            },
            {
                "type": "uint256[]",
                "name": "_amountETH"
            },
            {
                "type": "bytes32[][]",
                "name": "_merkleProof"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimedRewards",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
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
        "name": "getCurrentRewardsIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "index"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRewardCycleDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_index"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_startBlock"
            },
            {
                "type": "uint256",
                "name": "_endBlock"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRewardDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "currentIndex"
            },
            {
                "type": "uint256",
                "name": "currentStartBlock"
            },
            {
                "type": "uint256",
                "name": "currentEndBlock"
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
        "name": "handleRewards",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "_rewardsData",
                "components": [
                    {
                        "type": "uint256",
                        "name": "reportingBlockNumber"
                    },
                    {
                        "type": "uint256",
                        "name": "index"
                    },
                    {
                        "type": "bytes32",
                        "name": "merkleRoot"
                    },
                    {
                        "type": "uint8",
                        "name": "poolId"
                    },
                    {
                        "type": "uint256",
                        "name": "operatorETHRewards"
                    },
                    {
                        "type": "uint256",
                        "name": "userETHRewards"
                    },
                    {
                        "type": "uint256",
                        "name": "protocolETHRewards"
                    },
                    {
                        "type": "uint256",
                        "name": "operatorSDRewards"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "handledRewards",
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
        "name": "initialBlock",
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
        "name": "lastReportedRewardsData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "reportingBlockNumber"
            },
            {
                "type": "uint256",
                "name": "index"
            },
            {
                "type": "bytes32",
                "name": "merkleRoot"
            },
            {
                "type": "uint8",
                "name": "poolId"
            },
            {
                "type": "uint256",
                "name": "operatorETHRewards"
            },
            {
                "type": "uint256",
                "name": "userETHRewards"
            },
            {
                "type": "uint256",
                "name": "protocolETHRewards"
            },
            {
                "type": "uint256",
                "name": "operatorSDRewards"
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
        "name": "rewardsDataMap",
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
                "name": "reportingBlockNumber"
            },
            {
                "type": "uint256",
                "name": "index"
            },
            {
                "type": "bytes32",
                "name": "merkleRoot"
            },
            {
                "type": "uint8",
                "name": "poolId"
            },
            {
                "type": "uint256",
                "name": "operatorETHRewards"
            },
            {
                "type": "uint256",
                "name": "userETHRewards"
            },
            {
                "type": "uint256",
                "name": "protocolETHRewards"
            },
            {
                "type": "uint256",
                "name": "operatorSDRewards"
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
        "name": "totalOperatorETHRewardsRemaining",
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
        "name": "totalOperatorSDRewardsRemaining",
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
        "name": "unpause",
        "constant": false,
        "payable": false,
        "inputs": [],
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
        "name": "verifyProof",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_index"
            },
            {
                "type": "address",
                "name": "_operator"
            },
            {
                "type": "uint256",
                "name": "_amountSD"
            },
            {
                "type": "uint256",
                "name": "_amountETH"
            },
            {
                "type": "bytes32[]",
                "name": "_merkleProof"
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
        "type": "receive",
        "stateMutability": "payable"
    }
]
