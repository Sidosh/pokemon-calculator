import React, { useState, Dispatch, SetStateAction, FC } from 'react'
import FieldListButton from '../FieldListButton/FieldListButton';
import { useDispatch } from 'react-redux';
import { getWeatherFactor } from '../../../store/FactorData/actions';

const FieldWeather: FC<{}> = () => {
    const [ sun, setSun ] = useState("w-100")
    const [ rain, setRain ] = useState("w-100")
    const [ sandstorm, setSandstorm ] = useState("w-100")
    const [ hail, setHail ] = useState("w-100")
    const [ harshSun, setHarshSun ] = useState("w-100")
    const [ harshRain, setHarshRain ] = useState("w-100")
    const [ strongWinds, setStrongWinds ] = useState("w-100")
    const dispatch = useDispatch()
    let weather = ""

    const activateWeather = (value: string) => {
        switch(value) {
            case "sun":
                if (sun !== "w-100 active") {
                    setSun("w-100 active")
                    setRain("w-100")
                    setSandstorm("w-100")
                    setHail("w-100")
                    setHarshSun("w-100")
                    setHarshRain("w-100")
                    setStrongWinds("w-100")
                    weather = "sun"
                } else {
                    setSun("w-100")
                    weather = ""
                }
                break;
            case "rain":
                if (rain !== "w-100 active") {
                    setSun("w-100")
                    setRain("w-100 active")
                    setSandstorm("w-100")
                    setHail("w-100")
                    setHarshSun("w-100")
                    setHarshRain("w-100")
                    setStrongWinds("w-100")
                    weather = "rain"
                } else {
                    setRain("w-100")
                    weather = ""
                }
                break;
            case "sandstorm":
                if (sandstorm !== "w-100 active") {
                    setSun("w-100")
                    setRain("w-100")
                    setSandstorm("w-100 active")
                    setHail("w-100")
                    setHarshSun("w-100")
                    setHarshRain("w-100")
                    setStrongWinds("w-100")
                    weather = "sandstorm"
                } else {
                    setSandstorm("w-100")
                    weather = ""
                }
                break;
            case "hail":
                if (hail !== "w-100 active") {
                    setSun("w-100")
                    setRain("w-100")
                    setSandstorm("w-100")
                    setHail("w-100 active")
                    setHarshSun("w-100")
                    setHarshRain("w-100")
                    setStrongWinds("w-100")
                    weather = "hail"
                } else {
                    setHail("w-100")
                    weather = ""
                }
                break;
            case "harshSun":
                if (harshSun !== "w-100 active") {
                    setSun("w-100")
                    setRain("w-100")
                    setSandstorm("w-100")
                    setHail("w-100")
                    setHarshSun("w-100 active")
                    setHarshRain("w-100")
                    setStrongWinds("w-100")
                    weather = "harshSun"
                } else {
                    setHarshSun("w-100")
                    weather = ""
                }
                break;
            case "harshRain":
                if (harshRain !== "w-100 active") {
                    setSun("w-100")
                    setRain("w-100")
                    setSandstorm("w-100")
                    setHail("w-100")
                    setHarshSun("w-100")
                    setHarshRain("w-100 active")
                    setStrongWinds("w-100")
                    weather = "harshRain"
                } else {
                    setHarshRain("w-100")
                    weather = ""
                }
                break;
            case "strongWinds":
                if (strongWinds !== "w-100 active") {
                    setSun("w-100")
                    setRain("w-100")
                    setSandstorm("w-100")
                    setHail("w-100")
                    setHarshSun("w-100")
                    setHarshRain("w-100")
                    setStrongWinds("w-100 active")
                    weather = "strongWinds"
                } else {
                    setStrongWinds("w-100")
                    weather = ""
                }
                break;
        }
        dispatch(getWeatherFactor(weather))
    }

    return (
        <>
            <ul className="list-group list-group-horizontal">
                <FieldListButton classes={sun} activate={() => activateWeather("sun")} name="Sonne"/>
                <FieldListButton classes={rain} activate={() => activateWeather("rain")} name="Regen"/>
                <FieldListButton classes={sandstorm} activate={() => activateWeather("sandstorm")} name="Sandsturm"/>
                <FieldListButton classes={hail} activate={() => activateWeather("hail")} name="Hagel"/>
            </ul>
            <ul className="list-group list-group-horizontal mb-3">
                <FieldListButton classes={harshSun} activate={() => activateWeather("harshSun")} name="Starke Sonne"/>
                <FieldListButton classes={harshRain} activate={() => activateWeather("harshRain")} name="Starker Regen"/>
                <FieldListButton classes={strongWinds} activate={() => activateWeather("strongWinds")} name="Delta Winde"/>
            </ul>
        </>
    )
}

export default FieldWeather