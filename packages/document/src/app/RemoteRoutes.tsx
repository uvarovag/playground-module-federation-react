import { useRoutes } from 'react-router'

import { Providers } from './providers'
import { routes } from './routes'

const RemoteRoutes = () => {
    return <Providers>{useRoutes(routes)}</Providers>
}

export default RemoteRoutes
