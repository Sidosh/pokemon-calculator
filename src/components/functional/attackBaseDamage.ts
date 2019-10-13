import { callBerryApi } from "./apiCalls";
import { IAttackBaseDamage } from "../typescript/interfaces";

export const attackBaseDamage = (props: IAttackBaseDamage) => {
    const { attackName, baseDamage, item, ownInit, opponentInit, ownStatus, opponentStatus } = props
    let newBaseDamage = baseDamage
    const getBerryPower = (power: number) => {
        newBaseDamage = power
    }

    switch(attackName) {
        case "acrobatics":
            if (item.name !== undefined) {
                newBaseDamage *= 2
            }
        break;
        case "wring-out":
        case "crush-grip":
            newBaseDamage = 120
            break;
        case "natural-gift":
            if (item.name !== undefined) {
                if (item.name.slice(-5) === "berry") {
                    callBerryApi({name: item.name, getBerryPower})
                } else {
                    newBaseDamage = 0
                }
            }
            break;
        case "electro-ball":
            const diff = opponentInit / ownInit
            if (diff <= 0.25) {
                newBaseDamage = 150
            } else if (diff <= 0.33) {
                newBaseDamage = 120
            } else if (diff <= 0.5) {
                newBaseDamage = 80
            } else if (diff <= 1) {
                newBaseDamage = 60
            } else {
                newBaseDamage = 40
            }
            break;
        case "facade":
            if (ownStatus !== "none") {
                newBaseDamage *= 2
            }
            break;
        case "return":
        case "frustration":
            newBaseDamage = 102
            break;
        case "payback":
        case "avalanche":
        case "revenge":
            if (opponentInit > ownInit) {
                newBaseDamage *= 2
            }
            break;
        case "gyro-ball":
            newBaseDamage = 25 * opponentInit / ownInit
            break;
        case "hex":
            if (opponentStatus !== "none") {
                newBaseDamage *= 2
            }
            break;
        case "venoshock":
            if (opponentStatus === "poisoned" || opponentStatus === "badly poisoned") {
                newBaseDamage *= 2
            }
            break;
        case "smelling-salts":
            if (opponentStatus === "paralyzed") {
                newBaseDamage *= 2
            }
            break;
        case "wake-up-slap":
            if (opponentStatus === "sleeping") {
                newBaseDamage *= 2
            }
            break;
        default:
        break;
    }
    return newBaseDamage
}