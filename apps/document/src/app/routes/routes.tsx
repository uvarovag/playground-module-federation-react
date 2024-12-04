import { RouteObject } from 'react-router'

import { Providers } from 'app/providers'
import { List } from 'pages/List'
import { Object } from 'pages/Object'

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
