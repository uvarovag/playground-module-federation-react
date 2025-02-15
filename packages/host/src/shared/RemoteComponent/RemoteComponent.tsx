import { importRemote } from '@module-federation/utilities'
import { lazy, Suspense } from 'react'

import type { ImportRemoteOptions } from '@module-federation/utilities'

export const RemoteComponent = (props: ImportRemoteOptions) => {
    const Component = lazy(() => importRemote(props))
    return (
        <Suspense fallback="loading...">
            <Component />
        </Suspense>
    )
}
