import { ICalcStats } from "../typescript/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { getFirstPokemonNaturePlus } from "../../store/DamageData/actions";
import { StateType } from "../../store/types";

export const calcStats = (props: ICalcStats) => {
    const dispatch = useDispatch()
    const { stat, value, boost, getNature } = props
    let { ev, dv } = props
    let endValue = 0
    let boostFactor = 1

    if (ev > 252) {
        ev = 252
    } else if (ev < 0) {
        ev = 0
    }
    if (dv > 31) {
        dv = 31
    } else if (dv < 0) {
        dv = 0
    }
    if (boost > 0) {
        boostFactor = (2 + Number(boost)) / 2
    } else if (boost < 0) {
        boostFactor = 2 / (2 - Number(boost))
    }
    if (value !== 0) {
        let level = 50
        let nature = 1
        if (getNature !== undefined) {
            if (stat === getNature.naturePlus) {
                nature = 1.1
            } else if (stat === getNature.natureMinus) {
                nature = 0.9
            }
            if (stat === getNature.naturePlus && stat === getNature.natureMinus) {
                nature = 1
            }
        }
        if (stat === "KP") {
            endValue = Math.floor(((2 * value + Number(dv) + Math.floor(ev/4)) * level)/100 + level + 10)
            if (value === 1) {
                endValue = 1
            }
        } else {
            endValue = Math.floor(((((2 * value + Number(dv) + Math.floor(ev/4)) * level)/100 + 5) * nature) * Number(boostFactor))
        }
        if (getNature.status === "paralyzed" && stat === "Initiative") {
            endValue *= 0.5
        }
    }
    return Math.floor(endValue)
}