import { GET_FIRST_POKEMON_ATTACKS, GET_SECOND_POKEMON_ATTACKS, AttackDataActionType, AttackDataState } from "./types";
import { attack } from "../../components/typescript/types";

const initialCurrentAttack: attack = {
    power: 0,
    accuracy: 0,
    name: "",
    damage_class: {
        name: ""
    },
    meta: {
        drain: 0
    },
    type: {
        name: ""
    },
    pp: 0
}

const initialState: AttackDataState = {
    firstPokemonAttacks: [initialCurrentAttack],
    secondPokemonAttacks: [initialCurrentAttack],
    attackDetails: [{}]
}

const filterArray = (arr: attack[]) => {
    let filteredArr: attack[] = []
    arr.map((item: attack) => {
        if (item.name !== undefined && item !== undefined && item !== null) {
            filteredArr.push(item)
        }
    })
    return filteredArr
}

export const AttackDataReducer = (state = initialState, action: AttackDataActionType) => {
    switch(action.type) {
        case GET_FIRST_POKEMON_ATTACKS:
        return {
            ...state,
            firstPokemonAttacks: [...state.firstPokemonAttacks, ...filterArray(action.data)],
            attackDetails: [...state.attackDetails, ...action.data]
        }
        case GET_SECOND_POKEMON_ATTACKS:
        return {
            ...state,
            secondPokemonAttacks: [...state.firstPokemonAttacks, ...filterArray(action.data)],
            attackDetails: [...state.attackDetails, ...action.data]
        }
        default:
        return state
    }
}