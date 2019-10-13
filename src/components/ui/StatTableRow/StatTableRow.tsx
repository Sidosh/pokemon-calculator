import React, { useState } from 'react'
import { calcStats } from '../../functional/calcStats';
import { useDispatch } from 'react-redux';
import { getFirstPokemonAttack, getFirstPokemonDefense, getFirstPokemonSpeed, getSecondPokemonAttack, getSecondPokemonDefense, getSecondPokemonSpeed } from '../../../store/DamageData/actions';

interface IStatTableRow { 
    direction: string
    stat: string; 
    value: number; 
    getNature: {
        naturePlus: string
        natureMinus: string
        status: string
    }
}

const StatTableRow = (props: IStatTableRow) => {
    const dispatch = useDispatch()
    const { direction, stat, value, getNature } = props
    const [ evs, setEvs ] = useState(0)
    const [ dvs, setDvs ] = useState(31)
    const [ boost, setBoost ] = useState(0)
    let endStats = 0

    if (direction === "first") {
        endStats = calcStats({stat, value, ev: evs, dv: dvs, boost, getNature})
    
        switch(stat) {
            case "Angriff":
                dispatch(getFirstPokemonAttack(endStats, "phy"))
            break;
            case "Verteidigung":
                dispatch(getFirstPokemonDefense(endStats, "phy"))
            break;
            case "Spezial Angriff":
                dispatch(getFirstPokemonAttack(endStats, "spe"))
            break;
            case "Spezial Verteidigung":
                dispatch(getFirstPokemonDefense(endStats, "spe"))
            break;
            case "Initiative":
                dispatch(getFirstPokemonSpeed(endStats))
            break;
            default:
            break;
        }
    } else {
        endStats = calcStats({stat, value, ev: evs, dv: dvs, boost, getNature})
    
        switch(stat) {
            case "Angriff":
                dispatch(getSecondPokemonAttack(endStats, "phy"))
            break;
            case "Verteidigung":
                dispatch(getSecondPokemonDefense(endStats, "phy"))
            break;
            case "Spezial Angriff":
                dispatch(getSecondPokemonAttack(endStats, "spe"))
            break;
            case "Spezial Verteidigung":
                dispatch(getSecondPokemonDefense(endStats, "spe"))
            break;
            case "Initiative":
                dispatch(getSecondPokemonSpeed(endStats))
            break;
            default:
            break;
        }
    }

    return (
    <tr className="text-center">
        <th>{stat}</th>
        <td>{value}</td>
        <td><input type="number" min="0" max="252" onChange={(event) => setEvs(Number(event.target.value))} /></td>
        <td><input type="number" min="0" max="31" defaultValue="31" onChange={(event) => setDvs(Number(event.target.value))} /></td>
        <td>
            <select onChange={(event) => setBoost(Number(event.target.value))} defaultValue="0">
                <option>6</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
                <option>0</option>
                <option>-1</option>
                <option>-2</option>
                <option>-3</option>
                <option>-4</option>
                <option>-5</option>
                <option>-6</option>
            </select>
        </td>
        <td>{endStats}</td>
    </tr>
)}

export default StatTableRow