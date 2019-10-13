import { GET_FIRST_POKEMON, GET_SECOND_POKEMON, GET_ALL_POKEMON_LANGUAGES, GET_ALL_ATTACK_LANGUAGES, GET_ALL_ITEM_LANGUAGES, PokemonDataActionTypes, PokemonDataState } from "./types";

const initialState: PokemonDataState = {
    firstPokemon: {
    stats: [{
        base_stat: 0,
    }, {
        base_stat: 0,
    }, {
        base_stat: 0,
    }, {
        base_stat: 0,
    }, {
        base_stat: 0,
    }, {
        base_stat: 0,
    }],
    name: "",
    types: [],
    abilities: [
        {
            ability: {
                name: "Keine Fähigkeit"
            }
        }
    ],
    item: {
        name: "",
        effect_entries: [
            {
                short_effect: ""
            }
        ]
    }
},
    secondPokemon: {
    stats: [{
        base_stat: 0,
    }, {
        base_stat: 0,
    }, {
        base_stat: 0,
    }, {
        base_stat: 0,
    }, {
        base_stat: 0,
    }, {
        base_stat: 0,
    }],
    name: "",
    types: [],
    abilities: [
        {
            ability: {
                name: "Keine Fähigkeit"
            }
        }
    ],
    item: {
        name: "",
        effect_entries: [
            {
                short_effect: ""
            }
        ]
    }
},
    allPokemonLanguages: [],
    allAttackLanguages: [],
    allItemLanguages: [],
}

export const PokemonDataReducer = (state = initialState, action: PokemonDataActionTypes) => {
    switch (action.type) {
        case GET_FIRST_POKEMON:
            return {
                ...state,
                firstPokemon: action.data
            }
        case GET_SECOND_POKEMON:
            return {
                ...state,
                secondPokemon: action.data
            }
        case GET_ALL_POKEMON_LANGUAGES:
            return {
                ...state,
                allPokemonLanguages: [...state.allPokemonLanguages, action.data]
            }
        case GET_ALL_ATTACK_LANGUAGES:
            return {
                ...state,
                allAttackLanguages: [...state.allAttackLanguages,action.data]
            }
        case GET_ALL_ITEM_LANGUAGES:
            return {
                ...state,
                allItemLanguages: [...state.allItemLanguages,action.data]
            }
        default:
        return state
    }
}