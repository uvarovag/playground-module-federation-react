import { Layout } from 'pages/Layout'
import { List } from 'pages/List'
import { Object } from 'pages/Object'

import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <List />,
            },
            {
                path: ':objectId',
                element: <Object />,
            },
        ],
    },
]
