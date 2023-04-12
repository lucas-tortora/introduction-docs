module.exports = {
    mySidebar: [{
        type: 'doc',
        id: 'welcome',
        label: 'Welcome'
    },
        {
            type: 'category',
            label: 'What is Shimmer?',
            link: {
                type: 'doc',
                id: 'explanations/what-is-shimmer/introduction',
            },
            items: [
                'explanations/what-is-shimmer/layer-1-landscape',
                'explanations/what-is-shimmer/networks',
                {
                    type: 'category',
                    label: 'About Nodes',
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: 'explanations/what-is-shimmer/nodes/about-nodes',
                    },
                    items: [
                        'explanations/what-is-shimmer/nodes/about-nodes',
                        'explanations/what-is-shimmer/nodes/hornet',
                        'explanations/what-is-shimmer/nodes/become-a-node-operator',
                    ],
                },
                'explanations/what-is-shimmer/clients',
                'explanations/what-is-shimmer/tokens-and-wallets',
            ],
        },
        {
            type: 'category',
            label: 'What is Stardust?',
            items: [
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/what_is_stardust',
                    label: `Introduction`
                },
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/rethink_utxo',
                    label: `Rethinking UTXO`
                },
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/sc_support',
                    label: `Smart Contract Chain Support`
                },
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/tokenization',
                    label: `Tokenization`
                },
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/storage_deposit',
                    label: `Storage Deposit`
                },
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/unlock_conditions',
                    label: `Output Unlock Conditions`
                },
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/output_features',
                    label: `Output Features`
                },
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/protecting_users',
                    label: `Protecting Users`
                },
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/data_processing',
                    label: `Offloading Data Processing`
                },
                {
                    type: 'doc',
                    id: 'explanations/what_is_stardust/dynamic_pow',
                    label: `Dynamic PoW`
                },
                {
                    type: 'doc',
                    id: 'explanations/protocol_tip',
                    label: 'Protocol TIPs'
                },
            ]
        },
        {
            type: 'category',
            label: 'Start Building',
            items: [
                'start-building/introduction',
                {
                    type: "category",
                    label: 'Seeds, Accounts and Addresses',
                    items:
                        [
                            'start-building/seeds-accounts-and-addresses/seeds',
                            'start-building/seeds-accounts-and-addresses/accounts-and-addresses',
                        ]
                },
                'start-building/simple-transfer',
                {
                    type: "category",
                    label: 'Output Unlock Conditions',
                    items:
                        [
                            'start-building/output-unlock-conditions/expiration',
                            'start-building/output-unlock-conditions/timelock',
                            'start-building/output-unlock-conditions/storage-deposit-return',
                        ]
                },
                {
                    type: "category",
                    label: 'Output Features',
                    items:
                        [
                            'start-building/output-features/sender',
                            'start-building/output-features/metadata',
                            'start-building/output-features/tag',
                        ]
                },
                {
                    type: "category",
                    label: 'Alias Transactions',
                    link: {
                        type:'doc',
                        id:'start-building/alias/introduction'
                    },
                    items:
                        [
                            'start-building/alias/introduction',
                            'start-building/alias/create',
                            'start-building/alias/state-transitions',
                            'start-building/alias/governance-transitions',
                            'start-building/alias/destroy',
                            'start-building/alias/unlock-alias-funds',
                        ]
                },
                {
                    type: "category",
                    label: 'Native Tokens and Foundries',
                    items:
                        [
                            'start-building/native-token/introduction',
                            'start-building/native-token/create-foundry',
                            'start-building/native-token/mint-tokens',
                            'start-building/native-token/melt-tokens',
                            'start-building/native-token/burn-tokens',
                            'start-building/native-token/storage-deposits',
                        ]
                },
                {
                    type: "category",
                    label: 'NFTs',
                    items:
                        [
                            'start-building/nft/introduction',
                            'start-building/nft/mint',
                            'start-building/nft/transfer',
                            'start-building/nft/claim',
                            'start-building/nft/burn',
                            'start-building/nft/nft-as-a-wallet',
                            'start-building/nft/nft-collections',
                        ]
                },
                {
                    type: 'doc',
                    id: 'start-building/backup_security',
                    label: 'Backup and Security'
                },
                {
                    type: 'doc',
                    id: 'start-building/verify_download',
                    label: 'Verify Firefly Download'
                },
            ]
        },
        {
            type: 'category',
            label: 'Reference',
            items:
                [
                    {
                        type: 'category',
                        label: 'Endpoints',
                        items:
                            [
                                {
                                    type: 'doc',
                                    id: 'reference/endpoints/shimmer',
                                    label: 'Shimmer',
                                },
                                {
                                    type: 'doc',
                                    id: 'reference/endpoints/testnet',
                                    label: 'Testnet',
                                },
                            ]
                    },
                ]
        },
        {
            type: 'doc',
            id: 'resources',
            label: 'Resources'
        },
    ]
};
