export const GET_TERRAIN_FACTOR = "GET_TERRAIN_FACTOR"
export const GET_WEATHER_FACTOR = "GET_WEATHER_FACTOR"
export const GET_FIRST_POKEMON_SCREEN_FACTOR = "GET_FIRST_POKEMON_SCREEN_FACTOR"
export const GET_SECOND_POKEMON_SCREEN_FACTOR = "GET_SECOND_POKEMON_SCREEN_FACTOR"

export interface FactorDataState {
    terrain: string,
    weather: string,
    firstPokemon: {
        screens: GetScreens
    },
    secondPokemon: {
        screens: GetScreens
    }
}

export type GetScreens = {
    reflector: boolean
    lightscreen: boolean
    auroraveil: boolean
}

interface Action {
    type: 
        typeof GET_TERRAIN_FACTOR |
        typeof GET_WEATHER_FACTOR |
        typeof GET_FIRST_POKEMON_SCREEN_FACTOR |
        typeof GET_SECOND_POKEMON_SCREEN_FACTOR
    effectedType: string
    weather: string
    screen: GetScreens
}

export type FactorDataActionTypes = Action