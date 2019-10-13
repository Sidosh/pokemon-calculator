import React, { Dispatch, SetStateAction, FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import {
    getTerrainFactor,
    getWeatherFactor,
    getFirstPokemonScreenFactor,
    getSecondPokemonScreenFactor
} from '../../store/FactorData/actions'
import FieldTerrain from '../../components/ui/FieldTerrain/FieldTerrain';
import FieldWeather from '../../components/ui/FieldWeather/FieldWeather';
import FieldScreens from '../../components/ui/FieldScreens/FieldScreens';

const mapDispatchToProps = {
    getTerrainFactor,
    getWeatherFactor,
    getFirstPokemonScreenFactor,
    getSecondPokemonScreenFactor
}

const FieldEffects: FC<{}> = () => {
    return (
        <>
        <h2 className="text-center">Feldeffekte</h2>
        <div>
            <FieldTerrain />
            <FieldWeather />
            <FieldScreens />
        </div>
        <style>
            {".active{background-color:#63aac6}"}
            {".active:focus{outline: none}"}
        </style>
        </>
    )
}

export default connect(undefined, mapDispatchToProps)(FieldEffects)