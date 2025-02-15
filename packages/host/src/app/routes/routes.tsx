import DocumentRoutes from 'document/Routes'
import UserRoutes from 'user/Routes'

import { Layout } from 'app/layout'

import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'document/*',
                element: <DocumentRoutes />,
            },
            {
                path: 'user/*',
                element: <UserRoutes />,
            },
        ],
    },
]
