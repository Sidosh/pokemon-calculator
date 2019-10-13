// @ts-ignore
import { Dispatch } from "react";
// @ts-ignore
import { SetStateAction } from "react";
import { attack, factors, types, statsObjects, item } from "./types";

export interface IAbilityBaseDamageMultiplierAttack {
    baseDamage: number
    ability: string
    attack: attack
    ownSpeed: number
    opponentSpeed: number
}

export interface IAbilityBaseDamageMultiplierDefense {
    baseDamage: number
    ownAbility: string
    opponentAbility: string
    attack: {
        type: {
            name: string
        }
    }
}

export interface IAbilityAttackMultiplier {
    ability: string
    attackStat: number
    status: string
    weather: string
    damageClass: string
}

export interface ICalcStats {
    stat: string
    value: number
    ev: number
    dv: number
    boost: number
    getNature: {
        naturePlus: string
        natureMinus: string
        status: string
    }
}

export interface IAttackBaseDamage {
    attackName: string
    baseDamage: number
    item: {
        name: string
    }
    ownInit: number
    opponentInit: number
    ownStatus: string
    opponentStatus: string
}

export interface ITerrainWeatherMultiplier {
    factors: factors
    attackType: string
    f1: number
    damage: number
    opponentTypes: types[]
    damageClass: string
    defenseStat: number
    type1: number
    setType1: Dispatch<SetStateAction<number>>
    type2: number
    setType2: Dispatch<SetStateAction<number>>
}

export interface ICalcDamage {
    ownStats: statsObjects
    opponentStats: statsObjects
    currentAttack: attack
    roll: number
    factors: factors
}

export interface ICalcWeakness {
    pokemonType: {
        type: {
            url: string
        }
    }
    attackType: {
        name: string
    }
    setType: Dispatch<SetStateAction<number>>
}

export interface ICalcBaseDamage {
    baseDamage: number
    item: item
    damageClass: string
    attackType: {
        name: string
    }
}

export interface ICallTypesApi {
    pokemonTypeUrl: string
    attackType: {
        name: string
    }
    setType: Dispatch<SetStateAction<number>>
}

export interface ICheckForMega {
    name: string
    setMegaExists: Dispatch<SetStateAction<boolean>>
}

export interface ICheckForAlternativeForms {
    name: string
    setAlternativeForm: Dispatch<SetStateAction<{pokemon: {name: string}}[]>>
}

export interface ICallBerryApi {
    name: string
    getBerryPower(power: number): void    
}