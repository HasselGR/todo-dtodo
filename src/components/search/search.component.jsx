import React from "react";
import './search.styles.css';

export const Search = ({searchField, setSearchField}) => {   
    

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchField(event.target.value);
    }

    return(
        <input
         onChange={onSearchValueChange}
         value={searchField}
         className="todo-search"
         placeholder="Please input your task"
         >
    
         </input>
    )
}