import React, { useState, useEffect, FC } from 'react'
import AttackDetails from '../AttackDetails/AttackDetails';
import { callAttacksApi, callItemsApi, checkForMega, callPokemonApi, checkForAlternativeForms } from '../../functional/apiCalls';
import { toCapitalize } from '../../functional/textChanges';
import CalcDamage from '../CalcDamage/CalcDamage';
import { callApiTimeout, changeAbility, changeStatus } from '../../functional/generalFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstPokemonNaturePlus, getSecondPokemonNaturePlus, getFirstPokemonItem, getSecondPokemonItem, getFirstPokemonAbility, getSecondPokemonAbility } from '../../../store/DamageData/actions';
import { getFirstPokemonAttacks, getSecondPokemonAttacks } from '../../../store/AttackData/actions';
import { StateType } from '../../../store/types';
import { attack } from '../../typescript/types';

interface IAttackTableRow {
    getPokemon: any,
    getItem: any,
    getAttacks: any,
    attacks: any,
    pokemon: {
        name: string
    }
    abilities: [
        {ability: {name: string}},
        {ability: {name: string}}?,
        {ability: {name: string}}?
    ]
    direction: string
    getNature: {
        naturePlus: string,
        natureMinus: string,
        status: string
    }
    languages: {
        allPokemonLanguages: {}
        allAttackLanguages: {}
        allItemLanguages: {}
    }
}

const AttackTableRow: FC<IAttackTableRow> = (props) => {
    const initialCurrentAttack = {
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
    const dispatch = useDispatch()
    const [ megaExists, setMegaExists ] = useState(false)
    const [ alternativeForm, setAlternativeForm ] = useState([{pokemon: {name: ""}}])
    let { getPokemon, attacks, getAttacks, pokemon, abilities, direction, getItem, languages } = props
    let setAlternativeForms = <>""</>
    const firstPokemonItem = useSelector((state:StateType) => state.damageData.firstPokemon.item)
    const secondPokemonItem = useSelector((state:StateType) => state.damageData.secondPokemon.item)
    let currentItem = ""

    useEffect(() => {
        if (direction === "first") {
            currentItem = firstPokemonItem.name
        } else {
            currentItem = secondPokemonItem.name
        }
    }, [firstPokemonItem, secondPokemonItem])

    const changeNatures = (value: string) => {
        if (direction === "first") {
            dispatch(getFirstPokemonNaturePlus(value))
        } else {
            dispatch(getSecondPokemonNaturePlus(value))
        }
    }

    if (abilities !== undefined) {
        useEffect(() => {
            checkForMega({name: pokemon.name, setMegaExists})
            checkForAlternativeForms({name: pokemon.name, setAlternativeForm})
        }, [pokemon.name])
        if (megaExists === true) {
            if (pokemon.name.slice(-5) === "-mega") {
                pokemon.name = pokemon.name.slice(0, -5)
            } else if (pokemon.name.slice(-7) === "-mega-x" || pokemon.name.slice(-7) === "-mega-y") {
                pokemon.name = pokemon.name.slice(0, -7)
            }
            setAlternativeForms = 
            <select onChange={event => callApiTimeout(callPokemonApi, [event.target.value, getPokemon, languages.allPokemonLanguages])}>
                <option value={pokemon.name} selected>Normale Form</option>
                <option value={pokemon.name + "-mega"}>Mega Form</option>
            </select>
            if (pokemon.name === "charizard" || pokemon.name === "mewtwo") {
                setAlternativeForms = 
                <select onChange={event => callApiTimeout(callPokemonApi, [event.target.value, getPokemon, languages.allPokemonLanguages])}>
                    <option value={pokemon.name} selected>Normale Form</option>
                    <option value={pokemon.name + "-mega-x"}>Mega Form X</option>
                    <option value={pokemon.name + "-mega-y"}>Mega Form Y</option>
                </select>
            }
        } else if (alternativeForm !== undefined && alternativeForm.length > 1) {
            setAlternativeForms = 
            <select onChange={event => callApiTimeout(callPokemonApi, [event.target.value, getPokemon, languages.allPokemonLanguages])}>
                {alternativeForm.map((item) => <option value={item.pokemon.name}>{toCapitalize(item.pokemon.name.replace('-', " "))}</option>)}
            </select>
        } else {
            setAlternativeForms = <></>
        }
        return (
            <>
            <table className="w-100">
                <tbody>
                    <tr className="text-center">
                        <th>Fähigkeit: </th>
                        <th>Item: </th>
                        <th>Status:</th>
                    </tr>
                    <tr className="text-center">
                        <td>
                            <select onChange={(event) => changeAbility(event.target.value, direction)}>
                                <option value="none"></option>
                                {
                                    abilities.map((item, i) => {
                                        if (item !== undefined) {
                                            const { name } = item.ability
                                            return (
                                                <option value={name} key={i}>{toCapitalize(name)}</option>
                                            )
                                        }
                                    })
                                }
                            </select>
                        </td>
                        <td>
                            <form className="mb-0">
                                <label className="ml-2 mb-0">
                                    <input className="ml-2" type="text" placeholder={currentItem} onChange={(event) => callApiTimeout(callItemsApi, [event.target.value, getItem, languages.allItemLanguages])} />
                                </label>
                            </form>
                        </td>
                        <td>
                            <select onChange={(event) => changeStatus(event.target.value, direction)}>
                                <option value="none">Kein Status</option>
                                <option value="burned">Verbrannt</option>
                                <option value="poisoned">Vergiftet</option>
                                <option value="badly-poisoned">Schwer vergiftet</option>
                                <option value="paralyzed">Paralysiert</option>
                                <option value="sleeping">Schlaf</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="text-center">
                        <th>Wesen +:</th>
                        <th>Wesen -:</th>
                    </tr>
                    <tr className="text-center">
                        <td>
                        <select onChange={(event) => changeNatures(event.target.value)}>
                            <option>Angriff</option>
                            <option>Verteidigung</option>
                            <option>Spezial Angriff</option>
                            <option>Spezial Verteidigung</option>
                            <option>Initiative</option>
                        </select>
                        </td>
                        <td>
                        <select onChange={(event) => changeNatures(event.target.value)}>
                            <option>Angriff</option>
                            <option>Verteidigung</option>
                            <option>Spezial Angriff</option>
                            <option>Spezial Verteidigung</option>
                            <option>Initiative</option>
                        </select>
                        </td>
                        <td>
                            {setAlternativeForms}
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="w-100">
                <tbody>
                    <tr className="text-center">
                        <th>Attackenname</th>
                        <th>Basestärke</th>
                        <th>Genauigkeit</th>
                        <th>Status</th>
                        <th>Typ</th>
                        <th>AP</th>
                    </tr>
                    {
                        attacks.map((item: attack, i: number) => {
                            return (
                                <>
                                    <tr className="text-center">
                                    <td>
                                        <form className="mb-0">
                                            <label className="ml-2 mb-0">
                                                <input className="ml-2" type="text" onChange={(event) => callApiTimeout(callAttacksApi, [event.target.value, getAttacks, attacks, languages.allAttackLanguages, i])} />
                                            </label>
                                        </form>
                                    </td>
                                    <AttackDetails currentAttack={item}/>
                                </tr>
                                <CalcDamage currentAttack={item} direction={direction} />
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
            </>
        )
    } else {
        return (            
            <table className="w-75">
                <tbody>
                    <tr className="text-center">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default AttackTableRow