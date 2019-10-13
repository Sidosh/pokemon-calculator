import { GET_TERRAIN_FACTOR, GET_WEATHER_FACTOR, GET_FIRST_POKEMON_SCREEN_FACTOR, GET_SECOND_POKEMON_SCREEN_FACTOR, FactorDataState, FactorDataActionTypes } from "./types";

const initialState: FactorDataState = {
    terrain: "",
    weather: "",
    firstPokemon: {
        screens: {
            reflector: false,
            lightscreen: false,
            auroraveil: false
        }
    },
    secondPokemon: {
        screens: {
            reflector: false,
            lightscreen: false,
            auroraveil: false
        }
    }
}

export const FactorDataReducer = (state = initialState, action: FactorDataActionTypes) => {
    switch(action.type) {
        case GET_TERRAIN_FACTOR:
            return {
                ...state,
                terrain: action.effectedType
            }
        case GET_WEATHER_FACTOR:
            return {
                ...state,
                weather: action.weather
            }
        case GET_FIRST_POKEMON_SCREEN_FACTOR: 
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    screens: action.screen
                }
            }
        case GET_SECOND_POKEMON_SCREEN_FACTOR: 
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    screens: action.screen
                }
            }
        default:
        return state
    }
}