import type { PropsWithChildren } from 'react'

import { Suspense } from 'react'
import { Provider } from 'react-redux'

import { store } from 'app/model'

export const Providers = ({ children }: PropsWithChildren) => (
    <Suspense fallback="loading...">
        <Provider store={store}>{children}</Provider>
    </Suspense>
)
