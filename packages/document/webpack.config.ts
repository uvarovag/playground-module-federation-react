import toCamelCase from '@uvarovag/to-camel-case'
import baseConfig from '@uvarovag/webpack-config-ts-react'
import { container } from 'webpack'
import { merge } from 'webpack-merge'

import { name, dependencies } from './package.json'

import type { TEnv } from '@uvarovag/webpack-config-ts-react'

export default (env: TEnv) =>
    merge(baseConfig(env), {
        output: {
            uniqueName: toCamelCase(name),
        },
        plugins: [
            new container.ModuleFederationPlugin({
                name: toCamelCase(name),
                filename: 'remoteEntry.js',
                exposes: {
                    './Routes': './src/app/RemoteRoutes',
                },
                shared: {
                    ...dependencies,
                    react: {
                        eager: true,
                        requiredVersion: dependencies.react,
                    },
                    'react-dom': {
                        eager: true,
                        requiredVersion: dependencies['react-dom'],
                    },
                    'react-router': {
                        eager: true,
                        requiredVersion: dependencies['react-router'],
                    },
                },
            }),
        ],
        devServer: {
            open: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            proxy: [
                {
                    secure: false,
                    changeOrigin: true,
                    pathRewrite: {
                        '^/pokeapi': '',
                    },
                    context: '/pokeapi',
                    target: 'https://pokeapi.co/api/v2/',
                },
            ],
        },
    })
