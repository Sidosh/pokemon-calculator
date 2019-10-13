import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import StatTable from '../../components/ui/StatTable/StatTable';
import { getFirstPokemon } from "../../store/PokemonData/actions"
import AttackTableRow from '../../components/ui/AttackTableRow/AttackTableRow';
import OutspeedCalc from '../../components/ui/OutspeedCalc/OutspeedCalc';
import { StateType } from '../../store/types';
import { getFirstPokemonTypes, getFirstPokemonItem, getFirstPokemonNaturePlus, getFirstPokemonNatureMinus, getFirstPokemonAbility } from '../../store/DamageData/actions';
import ImportSet from '../../components/ui/ImportSet/ImportSet';
import { getFirstPokemonAttacks } from '../../store/AttackData/actions';

const FirstPokemon: FC<{}> = () => {
    const firstPokemon = useSelector((state: StateType) => state.pokemonData.firstPokemon)
    const firstPokemonAttacks = useSelector((state: StateType) => state.attackData.firstPokemonAttacks)
    const naturePlus = useSelector((state: StateType) => state.damageData.firstPokemon.naturePlus)
    const natureMinus = useSelector((state: StateType) => state.damageData.firstPokemon.natureMinus)
    const status = useSelector((state: StateType) => state.damageData.firstPokemon.status)
    const allPokemonLanguages = useSelector((state: StateType) => state.pokemonData.allPokemonLanguages)
    const allAttackLanguages = useSelector((state: StateType) => state.pokemonData.allAttackLanguages)
    const allItemLanguages = useSelector((state: StateType) => state.pokemonData.allItemLanguages)
    const getNature = {
        naturePlus: naturePlus,
        natureMinus: natureMinus,
        status: status
    }
    const languages = {
        allPokemonLanguages: allPokemonLanguages,
        allAttackLanguages: allAttackLanguages,
        allItemLanguages: allItemLanguages
    }
    return (
        <>
            <StatTable 
                direction="first"
                getNature={getNature}
                getPokemon={getFirstPokemon}
                pokemon={firstPokemon}
                getPokemonTypes={getFirstPokemonTypes}
            />
            <AttackTableRow
                abilities={firstPokemon.abilities} 
                pokemon={firstPokemon}
                getPokemon={getFirstPokemon}
                getItem={getFirstPokemonItem}
                getAttacks={getFirstPokemonAttacks}
                attacks={firstPokemonAttacks}
                languages={languages}
                getNature={getNature}
                direction="first"
            />
            <OutspeedCalc direction="first" getNature={getNature} />
            <ImportSet 
                getPokemon={getFirstPokemon}
                getItem={getFirstPokemonItem}
                getNature={[getFirstPokemonNaturePlus, getFirstPokemonNatureMinus]}
                getAbility={getFirstPokemonAbility}
                getAttacks={getFirstPokemonAttacks}
                attacks={firstPokemonAttacks}
            />
        </>
    )
}

export default FirstPokemon