import { camelCase } from 'camel-case'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'node:path'
import { DefinePlugin, ProgressPlugin, HotModuleReplacementPlugin, container } from 'webpack'

import packageJson from './package.json'

import type { Configuration as WebpackConfigurations } from 'webpack'
import type { Configuration as WebpackDevServerConfigurations } from 'webpack-dev-server'

type Configuration = {
    devServer?: WebpackDevServerConfigurations
} & WebpackConfigurations

type TBuidEnv = {
    NODE_ENV: 'production' | 'development'
    PUBLIC_PATH: string
    PORT: number
}

export default ({ NODE_ENV = 'development', PUBLIC_PATH = 'auto', PORT = 3000 }: TBuidEnv): Configuration => {
    const src = path.resolve(__dirname, 'src')
    const dist = path.resolve(__dirname, 'dist')
    const isDev = NODE_ENV === 'development'
    const isProd = NODE_ENV === 'production'

    return {
        // Режим сборки: 'development' или 'production', задаётся через NODE_ENV
        mode: NODE_ENV,
        // Тип source maps для отладки: 'eval-source-map' для разработки, 'nosources-source-map' для продакшена
        devtool: isDev ? 'eval-source-map' : 'nosources-source-map',
        // Входная точка приложения
        entry: path.resolve(src, 'index.tsx'),
        // Настройки выходного файла
        output: {
            // Папка для сборки
            path: dist,
            // Публичный путь для загрузки ресурсов
            publicPath: PUBLIC_PATH,
            // Имя выходного файла с добавлением хэша для кэширования
            filename: '[name].[contenthash:8].js',
            // Очистка директории перед сборкой
            clean: true,
            // Настройка уникального имени сборки (важно для Module Federation)
            uniqueName: camelCase(packageJson.name),
        },
        // Настройки разрешения модулей
        resolve: {
            // Расширения файлов, которые можно импортировать без указания расширения
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            // Предпочитать абсолютные пути для модулей
            preferAbsolute: true,
            // Где искать модули: исходный код и node_modules
            modules: [src, 'node_modules'],
            // Главные файлы для модуля
            mainFiles: ['index'],
            // Псевдонимы для сокращения путей
            alias: {
                react: path.resolve('./node_modules/react'),
            },
        },
        // Настройки загрузчиков для обработки различных типов файлов
        module: {
            rules: [
                {
                    // Обработка TypeScript и TSX файлов
                    test: /\.(ts|tsx)$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            // Только транспиляция без проверки типов в продакшене
                            transpileOnly: isProd,
                        },
                    },
                    exclude: /node_modules/, // Исключить node_modules
                },
                {
                    // Обработка SVG файлов через svgr
                    test: /\.svg$/,
                    use: '@svgr/webpack',
                },
                {
                    // Загрузка изображений и шрифтов через file-loader
                    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
                    use: 'file-loader',
                },
                {
                    // Обработка CSS файлов
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        // Настройки плагинов
        plugins: [
            // Генерация HTML файла с подключением выходных файлов
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            // Определение глобальных переменных окружения для использования в коде
            new DefinePlugin({
                IS_DEV: JSON.stringify(isDev),
            }),
            // Прогресс-бар во время сборки
            new ProgressPlugin(),
            // Поддержка Hot Module Replacement для обновления модулей без перезагрузки страницы
            new HotModuleReplacementPlugin(),
            // Module Federation предоставляет модули другим приложениям и подключает модули из удалённых приложений
            new container.ModuleFederationPlugin({
                // Уникальное имя для удаленного приложения
                name: camelCase(packageJson.name),
                // Имя файла, содержащего удаленные модули (remote entry point)
                filename: 'remoteEntry.js',
                // Модули которые будут доступны другим приложениям
                exposes: {
                    './routes': './src/app', // Экспорт модуля из './src/app' под именем './routes'
                },
                // Общие зависимости, которые могут использоваться между приложениями
                shared: {
                    ...packageJson.dependencies,
                    react: {
                        eager: true, // Загружается сразу
                        requiredVersion: packageJson.dependencies.react,
                    },
                    'react-dom': {
                        eager: true,
                        requiredVersion: packageJson.dependencies['react-dom'],
                    },
                    'react-router': {
                        eager: true,
                        requiredVersion: packageJson.dependencies['react-router'],
                    },
                },
            }),
        ],
        // Настройки DevServer для разработки
        devServer: {
            // Порт разработки
            port: PORT,
            // Для SPA: перенаправление всех запросов на index.html
            historyApiFallback: true,
            // Путь к статическим файлам
            static: path.resolve(__dirname, 'dist'),
            // Настройки прокси для перенаправления API-запросов
            proxy: [
                {
                    // Отключает проверку SSL-сертификата для целевого сервера
                    secure: false,
                    // Изменяет заголовок "Host" на целевой при проксировании
                    changeOrigin: true,
                    // Перезапись пути для перенаправления запросов
                    pathRewrite: {
                        '^/pokeapi': '',
                    },
                    // Контекст запросов для перенаправления
                    context: '/pokeapi',
                    // Целевой сервер
                    target: 'https://pokeapi.co/api/v2/',
                },
            ],
        },
    }
}
