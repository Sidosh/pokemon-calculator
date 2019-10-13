import { ITerrainWeatherMultiplier } from "../typescript/interfaces";

export const terrainWeatherMultiplier = (props: ITerrainWeatherMultiplier) => {
    const { factors, attackType,  opponentTypes, damageClass, type1, setType1, type2, setType2 } = props
    let { f1, damage, defenseStat, } = props
    switch(factors.terrain) {
        case "electric":
        if (attackType === factors.terrain) {
            f1 *= 1.5
        }
        break;
        case "grassy":
        if (attackType === "grass") {
            f1 *= 1.5
        }
        break;
        case "misty":
        if (attackType === "dragon") {
            f1 *= 0.5
        }
        break;
        case "psychic":
        if (attackType === factors.terrain) {
            f1 *= 1.5
        }
        break;
        default:
    }
    switch(factors.weather) {
        case "sun":
        case "harshSun":
            if (attackType === "fire") {
                f1 *= 1.5
            } else if (attackType === "water") {
                f1 *= 0.5
                if (factors.weather === "harshSun") {
                    return damage = 0
                }
            }
            break;
        case "rain":
        case "harshRain":
            if (attackType === "water") {
                f1 *= 1.5
            } else if (attackType === "fire") {
                f1 *= 0.5
                if (factors.weather === "harshRain") {
                    return damage = 0
                }
            }
            break;
        case "sandstorm":
            if (opponentTypes[1] === undefined) {
                opponentTypes[1] = {
                    type: {
                        name: "",
                        url: ""
                    }
                }
            }
            if (opponentTypes[0].type.name === "rock" || opponentTypes[1].type.name === "rock" && damageClass === "special") {
                defenseStat *= 1.5
            }
            break;
        case "strongWinds":
            if (opponentTypes[0].type.name === "flying" && type1 > 1) {
                setType1(1)
            }
            if (opponentTypes[1] !== undefined) {
                if (opponentTypes[1].type.name === "flying" && type2 > 1) {
                    setType2(1)
                }
            }
    }
    return { f1, damage, defenseStat }
}