import { IAbilityBaseDamageMultiplierAttack, IAbilityBaseDamageMultiplierDefense, IAbilityAttackMultiplier } from "../typescript/interfaces";

export const abilityBaseDamageMultiplierAttack = (props: IAbilityBaseDamageMultiplierAttack) => {
    const { attack, ability, baseDamage, ownSpeed, opponentSpeed } = props
    let newBaseDamage = baseDamage
    let changedAttack = {...attack}
    switch (ability) {
        case "reckless":
            if (attack.meta.drain < 0) {
                newBaseDamage = 1.2
            }
            break
        case "analytic":
            if (ownSpeed < opponentSpeed) {
                newBaseDamage = 1.3
            }
            break
        case "dark-aura":
            if (attack.type.name === "dark") {
                newBaseDamage = baseDamage/3
            }
            break
        case "fairy-aura":
            if (attack.type.name === "fairy") {
                newBaseDamage = baseDamage/3
            }
            break
        case "pixilate":
            if (attack.type.name === "normal") {
                newBaseDamage = 1.2
                changedAttack = {
                    ...changedAttack,
                    type: {
                        ...changedAttack.type,
                        name: "fairy"
                    }
                }
            }
            break
        case "refrigerate":
            if (attack.type.name === "normal") {
                newBaseDamage = 1.2
                changedAttack = {
                    ...changedAttack,
                    type: {
                        ...changedAttack.type,
                        name: "ice"
                    }
                }
            }
            break
        case "technician":
            if (baseDamage <= 60) {
                newBaseDamage = 1.5
            }
            break
        case "aerilate":
            if (attack.type.name === "normal") {
                newBaseDamage = 1.2
                changedAttack = {
                    ...changedAttack,
                    type: {
                        ...changedAttack.type,
                        name: "flying"
                    }
                }
            }
            break
        default:
            changedAttack = {...attack}
            
    }
    return { newBaseDamage, changedAttack }
}

export const abilityBaseDamageMultiplierDefense = (props: IAbilityBaseDamageMultiplierDefense) => {
    const { baseDamage, opponentAbility, ownAbility, attack } = props
    let newBaseDamage = baseDamage
    switch (opponentAbility) {
        case "aura-break":
            if (ownAbility === "fairy-aura" && attack.type.name === "fairy" || ownAbility === "dark-aura" && attack.type.name === "dark") {
                newBaseDamage *= 0.5
            }
            break
        case "heatproof":
            if (attack.type.name === "fire") {
                newBaseDamage *= 0.5
            }
            break
        case "thick-fat":
            if (attack.type.name === "fire" || attack.type.name === "ice") {
                newBaseDamage *= 0.5
            }
        case "dry-skin":
            if (attack.type.name === "fire") {
                newBaseDamage *= 1.25
            } else if (attack.type.name === "water") {
                newBaseDamage = 0
            }
            break
    }
    return newBaseDamage
}

export const abilityAttackMultiplier = (props: IAbilityAttackMultiplier) => {
    const {ability, attackStat, status, weather, damageClass} = props
    let newAttackStat = attackStat
    switch (ability) {
        case "guts":
            if (status !== "none" && damageClass === "physical") {
                newAttackStat *= 1.5
            }
            break
        case "toxic-boost":
            if (status === "poisoned" || status === "badly poisoned" && damageClass === "physical") {
                newAttackStat *= 1.5
            }
            break
        case "flare-boost":
            if (status === "burned" && damageClass === "special") {
                newAttackStat *= 1.5
            }
            break
        case "pure-power":
        case "huge-power":
            if (damageClass === "physical") {
                newAttackStat *= 2
            }
            break
        case "flower-gift":
            if (weather === "sun" && damageClass === "physical") {
                newAttackStat *= 1.5
            }
            break
        case "slow-start":
            if (damageClass === "physical") {
                newAttackStat *= 0.5
            }
            break
        case "solar-power":
            if (weather === "sun" && damageClass === "special") {
                newAttackStat *= 1.5
            }
            break
        case "hustle":
            if (damageClass === "physical") {
                newAttackStat *= 1.5
            }
    }

    return newAttackStat
}