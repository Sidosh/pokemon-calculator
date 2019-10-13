import React, { useState, FC } from 'react'
import FirstPokemon from '../FirstPokemon/FirstPokemon';
import SecondPokemon from '../SecondPokemon/SecondPokemon';
import initialLoadingPackages from '../../components/functional/initialLoadingPackages';
import { useSelector } from 'react-redux';
import FieldEffects from '../FieldEffects/FieldEffects';
import { StateType } from '../../store/types';

const DamageCalc: FC<{}> = () => {
    const allPokemonLanguages = useSelector((state: StateType) => state.pokemonData.allPokemonLanguages)
    const [ finishedLoading, setFinishedLoading  ] = useState(false)

    if (allPokemonLanguages.length <= 1 && finishedLoading === false) {
        initialLoadingPackages(setFinishedLoading)
        setFinishedLoading(true)
    }

    if (allPokemonLanguages.length > 1 || finishedLoading) {
        return (
            <>
                <div className="row w-100">
                    <div className="col-4">
                        <FirstPokemon />
                    </div>
                    <div className="col-4">
                        <FieldEffects />
                    </div>
                    <div className="col-4">
                        <SecondPokemon />
                    </div>
                </div>
            </>
        );
    } else {
        return (<h1>"LADEN..."</h1>)
    }
}

export default DamageCalc