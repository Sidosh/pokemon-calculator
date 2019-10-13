import rootReducer from "./reducers";
import { AttackDataActionType } from "./AttackData/types";
import { DamageDataActionTypes } from "./DamageData/types";
import { FactorDataActionTypes } from "./FactorData/types";
import { PokemonDataActionTypes } from "./PokemonData/types";

export type StateType = ReturnType<typeof rootReducer>

export type ActionTypes = 
    AttackDataActionType | 
    FactorDataActionTypes |
    PokemonDataActionTypes |
    DamageDataActionTypes 