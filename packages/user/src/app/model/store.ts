import { configureStore } from '@reduxjs/toolkit'

import { pokemonApi } from 'entities/pokemon'

export const store = configureStore({
    devTools: IS_DEV,
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})
