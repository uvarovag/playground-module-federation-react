import reactConfig from '@uvarovag/eslint-config-ts-react'
import featureSlicedConfig from '@uvarovag/eslint-config-feature-sliced-flat'

export default [
    ...featureSlicedConfig,
    ...reactConfig,
    {
        files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
        languageOptions: {
            globals: {
                __webpack_init_sharing__: 'readonly',
                __webpack_share_scopes__: 'readonly',
            },
        },
    },
]
