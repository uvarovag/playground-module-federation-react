import { createBrowserRouter, RouterProvider } from 'react-router'

import { Providers } from './providers'
import { routes } from './routes'

const router = createBrowserRouter(routes)

export const App = () => (
    <Providers>
        <RouterProvider router={router} />
    </Providers>
)
