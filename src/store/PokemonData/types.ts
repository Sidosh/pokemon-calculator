import { types } from "../../components/typescript/types";

export const GET_FIRST_POKEMON = "GET_FIRST_POKEMON"
export const GET_SECOND_POKEMON = "GET_SECOND_POKEMON"

export const GET_ALL_POKEMON_LANGUAGES = "GET_ALL_POKEMON_LANGUAGES"
export const GET_ALL_ATTACK_LANGUAGES = "GET_ALL_ATTACK_LANGUAGES"
export const GET_ALL_ITEM_LANGUAGES = "GET_ALL_ITEM_LANGUAGES"

export interface PokemonDataState {
    firstPokemon: PokemonRequires,
    secondPokemon: PokemonRequires,
    allPokemonLanguages: any[],
    allAttackLanguages: any[],
    allItemLanguages: any[],
}

interface GetPokemon {
    type: 
        typeof GET_FIRST_POKEMON | 
        typeof GET_SECOND_POKEMON
    data: PokemonRequires
}

interface Action {
    type: 
        typeof GET_ALL_POKEMON_LANGUAGES | 
        typeof GET_ALL_ATTACK_LANGUAGES | 
        typeof GET_ALL_ITEM_LANGUAGES
    data: object[]
}

export type PokemonDataActionTypes = GetPokemon | Action

export type PokemonRequires = {
    stats: [{
        base_stat: number;
    }, {
        base_stat: number;
    }, {
        base_stat: number;
    }, {
        base_stat: number;
    }, {
        base_stat: number;
    }, {
        base_stat: number;
    }];
    name: string;
    types: types[];
    abilities: [
        {ability: {name: string}},
        {ability: {name: string}}?,
        {ability: {name: string}}?
    ],
    item: {
        name: string,
        effect_entries: [
            {
                short_effect: string,
            }
        ]     
    }
}