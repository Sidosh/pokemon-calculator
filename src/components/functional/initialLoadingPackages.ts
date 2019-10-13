import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemonLanguages, getAllAttackLanguages, getAllItemLanguages } from "../../store/PokemonData/actions";

const initialLoadingPackages = (setFinishedLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
    const dispatch = useDispatch()
    let allPokemonNames: any[] = []
    let allAttackNames: any[] = []
    let allItemNames: any[] = []
    let finishedLoading = 0
    if (finishedLoading < 3) {
            for (let i = 1; i <= 807; i++) {
            fetch("https://pokeapi.co/api/v2/pokemon-species/"+i)
            .then(result => result.json())
            .then(jsonResult => {
                allPokemonNames.push(jsonResult.names)
                if (i === 807) {
                    finishedLoading += 1
                }
            },
            error => {
                return i
            })
        }
        for (let i = 1; i <= 728; i++) {
            fetch("https://pokeapi.co/api/v2/move/"+i)
            .then(result => result.json())
            .then(jsonResult => {
                allAttackNames.push(jsonResult.names)
                if (i === 728) {
                    finishedLoading += 1
                }
            },
            error => {
                return i
            })
        }
        for (let i = 1; i <= 954; i++) {
            fetch("https://pokeapi.co/api/v2/item/"+i)
            .then(result => result.json())
            .then(jsonResult => {
                allItemNames.push(jsonResult.names)
                if (i === 954) {
                    finishedLoading += 1
                }
            },
            error => {
                return i
            })
        }
    }
    dispatch(getAllPokemonLanguages(allPokemonNames))
    dispatch(getAllAttackLanguages(allAttackNames))
    dispatch(getAllItemLanguages(allItemNames))
    if (finishedLoading === 3) {
        setFinishedLoading(true)
    }
}

export default initialLoadingPackages