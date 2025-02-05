import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type TPokemonsResponse = {
    results: {
        name: string
        url: string
    }[]
}

type TPokemonResponse = {
    name: string
    order: number
    weight: number
    base_experience: number
}

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/pokeapi' }),
    endpoints: (builder) => ({
        pokemons: builder.query<TPokemonsResponse, string>({
            query: () => 'pokemon',
        }),
        pokemon: builder.query<TPokemonResponse, string>({
            query: (pokemonId) => `pokemon/${pokemonId}`,
        }),
    }),
})

export const { usePokemonsQuery, usePokemonQuery } = pokemonApi
