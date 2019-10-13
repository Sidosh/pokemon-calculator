import { useState } from 'react'
import { callTypesApi } from "./apiCalls";
import { terrainWeatherMultiplier } from './terrainWeatherMultiplier';
import { abilityBaseDamageMultiplierAttack, abilityBaseDamageMultiplierDefense, abilityAttackMultiplier } from './abilityMultiplier';
import { attackBaseDamage } from './attackBaseDamage';
import { ICalcDamage, ICalcWeakness, ICalcBaseDamage } from '../typescript/interfaces';

export const calcDamage = (props: ICalcDamage) => {
    const { ownStats, opponentStats, roll, factors } = props
    let { currentAttack } = props
    const [ type1, setType1 ] = useState(1)
    const [ type2, setType2 ] = useState(1)
    let baseDamage = currentAttack.power
    let newCurrentAttack = {...currentAttack}
    let attackStat = 0, defenseStat = 0, damage = 0, f1 = 1, f2 = 1, f3 = 1, crit = 1, stab = 1
    let weakendType = ""
    const level = 50
    
    if (currentAttack.accuracy !== undefined) {
        if (currentAttack.damage_class.name === "physical") {
            attackStat = ownStats.attack
            defenseStat = opponentStats.defense
        } else if (currentAttack.damage_class.name === "special") {
            attackStat = ownStats.speAtt
            defenseStat = opponentStats.speDef
        } else if (currentAttack.damage_class.name === "status") {
            return damage = 0
        }
        if (
            currentAttack.name === "psyshock" ||
            currentAttack.name === "psystrike" ||
            currentAttack.name === "secret-sword"
        ) {
            attackStat = ownStats.speAtt
            defenseStat = opponentStats.defense
        } else if (currentAttack.name === "foul-play") {
            attackStat = opponentStats.attack
        }

        baseDamage = attackBaseDamage({attackName: currentAttack.name, baseDamage, item: ownStats.item, ownInit: ownStats.speed, opponentInit: opponentStats.speed, ownStatus: ownStats.status, opponentStatus: opponentStats.status})

        if (opponentStats.item.effect_entries !== undefined) {
            weakendType = opponentStats.item.effect_entries[0].short_effect.slice(48, -33)
        }

        const abilityBaseDamageMultiplierAttackValues = abilityBaseDamageMultiplierAttack({baseDamage, ability: ownStats.ability, attack: newCurrentAttack, ownSpeed: ownStats.speed, opponentSpeed: opponentStats.speed})
        
        baseDamage = abilityBaseDamageMultiplierAttackValues.newBaseDamage
        newCurrentAttack = abilityBaseDamageMultiplierAttackValues.changedAttack

        baseDamage = abilityBaseDamageMultiplierDefense({baseDamage, opponentAbility: opponentStats.ability, ownAbility: ownStats.ability, attack: newCurrentAttack})
    }
    if (newCurrentAttack !== undefined && ownStats.types[0] !== undefined && newCurrentAttack.type !== undefined) {
        if (ownStats.types[0].type.name === newCurrentAttack.type.name) {
            stab = 1.5
        }
        if (ownStats.types[1] !== undefined && ownStats.types[1] !== undefined) {
            if (ownStats.types[1].type.name === newCurrentAttack.type.name) {
                stab = 1.5
            }   
        }
    }
    
    calcWeakness({pokemonType: opponentStats.types[0], attackType: newCurrentAttack.type, setType: setType1})
    if (opponentStats.types[1] !== undefined) {
        calcWeakness({pokemonType: opponentStats.types[1], attackType: newCurrentAttack.type, setType: setType2})
    }
    
    
    if (factors !== undefined && newCurrentAttack.type !== undefined) {
        const terrainWeaterMultiplier = terrainWeatherMultiplier({factors, attackType: newCurrentAttack.type.name, f1, damage, opponentTypes: opponentStats.types, damageClass: newCurrentAttack.damage_class.name, defenseStat, type1, setType1, type2, setType2})
        if (terrainWeaterMultiplier !== 0) {
            f1 = terrainWeaterMultiplier.f1
            damage = terrainWeaterMultiplier.damage
            defenseStat = terrainWeaterMultiplier.defenseStat
        } else {
            return damage = 0
        }
        
        if (newCurrentAttack.name !== "brick-break") {
            if (factors.screens.auroraveil || factors.screens.reflector) {
                if (newCurrentAttack.damage_class.name === "physical") {
                    f1 *= 0.5
                }
            }
            if (factors.screens.auroraveil || factors.screens.lightscreen) {
                if (newCurrentAttack.damage_class.name === "special") {
                    f1 *= 0.5
                }
            }
        }
        attackStat = abilityAttackMultiplier({ability: ownStats.ability, attackStat, status: ownStats.status, weather: factors.weather, damageClass: newCurrentAttack.damage_class.name})
        if (opponentStats.ability === "flower-gift" && factors.weather === "sun" && newCurrentAttack.damage_class.name === "special") {
            defenseStat *= 1.5
        }
    }
    
    if (newCurrentAttack.damage_class !== undefined) {
        if (ownStats.item.name !== undefined) {
            switch (ownStats.item.name) {
                case "life-orb":
                f2 *= 1.3
                    break
                case "choice-band":
                    if (newCurrentAttack.damage_class.name === "physical") {
                        attackStat *= 1.5
                    }
                    break
                case "choice-specs":
                    if (newCurrentAttack.damage_class.name === "special") {
                        attackStat *= 1.5
                    }
                    break
                case "expert-belt":
                    if (type1 * type2 > 1) {
                        f3 *= 1.2
                    }
                default:
                break
            }
            switch (opponentStats.item.name) {
                case "eviolite":
                    defenseStat *= 1.5
                    break;
                case "assault-vest":
                    if (newCurrentAttack.damage_class.name === "special") {
                        defenseStat *= 1.5
                    }
                    break
            }
            baseDamage = calcBaseDamage({baseDamage, item: ownStats.item, damageClass: newCurrentAttack.damage_class.name, attackType: newCurrentAttack.type})
        }
        if (ownStats.status === "burned" && newCurrentAttack.damage_class.name === "physical" && ownStats.ability !== "guts") {
            f1 *= 0.5
        }
    }

    if (ownStats.ability === "tinted-lens" && type1*type2 < 1) {
        f3 *= 2
    }

    if (opponentStats.ability === "filter" && type1*type2 > 1 || opponentStats.ability === "solid-rock" && type1*type2 > 1) {
        f3 *= 0.75
    }
    if (opponentStats.item.effect_entries !== undefined) {
        const weakendType = opponentStats.item.effect_entries[0].short_effect.slice(48, -33)
        if (newCurrentAttack.type !== undefined && newCurrentAttack.type.name === weakendType.toLowerCase() && type1 * type2 > 1) {
            f3 *= 0.5
        }
    }

    if (opponentStats.ability !== "battle-armor" && opponentStats.ability !== "shell-armor") {
        if (newCurrentAttack.name === "storm-throw" || newCurrentAttack.name === "frost-breath") {
            crit = 1.5
        }
    }

    if (baseDamage !== 0 && baseDamage !== undefined) {
        damage = Math.floor(level * 2/5)
        damage = Math.floor(damage + 2)
        damage = Math.floor(damage * baseDamage)
        damage = Math.floor(damage * attackStat/(50*defenseStat))
        damage = Math.floor(damage * f1)
        damage = Math.floor(damage + 2)
        damage = Math.floor(damage * crit)
        damage = Math.floor(damage * f2)
        damage = Math.floor(damage * roll/100)
        damage = Math.floor(damage * stab)
        damage = Math.floor(damage * type1)
        damage = Math.floor(damage * type2)
        damage = Math.floor(damage * f3)
        if (damage === 0 && type1 * type2 > 0) {
            damage = 1
        }
    }
    
    switch (newCurrentAttack.name) {
        case "dragon-rage":
            return damage = 40 
        case "sonic-boom":
            return damage = 20
        case "seismic-toss":
        case "night-shade":
            return damage = level
        case "psywave":
            if (roll < 100) {
                damage = level * 0.5
            } else {
                damage = level * 1.5
            }
        break
        default:
        break
    }
    return damage
}

export const calcWeakness = (props: ICalcWeakness) => {
    const { pokemonType, attackType, setType } = props
    if (attackType !== undefined && pokemonType !== undefined && pokemonType.type !== undefined) {
        return callTypesApi({pokemonTypeUrl: pokemonType.type.url, attackType, setType})
    }
}

export const calcBaseDamage = (props: ICalcBaseDamage) => {
    const { item, attackType } = props
    let { baseDamage, damageClass } = props
    if (item.name === "muscle-band" && damageClass === "physical" || item.name === "wise-glasses" && damageClass === "special") {
        baseDamage *= 1.1
    } else if (item.category.name === "plates" && item.effect_entries[0].short_effect.slice(6, -89).toLowerCase() === attackType.name || 
            item.category.name === "type-enhancement" && item.effect_entries[0].short_effect.slice(6, -43).toLowerCase() === attackType.name) {
        baseDamage *= 1.2
    } else if (item.category.name === "jewels" && item.name.slice(0, -4) === attackType.name) {
        baseDamage *= 1.3
    }
    return baseDamage
}
