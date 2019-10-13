import React, { useState, useEffect, FC } from 'react'
import { connect, useDispatch } from 'react-redux';
import FieldListButton from '../FieldListButton/FieldListButton';
import { getFirstPokemonScreenFactor, getSecondPokemonScreenFactor } from '../../../store/FactorData/actions';

const FieldScreens: FC<{}> = () => {
    const initialScreens = {
        reflector: false,
        lightscreen: false,
        auroraveil: false
    }
    const [ reflectorLeft, setReflectorLeft ] = useState("w-100")  
    const [ reflectorRight, setReflectorRight ] = useState("w-100")
    const [ lightscreenLeft, setLightscreenLeft ] = useState("w-100")  
    const [ lightscreenRight, setLightscreenRight ] = useState("w-100")
    const [ auroraveilLeft, setAuroraveilLeft ] = useState("w-100")  
    const [ auroraveilRight, setAuroraveilRight ] = useState("w-100")
    const [ firstPokemonScreens, setFirstPokemonScreens ] = useState(initialScreens)
    const [ secondPokemonScreens, setSecondPokemonScreens ] = useState(initialScreens)
    const emptyListItem = "w-25 list-group-item border-0"
    const dispatch = useDispatch()
    const activateScreen = (value: string, direction: string) => {
        switch(value) {
            case "reflect":
                if (direction === "first") {
                    if (reflectorLeft !== "w-100 active") {
                        setReflectorLeft("w-100 active")
                        setFirstPokemonScreens({
                            ...firstPokemonScreens,
                            reflector: true
                        })
                    } else {
                        setReflectorLeft("w-100")
                        setFirstPokemonScreens({
                            ...firstPokemonScreens,
                            reflector: false
                        })
                    }
                } else if (direction === "second") {
                    if (reflectorRight !== "w-100 active") {
                        setReflectorRight("w-100 active")
                        setSecondPokemonScreens({
                            ...secondPokemonScreens,
                            reflector: true
                        })
                    } else {
                        setReflectorRight("w-100")
                        setSecondPokemonScreens({
                            ...secondPokemonScreens,
                            reflector: false
                        })
                    }
                }
                break;
            case "lightscreen":
                if (direction === "first") {
                    if (lightscreenLeft !== "w-100 active") {
                        setLightscreenLeft("w-100 active")
                        setFirstPokemonScreens({
                            ...firstPokemonScreens,
                            lightscreen: true
                        })
                    } else {
                        setLightscreenLeft("w-100")
                        setFirstPokemonScreens({
                            ...firstPokemonScreens,
                            lightscreen: false
                        })
                    }
                } else if (direction === "second") {
                    if (lightscreenRight !== "w-100 active") {
                        setLightscreenRight("w-100 active")
                        setSecondPokemonScreens({
                            ...secondPokemonScreens,
                            lightscreen: true
                        })
                    } else {
                        setLightscreenRight("w-100")
                        setSecondPokemonScreens({
                            ...secondPokemonScreens,
                            lightscreen: false
                        })
                    }
                }
                break;
            case "auroraveil":
                if (direction === "first") {
                    if (auroraveilLeft !== "w-100 active") {
                        setAuroraveilLeft("w-100 active")
                        setFirstPokemonScreens({
                            ...firstPokemonScreens,
                            auroraveil: true
                        })
                    } else {
                        setAuroraveilLeft("w-100")
                        setFirstPokemonScreens({
                            ...firstPokemonScreens,
                            auroraveil: false
                        })
                    }
                } else if (direction === "second") {
                    if (auroraveilRight !== "w-100 active") {
                        setAuroraveilRight("w-100 active")
                        setSecondPokemonScreens({
                            ...secondPokemonScreens,
                            auroraveil: true
                        })
                    } else {
                        setAuroraveilRight("w-100")
                        setSecondPokemonScreens({
                            ...secondPokemonScreens,
                            auroraveil: false
                        })
                    }
                }
                break;
            }
        }
        useEffect(() => 
            {dispatch(getFirstPokemonScreenFactor(firstPokemonScreens))},
            [firstPokemonScreens]
        )
        useEffect(() => 
            {dispatch(getSecondPokemonScreenFactor(secondPokemonScreens))},
            [secondPokemonScreens]
        )

    return (
        <>
        <ul className="list-group list-group-horizontal">
            <FieldListButton classes={reflectorLeft} activate={() => activateScreen("reflect", "first")} name="Reflektor"/>
            <li className={emptyListItem}></li>
            <li className={emptyListItem}></li>
            <FieldListButton classes={reflectorRight} activate={() => activateScreen("reflect", "second")} name="Reflektor"/>
        </ul>
        <ul className="list-group list-group-horizontal">
            <FieldListButton classes={lightscreenLeft} activate={() => activateScreen("lightscreen", "first")} name="Lichtschild"/>
            <li className={emptyListItem}></li>
            <li className={emptyListItem}></li>
            <FieldListButton classes={lightscreenRight} activate={() => activateScreen("lightscreen", "second")} name="Lichtschild"/>
        </ul>
        <ul className="list-group list-group-horizontal mb-3">
            <FieldListButton classes={auroraveilLeft} activate={() => activateScreen("auroraveil", "first")} name="Auroraschleier"/>
            <li className={emptyListItem}></li>
            <li className={emptyListItem}></li>
            <FieldListButton classes={auroraveilRight} activate={() => activateScreen("auroraveil", "second")} name="Auroraschleier"/>
        </ul>
        </>
    )
}

export default connect()(FieldScreens)