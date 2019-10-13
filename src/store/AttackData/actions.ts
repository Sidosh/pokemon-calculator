import { AttackDataActionType, GET_FIRST_POKEMON_ATTACKS, GET_SECOND_POKEMON_ATTACKS } from './types'
import { attack } from '../../components/typescript/types';

export const getFirstPokemonAttacks = (data: attack[]): AttackDataActionType => {
    return {
        type: GET_FIRST_POKEMON_ATTACKS,
        data
    }
}

export const getSecondPokemonAttacks = (data: attack[]): AttackDataActionType => {
    return {
        type: GET_SECOND_POKEMON_ATTACKS,
        data
    }
}