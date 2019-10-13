export interface IMapStateToPropsPokemon { 
    PokemonDataReducer: { 
        firstPokemon: any; 
        secondPokemon: any; 
        allPokemonLanguages: any; 
        allAttackLanguages: any; 
        allItemLanguages: any; 
    }; 
    AttackDataReducer: { 
        firstPokemonAttacks: any; 
        secondPokemonAttacks: any; 
    }; 
    DamageDataReducer: {
        firstPokemon: {
            naturePlus: string
            natureMinus: string
            status: string
        }
        secondPokemon: {
            naturePlus: string
            natureMinus: string
            status: string
        }
    }
}

export interface IPokemon {
    getFirstPokemon?: any
    getFirstPokemonAttack?: any
    getFirstPokemonDefense?: any
    getFirstPokemonSpeed?: any
    getFirstPokemonTypes?: any
    getFirstPokemonNaturePlus?: any
    getFirstPokemonNatureMinus?: any
    naturePlus: any
    natureMinus: any
    status: any
    allPokemonLanguages: any
    allAttackLanguages: any
    allItemLanguages: any
    firstPokemon?: any
    getFirstPokemonAttacks?: any
    getFirstPokemonItem?: any
    getFirstPokemonStatus?: any
    getFirstPokemonAbility?: any
    getSecondPokemon?: any
    getSecondPokemonAttack?: any
    getSecondPokemonDefense?: any
    getSecondPokemonSpeed?: any
    getSecondPokemonTypes?: any
    getSecondPokemonNaturePlus?: any
    getSecondPokemonNatureMinus?: any
    secondPokemon?: any
    getSecondPokemonAttacks?: any
    getSecondPokemonItem?: any
    getSecondPokemonStatus?: any
    getSecondPokemonAbility?: any
}