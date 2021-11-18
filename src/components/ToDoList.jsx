import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({todos, onToggle}) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => 
                <ToDoItem 
                todo={todo}
                key={todo.id}
                index={index}   
                onChange={onToggle} 
                />
            )}
        </ul>
    );
};

export default ToDoList;