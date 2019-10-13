import { types, item } from "../../components/typescript/types";

export const GET_FIRST_POKEMON_ATTACK = "GET_FIRST_POKEMON_ATTACK"
export const GET_FIRST_POKEMON_DEFENSE = "GET_FIRST_POKEMON_DEFENSE"
export const GET_FIRST_POKEMON_SPEED = "GET_FIRST_POKEMON_SPEED"
export const GET_FIRST_POKEMON_TYPES = "GET_FIRST_POKEMON_TYPES"
export const GET_FIRST_POKEMON_NATURE_PLUS = "GET_FIRST_POKEMON_NATURE_PLUS"
export const GET_FIRST_POKEMON_NATURE_MINUS = "GET_FIRST_POKEMON_NATURE_MINUS"
export const GET_FIRST_POKEMON_ITEM = "GET_FIRST_POKEMON_ITEM"
export const GET_FIRST_POKEMON_STATUS = "GET_FIRST_POKEMON_STATUS"
export const GET_FIRST_POKEMON_ABILITY = "GET_FIRST_POKEMON_ABILITY"

export const GET_SECOND_POKEMON_ATTACK = "GET_SECOND_POKEMON_ATTACK"
export const GET_SECOND_POKEMON_DEFENSE = "GET_SECOND_POKEMON_DEFENSE"
export const GET_SECOND_POKEMON_SPEED = "GET_SECOND_POKEMON_SPEED"
export const GET_SECOND_POKEMON_TYPES = "GET_SECOND_POKEMON_TYPES"
export const GET_SECOND_POKEMON_NATURE_PLUS = "GET_SECOND_POKEMON_NATURE_PLUS"
export const GET_SECOND_POKEMON_NATURE_MINUS = "GET_SECOND_POKEMON_NATURE_MINUS"
export const GET_SECOND_POKEMON_ITEM = "GET_SECOND_POKEMON_ITEM"
export const GET_SECOND_POKEMON_STATUS = "GET_SECOND_POKEMON_STATUS"
export const GET_SECOND_POKEMON_ABILITY = "GET_SECOND_POKEMON_ABILITY"

export interface DamageDataState {
    firstPokemon: {
        attack: number,
        defense: number,
        speAtt: number,
        speDef: number,
        speed: number,
        types: types[],
        naturePlus: string,
        natureMinus: string,
        item: item,
        status: string,
        ability: string
    },
    secondPokemon: {
        attack: number,
        defense: number,
        speAtt: number,
        speDef: number,
        speed: number,
        types: types[],
        naturePlus: string,
        natureMinus: string,
        item: item,
        status: string,
        ability: string
    }
}

interface GetStatsNumber {
    type: 
        typeof GET_FIRST_POKEMON_ATTACK |
        typeof GET_FIRST_POKEMON_DEFENSE |
        typeof GET_FIRST_POKEMON_SPEED |
        typeof GET_SECOND_POKEMON_ATTACK |
        typeof GET_SECOND_POKEMON_DEFENSE |
        typeof GET_SECOND_POKEMON_SPEED
    value: number
    status?: string 
}

interface GetStatsString {
    type: 
        typeof GET_FIRST_POKEMON_NATURE_PLUS |
        typeof GET_FIRST_POKEMON_NATURE_MINUS |
        typeof GET_FIRST_POKEMON_STATUS |
        typeof GET_FIRST_POKEMON_ABILITY |
        typeof GET_SECOND_POKEMON_NATURE_PLUS |
        typeof GET_SECOND_POKEMON_NATURE_MINUS |
        typeof GET_SECOND_POKEMON_STATUS |
        typeof GET_SECOND_POKEMON_ABILITY
    value: string
}

interface GetStatsObject {
    type: typeof GET_FIRST_POKEMON_ITEM | typeof GET_SECOND_POKEMON_ITEM
    value: item
}

interface GetStatsArray {
    type: typeof GET_FIRST_POKEMON_TYPES | typeof GET_SECOND_POKEMON_TYPES
    value: types[]
}

export type DamageDataActionTypes = GetStatsNumber | GetStatsString | GetStatsObject | GetStatsArray