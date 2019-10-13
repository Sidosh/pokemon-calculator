import React, { useState, Dispatch, SetStateAction, FC } from 'react'
import FieldListButton from '../FieldListButton/FieldListButton';
import { useDispatch } from 'react-redux';
import { getTerrainFactor } from '../../../store/FactorData/actions';

const FieldTerrain: FC<{}> = () => {
    const [ electricTerrain, setElectricTerrain ] = useState("w-100")
    const [ grassyterrain, setGrassyTerrain ] = useState("w-100")
    const [ mistyTerrain, setMistyTerrain ] = useState("w-100")
    const [ psychicTerrain, setPsychicTerrain ] = useState("w-100")
    const dispatch = useDispatch()
    let effectedType = ""
    const activateTerrain = (value: string) => {
        switch (value) {
            case "electric":
                if (electricTerrain !== "w-100 active") {
                    setElectricTerrain("w-100 active")
                    setGrassyTerrain("w-100")
                    setMistyTerrain("w-100")
                    setPsychicTerrain("w-100")
                    effectedType = "electric"
                } else {
                    setElectricTerrain("w-100")
                    effectedType = ""
                }
                break;
            case "grassy":
                if (grassyterrain !== "w-100 active") {
                    setElectricTerrain("w-100")
                    setGrassyTerrain("w-100 active")
                    setMistyTerrain("w-100")
                    setPsychicTerrain("w-100")
                    effectedType = "grassy"
                } else {
                    setGrassyTerrain("w-100")
                    effectedType = ""
                }
                break;
            case "misty":
                if (mistyTerrain !== "w-100 active") {
                    setElectricTerrain("w-100")
                    setGrassyTerrain("w-100")
                    setMistyTerrain("w-100 active")
                    setPsychicTerrain("w-100")
                    effectedType = "misty"
                } else {
                    setMistyTerrain("w-100")
                    effectedType = ""
                }
                break;
            case "psychic":
                if (psychicTerrain !== "w-100 active") {
                    setElectricTerrain("w-100")
                    setGrassyTerrain("w-100")
                    setMistyTerrain("w-100")
                    setPsychicTerrain("w-100 active")
                    effectedType = "psychic"
                } else {
                    setPsychicTerrain("w-100")
                    effectedType = ""
                }
                break;
        }
        dispatch(getTerrainFactor(effectedType)) 
    }

    return (
        <ul className="list-group list-group-horizontal mb-3">
            <FieldListButton classes={electricTerrain} activate={() => activateTerrain("electric")} name="Elektrofeld"/>
            <FieldListButton classes={grassyterrain} activate={() => activateTerrain("grassy")} name="Grasfeld"/>
            <FieldListButton classes={mistyTerrain} activate={() => activateTerrain("misty")} name="Nebelfeld"/>
            <FieldListButton classes={psychicTerrain} activate={() => activateTerrain("psychic")} name="Psychofeld"/>
        </ul>
    )
}

export default FieldTerrain