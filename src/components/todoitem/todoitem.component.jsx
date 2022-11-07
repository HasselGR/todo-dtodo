import React from 'react';
import './todoitem.styles.css'

export const TodoItem = ({text, completed}) =>{
    return (
        <li className="todo-item">
          <span className={`icon icon-check ${completed && 'icon-check--active'}`}>
            √
          </span>
          <p className={`todo-item-p ${completed && 'todo-item-p--complete'}`}>
            {text}
          </p>
          <span className="icon icon-delete">
            X
          </span>
        </li>
      );
}