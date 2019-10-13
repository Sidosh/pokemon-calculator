import * as types from "./types";

const initialState: types.DamageDataState = {
    firstPokemon: {
        attack: 0,
        defense: 0,
        speAtt: 0,
        speDef: 0,
        speed: 0,
        types: [{
            type: {
                name: "",
                url: ""
            }
        }],
        naturePlus: "Angriff",
        natureMinus: "Angriff",
        item: {
            name: "",
            effect_entries: [
                {
                    short_effect: ""
                }
            ],
            category: {
                name: ""
            }
        },
        status: "none",
        ability: "none"
    },
    secondPokemon: {
        attack: 0,
        defense: 0,
        speAtt: 0,
        speDef: 0,
        speed: 0,
        types: [{
            type: {
                name: "",
                url: ""
            }
        }],
        naturePlus: "Angriff",
        natureMinus: "Angriff",
        item: {
            name: "",
            effect_entries: [
                {
                    short_effect: ""
                }
            ],
            category: {
                name: ""
            }
        },
        status: "none",
        ability: "none"
    }
}

export const DamageDataReducer = (state: types.DamageDataState = initialState, action: types.DamageDataActionTypes) => {
    switch (action.type) {
        case types.GET_FIRST_POKEMON_ATTACK:
        if (action.status === "phy") {
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    attack: action.value
                }
            }
        } else if (action.status === "spe") {
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    speAtt: action.value
                }
            }
        } else {
            return state
        }
        case types.GET_FIRST_POKEMON_DEFENSE:
        if (action.status === "phy") {
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    defense: action.value
                }
            }
        } else if (action.status === "spe") {
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    speDef: action.value
                }
            }
        } else {
            return state
        }
        case types.GET_FIRST_POKEMON_SPEED:
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    speed: action.value
                }
            }
        case types.GET_FIRST_POKEMON_TYPES:
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    types: action.value
                }
            }
        case types.GET_FIRST_POKEMON_NATURE_PLUS:
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    naturePlus: action.value
                }
            }
        case types.GET_FIRST_POKEMON_NATURE_MINUS:
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    natureMinus: action.value
                }
            }
        case types.GET_FIRST_POKEMON_ITEM:
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    item: action.value
                }
            }
        case types.GET_FIRST_POKEMON_STATUS:
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    status: action.value
                }
            }
        case types.GET_FIRST_POKEMON_ABILITY:
            return {
                ...state,
                firstPokemon: {
                    ...state.firstPokemon,
                    ability: action.value
                }
            }
        case types.GET_SECOND_POKEMON_ATTACK:
        if (action.status === "phy") {
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    attack: action.value
                }
            }
        } else if (action.status === "spe") {
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    speAtt: action.value
                }
            }
        } else {
            return state
        }
        case types.GET_SECOND_POKEMON_DEFENSE:
        if (action.status === "phy") {
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    defense: action.value
                }
            }
        } else if (action.status === "spe") {
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    speDef: action.value
                }
            }
        } else {
            return state
        }
        case types.GET_SECOND_POKEMON_SPEED:
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    speed: action.value
                }
            }
        case types.GET_SECOND_POKEMON_TYPES:
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    types: action.value
                }
            }
        case types.GET_SECOND_POKEMON_NATURE_PLUS:
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    naturePlus: action.value
                }
            }
        case types.GET_SECOND_POKEMON_NATURE_MINUS:
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    natureMinus: action.value
                }
            }
        case types.GET_SECOND_POKEMON_ITEM:
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    item: action.value
                }
            }
        case types.GET_SECOND_POKEMON_STATUS:
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    status: action.value
                }
            }
        case types.GET_SECOND_POKEMON_ABILITY:
            return {
                ...state,
                secondPokemon: {
                    ...state.secondPokemon,
                    ability: action.value
                }
            }
        default:
            return state
    }
}