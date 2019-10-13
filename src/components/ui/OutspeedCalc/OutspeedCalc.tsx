import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { calcStats } from '../../functional/calcStats';
import { StateType } from '../../../store/types';

interface IOutspeedCalc { 
    direction: string; 
    getNature: {
        naturePlus: string
        natureMinus: string
        status: string
    }
}

const OutspeedCalc = (props: IOutspeedCalc) => {
    const [ ownInitEVs, setOwnInitEVs ] = useState(0)
    const firstPokemon = useSelector((state: StateType) => state.damageData.firstPokemon)
    const secondPokemon = useSelector((state: StateType) => state.damageData.secondPokemon)
    const firstPokemonWithoutEvs = useSelector((state: StateType) => state.pokemonData.firstPokemon)
    const secondPokemonWithoutEvs = useSelector((state: StateType) => state.pokemonData.secondPokemon)
    const { direction, getNature } = props
    const calcEVs = (props: IOutspeedCalc) => {
        let opponentInit = 1
        if (
            firstPokemonWithoutEvs !== undefined && 
            secondPokemonWithoutEvs !== undefined && 
            firstPokemonWithoutEvs.stats !== undefined && 
            secondPokemonWithoutEvs.stats !== undefined
        ) {
            if (direction === "first") {
                opponentInit = secondPokemon.speed
                whileLoop(firstPokemonWithoutEvs.stats[0].base_stat, firstPokemon, opponentInit)
            } else {
                opponentInit = firstPokemon.speed
                whileLoop(secondPokemonWithoutEvs.stats[0].base_stat, firstPokemon, opponentInit)
            }
        }
    }
    
    const whileLoop = (value: number, firstPokemon: any, opponentInit: number) => {
        let ownInit = 1, i = "0", boost = 0
        do {
            ownInit = calcStats({stat: "Initiative", value, ev: 252, dv: 31, boost, getNature})
            if (Math.floor(ownInit) > opponentInit) {
                ownInit = calcStats({stat: "Initiative", value, ev: 0, dv: 31, boost, getNature})
                if (Math.floor(ownInit) <= opponentInit) {
                    do {
                        i += 4
                        ownInit = calcStats({stat: "Initiative", value, ev: Number(i), dv: 31, boost, getNature})
                    } while (Math.floor(ownInit) <= opponentInit)
                    i += " EV + " + boost + "x boosten"
                } else {
                    i = "0 EV + " + boost + "x boosten"
                }
            } else {
                ownInit *= 1.1
                if (Math.floor(ownInit) > opponentInit) {
                    ownInit = calcStats({stat: "Initiative", value, ev: 0, dv: 31, boost, getNature}) * 1.1
                    if (Math.floor(ownInit) <= opponentInit) {
                        do {
                            i += 4
                            ownInit = calcStats({stat: "Initiative", value, ev: Number(i), dv: 31, boost, getNature}) * 1.1
                        } while (Math.floor(ownInit) <= opponentInit)
                        i += " EV + " + boost + "x boosten + Wesen"
                    } else {
                        i = "0 EV + " + boost + "x boosten  + Wesen"
                    }
                } else {
                    boost += 1
                }
            }
            if (boost > 6) {
                return i = "Unmöglich"
            }
        } while (ownInit <= opponentInit)
        setOwnInitEVs(Number(i))
        return i
    }
    
    return (
        <>
            <button onClick={() => calcEVs(props)}>OutspeedCalc</button>
            <p>{ownInitEVs}</p>

        </>
    )
}

export default OutspeedCalc