import React from 'react'

const FieldListButton = (props: { classes: string; activate: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void); name: React.ReactNode; }) => (
    <li className="list-group-item p-0 w-25">
        <button className={props.classes} onClick={props.activate}>{props.name}</button>
    </li>
)

export default FieldListButton