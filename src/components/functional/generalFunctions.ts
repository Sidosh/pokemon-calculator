import { getFirstPokemonAbility, getSecondPokemonAbility, getFirstPokemonStatus, getSecondPokemonStatus } from "../../store/DamageData/actions";
import { store } from "../../store/store";

let timer: any = null

export const callApiTimeout = (f: (arg0: any) => void, params: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        f(params)
    }, 500)
}

export const changeAbility = (value: string, direction: string) => {
    if (direction === "first") {
        store.dispatch(getFirstPokemonAbility(value))
    } else {
        store.dispatch(getSecondPokemonAbility(value))
    }
}

export const changeStatus = (value: string, direction: string) => {
    if (direction === "first") {
        store.dispatch(getFirstPokemonStatus(value))
    } else {
        store.dispatch(getSecondPokemonStatus(value))
    }
}

export const changeNature = (value: string, naturePlus: any, natureMinus: any) => {
    switch(value) {
        case "Lonely":
        case "Brave":
        case "Adamant":
        case "Naughty":
            store.dispatch(naturePlus("Angriff"))
            break;
        case "Bold":
        case "Relaxed":
        case "Impish":
        case "Lax":
            store.dispatch(naturePlus("Verteidigung"))
            break
        case "Timid":
        case "Hasty":
        case "Jolly":
        case "Naive":
            store.dispatch(naturePlus("Initiative"))
            break
        case "Modest":
        case "Mild":
        case "Quiet":
        case "Rash":
            store.dispatch(naturePlus("Spezial Angriff"))
            break
        case "Calm":
        case "Gentle":
        case "Sassy":
        case "Careful":
            store.dispatch(naturePlus("Spezial Verteidigung"))
            break
        default:
            store.dispatch(naturePlus("Angriff"))
    }

    switch(value) {
        case "Bold":
        case "Timid":
        case "Modest":
        case "Calm":
            store.dispatch(natureMinus("Angriff"))
            break;
        case "Lonely":
        case "Hasty":
        case "Mild":
        case "Gentle":
            store.dispatch(natureMinus("Verteidigung"))
            break
        case "Relaxed":
        case "Brave":
        case "Quiet":
        case "Sassy":
            store.dispatch(natureMinus("Initiative"))
            break
        case "Jolly":
        case "Impish":
        case "Adamant":
        case "Careful":
            store.dispatch(natureMinus("Spezial Angriff"))
            break
        case "Rash":
        case "Naive":
        case "Lax":
        case "Naughty":
            store.dispatch(natureMinus("Spezial Verteidigung"))
            break
        default:
            store.dispatch(natureMinus("Angriff"))

    }
}