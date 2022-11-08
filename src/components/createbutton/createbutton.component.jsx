import React from "react";
import './createbutton.styles.css'

export const CreateButton = () =>{
    const onClickButton = (msg) =>{
        alert(msg)
    }
    return(
        <button className="create-button"
        onClick={() => onClickButton('Abrir Modal') }>
            +
            </button>
    )
}