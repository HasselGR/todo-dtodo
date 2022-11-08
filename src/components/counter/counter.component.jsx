import React from "react";
import './counter.styles.css';

export const Counter = ({total, completed}) =>{
    return(
        <h2 className="todo-counter">You have completed {completed} of {total} TODOs</h2>
    );
}


