// import type { RouteObject } from 'react-router'

declare const IS_DEV: boolean

declare module 'user/routes' {
    const userRoutes: RouteObject[]
    export default userRoutes
}

declare module 'document/routes' {
    const documentRoutes: RouteObject[]
    export default documentRoutes
}
