import * as types from "./types";

export const getTerrainFactor = (effectedType: string) => {
    return {
        type: types.GET_TERRAIN_FACTOR,
        effectedType
    }
}

export const getWeatherFactor = (weather: string) => {
    return {
        type: types.GET_WEATHER_FACTOR,
        weather
    }
}

export const getFirstPokemonScreenFactor = (screen: types.GetScreens) => {
    return {
        type: types.GET_FIRST_POKEMON_SCREEN_FACTOR,
        screen
    }
}

export const getSecondPokemonScreenFactor = (screen: types.GetScreens) => {
    return {
        type: types.GET_SECOND_POKEMON_SCREEN_FACTOR,
        screen
    }
}