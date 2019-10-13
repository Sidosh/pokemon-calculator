import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import StatTable from '../../components/ui/StatTable/StatTable';
import { getSecondPokemon } from "../../store/PokemonData/actions"
import AttackTableRow from '../../components/ui/AttackTableRow/AttackTableRow'
import OutspeedCalc from '../../components/ui/OutspeedCalc/OutspeedCalc';
import { StateType } from '../../store/types';
import { getSecondPokemonTypes, getSecondPokemonItem, getSecondPokemonNaturePlus, getSecondPokemonNatureMinus, getSecondPokemonAbility } from '../../store/DamageData/actions';
import ImportSet from '../../components/ui/ImportSet/ImportSet';
import { getSecondPokemonAttacks, getFirstPokemonAttacks } from '../../store/AttackData/actions';

const SecondPokemon: FC<{}> = () => {
    const secondPokemon = useSelector((state: StateType) => state.pokemonData.secondPokemon)
    const secondPokemonAttacks = useSelector((state: StateType) => state.attackData.secondPokemonAttacks)
    const naturePlus = useSelector((state: StateType) => state.damageData.secondPokemon.naturePlus)
    const natureMinus = useSelector((state: StateType) => state.damageData.secondPokemon.natureMinus)
    const status = useSelector((state: StateType) => state.damageData.secondPokemon.status)
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
                direction="second"
                getNature={getNature}
                getPokemon={getSecondPokemon}
                pokemon={secondPokemon}
                getPokemonTypes={getSecondPokemonTypes}
            />
            <AttackTableRow 
                abilities={secondPokemon.abilities}
                pokemon={secondPokemon}
                getPokemon={getSecondPokemon}
                getItem={getSecondPokemonItem}
                getAttacks={getSecondPokemonAttacks}
                attacks={secondPokemonAttacks}
                languages={languages}
                getNature={getNature}
                direction="second"
            />
            <OutspeedCalc direction="second" getNature={getNature} />
            <ImportSet 
                getPokemon={getSecondPokemon}
                getItem={getSecondPokemonItem}
                getNature={[getSecondPokemonNaturePlus, getSecondPokemonNatureMinus]}
                getAbility={getSecondPokemonAbility}
                getAttacks={getSecondPokemonAttacks}
                attacks={secondPokemonAttacks}
            />
        </>
    )
}

export default SecondPokemon