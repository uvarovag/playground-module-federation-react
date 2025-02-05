import { configureStore } from '@reduxjs/toolkit'

import { berryApi } from 'entities/berry'

export const store = configureStore({
    devTools: IS_DEV,
    reducer: {
        [berryApi.reducerPath]: berryApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(berryApi.middleware),
})
