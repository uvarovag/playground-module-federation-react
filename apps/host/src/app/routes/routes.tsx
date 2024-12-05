// TODO lint rules
import documentRoutes from 'document/routes'
import { RouteObject } from 'react-router'
import userRoutes from 'user/routes'

import { Layout } from 'app/layout'

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
