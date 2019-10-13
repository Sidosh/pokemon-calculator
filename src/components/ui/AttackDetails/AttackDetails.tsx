import React, { FC } from 'react'
import { toCapitalize } from '../../functional/textChanges';
import { attack } from '../../typescript/types';

interface IAttackDetails{
    currentAttack: attack
}

const AttackDetails:FC<IAttackDetails> = (props) => {
    const { currentAttack } = props
    let showCurrentAttack = currentAttack
    let attackType = ""
    let damageClass = ""
    if (currentAttack.power === null) {
        showCurrentAttack = {
            ...currentAttack,
            power: 0
        }
    }
    if (showCurrentAttack.damage_class !== undefined) {
        damageClass = toCapitalize(showCurrentAttack.damage_class.name)
    }
    if (showCurrentAttack.type !== undefined) {
        attackType = toCapitalize(showCurrentAttack.type.name)
    }
    return (
        <>
            <td>{showCurrentAttack.power}</td>
            <td>{showCurrentAttack.accuracy}</td>
            <td>{damageClass}</td>
            <td>{attackType}</td>
            <td>{showCurrentAttack.pp}</td>
        </>
    )
}

export default AttackDetails