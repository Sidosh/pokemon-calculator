import { toCapitalize } from "./textChanges";
import { ICallTypesApi, ICheckForMega, ICallBerryApi, ICheckForAlternativeForms } from "../typescript/interfaces";
import { store } from "./../../store/store"

export const callPokemonApi = (array: any[]) => {
    const value = array[0]
    const f = array[1]
    const languages = array[2]
    let pokemonName = value.replace(/\s+/g, '-').toLowerCase()
    if (languages[0] !== undefined) {
        languages[0].map((langItem: { name: string; }[]) => {
            langItem.map(nameItem => {
                if (nameItem.name.toLowerCase() === pokemonName) {
                    pokemonName = langItem[2].name
                }
            })
        })
    }
    pokemonName = pokemonName.replace(/\s+/g, '-')
    if (pokemonName !== "") {
        fetch("https://pokeapi.co/api/v2/pokemon/"+pokemonName.toLowerCase())
        .then(result => result.json())
        .then(jsonResult => {
                store.dispatch(f(jsonResult))
            },
        error => {
            fetch("https://pokeapi.co/api/v2/pokemon-species/"+pokemonName.toLowerCase())
            .then(result => result.json())
            .then(jsonResult => {
                if (jsonResult.varieties !== undefined) {
                    jsonResult.varieties.map((item: {is_default: boolean,pokemon: {name: string}}) => {
                        if (item.is_default === true) {
                            array[0] = item.pokemon.name
                            callPokemonApi(array)
                        }
                    })
                }
            },
            error => {

            })
        })
    }
}

export const callAttacksApi = (array: any[]) => {
    const value = array[0]
    const setCurrentAttacks = array[1]
    const currentAttacks = array[2]
    const languages = array[3]
    const i = array[4]
    let changeAttacks = currentAttacks.slice(0, currentAttacks.length-1)
    let attackName = toCapitalize(value.replace(/\s+/g, '-'))
    languages[0].map((langItem: { name: string; }[]) => {
        langItem.map(nameItem => {
            if (nameItem.name === attackName) {
                attackName = langItem[2].name
            }
        })
    })
    attackName = toCapitalize(attackName.replace(/\s+/g, '-'))
    fetch("https://pokeapi.co/api/v2/move/"+attackName.toLowerCase())
    .then(result => result.json())
    .then(jsonResult => {
        changeAttacks[i] = jsonResult
        if (changeAttacks[i].name !== undefined) {
            changeAttacks[changeAttacks.length + 1] = {}
        }
        store.dispatch(setCurrentAttacks(changeAttacks))
    },
    error => {
    })
}

export const callItemsApi = (array: any[]) => {
    const value = array[0]
    const f = array[1]
    const languages = array[2]
    let itemName = value.replace(/\s+/g, '-').toLowerCase()
    if (languages[0] !== undefined) {
        languages[0].map((langItem: { name: string; }[]) => {
            langItem.map(nameItem => {
                if (nameItem.name.toLowerCase() === itemName) {
                    itemName = langItem[2].name
                }
            })
        })
    }
    itemName = itemName.replace(/\s+/g, '-')
    fetch("https://pokeapi.co/api/v2/item/"+itemName.toLowerCase())
    .then(result => result.json())
    .then(jsonResult => {
        store.dispatch(f(jsonResult))
    },
    error => {
        
    })
}

export const callTypesApi = (props: ICallTypesApi) => {
    const { pokemonTypeUrl, attackType, setType } = props
    let neutralTypes: any[] = []
    fetch(pokemonTypeUrl)
    .then(result => result.json())
    .then(jsonResult => {
        jsonResult.damage_relations.double_damage_from.map((item: { name: string; }) => {
            neutralTypes.push(item.name)
            if (item.name === attackType.name) {
                setType(2)
            }
        })
        jsonResult.damage_relations.half_damage_from.map((item: { name: string; }) => {
            neutralTypes.push(item.name)
            if (item.name === attackType.name) {
                setType(0.5)
            }
        })
        jsonResult.damage_relations.no_damage_from.map((item: { name: string; }) => {
            neutralTypes.push(item.name)
            if (item.name === attackType.name) {
                setType(0)
            }
        })
    },
    error => {
    })
    .then(() => {
        if (!neutralTypes.includes(attackType.name)) {
            setType(1)
        }
    })
}

export const checkForMega = (props: ICheckForMega) => {
    const { name, setMegaExists } = props
    fetch("https://pokeapi.co/api/v2/pokemon/"+name+"-mega")
    .then(jsonResult => {
        if (jsonResult.status !== 404) {
            setMegaExists(true)
        } else {
            fetch("https://pokeapi.co/api/v2/pokemon/"+name+"-mega-x")
            .then(jsonResult => {
                if (jsonResult.status !== 404) {
                    setMegaExists(true)
                } else {
                    if (name.slice(-5) !== "-mega" && name.slice(-7) !== "-mega-x" && name.slice(-7) !== "-mega-y") {
                        setMegaExists(false)
                    }
                }
            })
        }
    },
    error => {
    })
}

export const checkForAlternativeForms = (props: ICheckForAlternativeForms) => {
    const { name, setAlternativeForm } = props
    fetch("https://pokeapi.co/api/v2/pokemon-species/"+name)
    .then(result => result.json())
    .then(jsonResult => {
        if (jsonResult.varieties !== undefined) {
            setAlternativeForm(jsonResult.varieties)
        }
    },
    error => {
        fetch("https://pokeapi.co/api/v2/pokemon/"+name.toLowerCase())
        .then(result => result.json())
        .then(jsonResult => {
            if (jsonResult.species !== undefined) {
                checkForAlternativeForms({name: jsonResult.species.name, setAlternativeForm})
            }
        },
        error => {

        })
    })
}

export function callBerryApi(props: ICallBerryApi) {
    const { name, getBerryPower } = props
    fetch("https://pokeapi.co/api/v2/berry/"+name.slice(0, -6))
    .then(result => result.json())
    .then(jsonResult => {
        getBerryPower(jsonResult.natural_gift_power + 20)
    })
}