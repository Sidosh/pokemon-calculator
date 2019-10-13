import { combineReducers } from 'redux';

import { AttackDataReducer } from './AttackData/reducer'
import { FactorDataReducer } from './FactorData/reducer'
import { PokemonDataReducer } from './PokemonData/reducer'
import { DamageDataReducer } from './DamageData/reducer'

const rootReducer = combineReducers({
    attackData: AttackDataReducer,
    factorData: FactorDataReducer,
    pokemonData: PokemonDataReducer,
    damageData: DamageDataReducer
})

export default rootReducer