import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type TBerriesResponse = {
    results: {
        name: string
        url: string
    }[]
}

type TBerryResponse = {
    name: string
    size: number
    smoothness: number
    soil_dryness: number
}

export const berryApi = createApi({
    reducerPath: 'berryApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/pokeapi' }),
    endpoints: (builder) => ({
        berries: builder.query<TBerriesResponse, string>({
            query: () => 'berry',
        }),
        berry: builder.query<TBerryResponse, string>({
            query: (berryId) => `berry/${berryId}`,
        }),
    }),
})

export const { useBerriesQuery, useBerryQuery } = berryApi
