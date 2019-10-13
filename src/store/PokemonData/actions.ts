import { GET_FIRST_POKEMON, GET_SECOND_POKEMON, GET_ALL_POKEMON_LANGUAGES, GET_ALL_ATTACK_LANGUAGES, GET_ALL_ITEM_LANGUAGES, PokemonDataActionTypes, PokemonRequires } from "./types"

export const getFirstPokemon = (data: PokemonRequires): PokemonDataActionTypes => {
    return {
        type: GET_FIRST_POKEMON,
        data
    }
}

export const getSecondPokemon = (data: PokemonRequires): PokemonDataActionTypes => {
    return {
        type: GET_SECOND_POKEMON,
        data
    }
}

export const getAllPokemonLanguages = (data: object[]): PokemonDataActionTypes => {
    return {
        type: GET_ALL_POKEMON_LANGUAGES,
        data
    }
}

export const getAllAttackLanguages = (data: object[]): PokemonDataActionTypes => {
    return {
        type: GET_ALL_ATTACK_LANGUAGES,
        data
    }
}

export const getAllItemLanguages = (data: object[]): PokemonDataActionTypes => {
    return {
        type: GET_ALL_ITEM_LANGUAGES,
        data
    }
}