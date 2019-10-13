import React from 'react'
import StatTableRow from '../StatTableRow/StatTableRow';
import { callPokemonApi } from '../../functional/apiCalls';
import { toCapitalize } from '../../functional/textChanges';
import { callApiTimeout } from '../../functional/generalFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../../store/types';

interface IStatTable { 
    direction: string
    pokemon: {
        stats: [
            {base_stat: number},
            {base_stat: number},
            {base_stat: number},
            {base_stat: number},
            {base_stat: number},
            {base_stat: number}
        ]
        name: string
        types: any
    };
    getNature: {
        naturePlus: string
        natureMinus: string
        status: string
    }
    getPokemon: any;
    getPokemonTypes: any
}

const StatTable = (props: IStatTable) => {
    const dispatch = useDispatch()
    const allPokemonLanguages = useSelector((state: StateType) => state.pokemonData.allPokemonLanguages)
    const { direction, getNature, pokemon, getPokemon, getPokemonTypes } = props
    let { stats, name, types } = pokemon
    let speed = 0, speDef = 0, speAtt = 0, defense = 0, attack = 0, hp = 0
    if (stats !== undefined) {
        speed = stats[0].base_stat
        speDef = stats[1].base_stat
        speAtt = stats[2].base_stat
        defense = stats[3].base_stat
        attack = stats[4].base_stat
        hp = stats[5].base_stat
        dispatch(getPokemonTypes(types))
    }
    return (
        <div>
            <form>
                <label className="ml-2">
                    Pokémon: <input className="ml-2 mt-4" type="text" placeholder={toCapitalize(name)} onChange={(event) => callApiTimeout(callPokemonApi, [event.target.value, getPokemon, allPokemonLanguages])} />
                </label>
            </form>
            <table className="w-75">
                <tbody>
                    <tr className="text-center">
                        <th></th>
                        <th>Base</th>
                        <th>EVs</th>
                        <th>DVs</th>
                        <th>Boost</th>
                        <th>Wert</th>
                    </tr>
                    <StatTableRow direction={direction} getNature={getNature} stat="KP" value={hp} />
                    <StatTableRow direction={direction} getNature={getNature} stat="Angriff" value={attack} />
                    <StatTableRow direction={direction} getNature={getNature} stat="Verteidigung" value={defense} />
                    <StatTableRow direction={direction} getNature={getNature} stat="Spezial Angriff" value={speAtt} />
                    <StatTableRow direction={direction} getNature={getNature} stat="Spezial Verteidigung" value={speDef} />
                    <StatTableRow direction={direction} getNature={getNature} stat="Initiative" value={speed} />
                </tbody>
            </table>
        </div>
    );
}

export default StatTable