import { Providers } from 'app/providers'
import { List } from 'pages/List'
import { Object } from 'pages/Object'

import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        element: <Providers />,
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
