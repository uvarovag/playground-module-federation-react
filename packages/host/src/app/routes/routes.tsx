import DocumentRoutes from 'document/Routes'

import { Layout } from 'app/layout'
import { RemoteComponent } from 'shared'

import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'document/*',
                // static import with module federation remotes
                element: <DocumentRoutes />,
            },
            {
                path: 'user/*',
                // dynamic import with importRemote module federation utilities
                element: <RemoteComponent key="user" module="Routes" scope="remoteUser" url="http://localhost:3002" />,
            },
        ],
    },
]
