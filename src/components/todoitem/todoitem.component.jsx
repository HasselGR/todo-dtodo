import React from 'react';
import './todoitem.styles.css'

export const TodoItem = ({text, completed, onComplete, onDelete}) =>{

    return (
        <li className="todo-item">
          <span 
          className={`icon icon-check ${completed && 'icon-check--active'}`}
          onClick={onComplete}
          >
            √
          </span>
          <p className={`todo-item-p ${completed && 'todo-item-p--complete'}`}
          >
            {text}
          </p>
          <span
           className="icon icon-delete"
           onClick={onDelete}
          >
            X
          </span>
        </li>
      );
}