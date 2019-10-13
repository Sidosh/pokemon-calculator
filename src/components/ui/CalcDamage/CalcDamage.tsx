import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { calcDamage } from '../../functional/calcDamage';
import { StateType } from '../../../store/types';

interface ICalcDamage {
    currentAttack: any; 
    direction: string; 
}

const CalcDamage = (props: ICalcDamage) => {
    const firstPokemon = useSelector((state: StateType) => state.damageData.firstPokemon)
    const secondPokemon = useSelector((state: StateType) => state.damageData.secondPokemon)
    const factors = useSelector((state: StateType) => state.factorData)
    let ownStats = firstPokemon, opponentStats = secondPokemon, multiHitValues = [], multiHitSelect = <></>, minDamage = 0, maxDamage = 0
    const { currentAttack, direction } = props

    const [ multiHit, setMultiHit ] = useState(1)

    let opponentFactors = {
        terrain: "",
        weather: "",
        screens: {
            reflector: false,
            lightscreen: false,
            auroraveil: false
        }
    }

    if (direction === "first") {
        ownStats = firstPokemon
        opponentStats = secondPokemon
        opponentFactors = {
            terrain: factors.terrain,
            weather: factors.weather,
            screens: factors.secondPokemon.screens
        }
    } else if (direction === "second") {
        ownStats = secondPokemon
        opponentStats = firstPokemon
        opponentFactors = {
            terrain: factors.terrain,
            weather: factors.weather,
            screens: factors.firstPokemon.screens
        }
    }

    if (currentAttack.meta !== undefined) {
        if (currentAttack.meta.min_hits !== null) {
            for (let i = currentAttack.meta.min_hits; i <= currentAttack.meta.max_hits; i++) {
                multiHitValues.push(i)
            }
        }
    }

    if (multiHitValues.length !== 0) {
        multiHitSelect = 
        <select onChange={event => setMultiHit(Number(event.target.value))}>
            <option value={1}>1</option>
            {multiHitValues.map(item => (
                <option value={item}>{item}</option>
            ))}
        </select>
    }
    minDamage = calcDamage({ownStats, opponentStats, currentAttack, roll: 85, factors: opponentFactors}) * multiHit
    maxDamage = calcDamage({ownStats, opponentStats, currentAttack, roll: 100, factors: opponentFactors})* multiHit

    return (
        <tr>
            <td colSpan={5} className="text-center">
                {minDamage} KP - {maxDamage} KP
            </td>
            <td>
                {multiHitSelect}
            </td>
        </tr>     
    )
}

export default CalcDamage