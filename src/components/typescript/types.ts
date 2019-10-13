export type statsObjects = {
    attack: number
    defense: number
    speAtt: number
    speDef: number
    speed: number
    status: string
    ability: string
    types: types[]
    item: item
}

export type attack = {
    power: number
    accuracy: number
    name: string
    damage_class: {
        name: string
    }
    meta: {
        drain: number
    }
    type: {
        name: string
    }
    pp: number
}

export type factors = {
    terrain: string
    weather: string
    screens: {
        reflector: boolean
        lightscreen: boolean
        auroraveil: boolean
    }
}

export type item = {
    name: string
    effect_entries:
        {
            short_effect: string
        }[]
    category: {
        name: string
    }
}

export type types = {
    type: {
        name: string
        url: string
    }
}
