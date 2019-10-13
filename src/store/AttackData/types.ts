import { attack } from "../../components/typescript/types";

export const GET_FIRST_POKEMON_ATTACKS = "GET_FIRST_POKEMON_ATTACKS"
export const GET_SECOND_POKEMON_ATTACKS = "GET_SECOND_POKEMON_ATTACKS"

export interface AttackDataState {
    firstPokemonAttacks: attack[],
    secondPokemonAttacks: attack[],
    attackDetails: object[]
}

interface GetAttacksAction {
    type: typeof GET_FIRST_POKEMON_ATTACKS | typeof GET_SECOND_POKEMON_ATTACKS
    data: attack[]
}

export type AttackDataActionType = GetAttacksAction;