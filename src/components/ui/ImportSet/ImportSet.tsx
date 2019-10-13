import React, { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../../../store/types';
import { callPokemonApi, callItemsApi, callAttacksApi } from '../../functional/apiCalls';
import { removeSpaces } from '../../functional/textChanges';
import { changeNature } from '../../functional/generalFunctions';

interface IImportSet {
    getPokemon: any,
    getItem: any,
    getNature: any[],
    getAbility: any,
    getAttacks: any,
    attacks: any
}

const ImportSet: FC<IImportSet> = (props) => {
    const dispatch = useDispatch()
    const { getPokemon, getItem, getNature, getAbility, getAttacks, attacks } = props
    const allPokemonLanguages = useSelector((state: StateType) => state.pokemonData.allPokemonLanguages)
    const allItemLanguages = useSelector((state: StateType) => state.pokemonData.allItemLanguages)
    const allAttackLanguages = useSelector((state: StateType) => state.pokemonData.allAttackLanguages)
    let diff = 0
    let ivs = ""
    let evs = ""
    
    const checkInput = (event: string) => {
        const lines = event.split(/\r|\r\n|\n/);


        if (lines.length >= 7 && lines.length <= 9) {
            const pokemon = removeSpaces(lines[0].substring(0, lines[0].indexOf('@')-1));
            const nickname = pokemon.substring(0, pokemon.indexOf('('));
            let pokemonName = pokemon.substring(pokemon.indexOf('(') + 1, pokemon.indexOf(')'));
            const item = removeSpaces(lines[0].substring(lines[0].indexOf('@') + 2, lines[0].length));
            const ability = removeSpaces(lines[1].substring(lines[1].indexOf('Ability: ') + 9))
            if (lines[2].substring(0, 3) === "EVs") {
                evs = lines[2].substring(lines[2].indexOf('EVs: ') + 5)
                diff += 1
            }
            const nature = removeSpaces(lines[2 + diff].substring(0, lines[2 + diff].indexOf('Nature')))
            if (lines[3 + diff].substring(0, 3) === "IVs") {
                ivs = lines[3 + diff].substring(lines[3 + diff].indexOf('IVs: ')),
                diff += 1
            }
            const importedAttacks = [
                removeSpaces(lines[3+diff].substring(lines[3+diff].indexOf('- ') + 2)), 
                removeSpaces(lines[4+diff].substring(lines[4+diff].indexOf('- ') + 2)), 
                removeSpaces(lines[5+diff].substring(lines[5+diff].indexOf('- ') + 2)), 
                removeSpaces(lines[6+diff].substring(lines[6+diff].indexOf('- ') + 2))
            ]
            if (pokemon === "") {
                pokemonName = lines[0].substring(lines[0].indexOf('(') + 1, lines[0].indexOf(')'))
                if (pokemonName === "") {
                    pokemonName = lines[0]
                }
            }
            if (pokemonName === "") {
                pokemonName = pokemon
            }
            if (item !== lines[0].substring(1)) {
                callItemsApi([item, getItem, allItemLanguages])
            }
            importedAttacks.map((item: string, i: number) => {
                callAttacksApi([item, getAttacks, attacks, allAttackLanguages, i])
            })
            dispatch(getAbility(ability.toLowerCase()))
            callPokemonApi([pokemonName, getPokemon, allPokemonLanguages])
            changeNature(nature, getNature[0], getNature[1])
        }
    }
    return (
        <>
            <textarea rows={10} cols={30} onChange={(event) => checkInput(event.target.value)} />
            <input type="submit" />
        </>
    )
}

export default ImportSet