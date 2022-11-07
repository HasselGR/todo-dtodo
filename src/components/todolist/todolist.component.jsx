import React from "react";
import './todolist.styles.css';

export const TodoList = ({children}) =>{
    return(
        <section>
            <ul>
                {children}  
            </ul>
        </section>
    )
}