// TODO lint rules
import documentRoutes from 'document/routes'
import userRoutes from 'user/routes'

import { Layout } from 'app/layout'

import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'document',
                children: documentRoutes,
            },
            {
                path: 'user',
                children: userRoutes,
            },
        ],
    },
]
