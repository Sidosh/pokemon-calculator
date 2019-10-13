import * as actionTypes from "./types"
import { types, item } from "../../components/typescript/types";

export const getFirstPokemonAttack = (value: number, status: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_FIRST_POKEMON_ATTACK,
        value,
        status
    }
}

export const getFirstPokemonDefense = (value: number, status: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_FIRST_POKEMON_DEFENSE,
        value,
        status
    }
}

export const getFirstPokemonSpeed = (value: number): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_FIRST_POKEMON_SPEED,
        value
    }
}

export const getFirstPokemonTypes = (value: types[]): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_FIRST_POKEMON_TYPES,
        value
    }
}

export const getFirstPokemonNaturePlus = (value: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_FIRST_POKEMON_NATURE_PLUS,
        value
    }
}

export const getFirstPokemonNatureMinus = (value: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_FIRST_POKEMON_NATURE_MINUS,
        value
    }
}

export const getFirstPokemonItem = (value: item): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_FIRST_POKEMON_ITEM,
        value
    }
}

export const getFirstPokemonStatus = (value: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_FIRST_POKEMON_STATUS,
        value
    }
}

export const getFirstPokemonAbility = (value: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_FIRST_POKEMON_ABILITY,
        value
    }
}

export const getSecondPokemonAttack = (value: number, status: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_SECOND_POKEMON_ATTACK,
        value,
        status
    }
}

export const getSecondPokemonDefense = (value: number, status: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_SECOND_POKEMON_DEFENSE,
        value,
        status
    }
}

export const getSecondPokemonSpeed = (value: number): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_SECOND_POKEMON_SPEED,
        value
    }
}

export const getSecondPokemonTypes = (value: types[]): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_SECOND_POKEMON_TYPES,
        value
    }
}

export const getSecondPokemonNaturePlus = (value: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_SECOND_POKEMON_NATURE_PLUS,
        value
    }
}

export const getSecondPokemonNatureMinus = (value: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_SECOND_POKEMON_NATURE_MINUS,
        value
    }
}

export const getSecondPokemonItem = (value: item): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_SECOND_POKEMON_ITEM,
        value
    }
}

export const getSecondPokemonStatus = (value: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_SECOND_POKEMON_STATUS,
        value
    }
}

export const getSecondPokemonAbility = (value: string): actionTypes.DamageDataActionTypes => {
    return {
        type: actionTypes.GET_SECOND_POKEMON_ABILITY,
        value
    }
}