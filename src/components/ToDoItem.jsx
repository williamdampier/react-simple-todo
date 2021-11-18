import React, {useContext} from 'react';
import Context from '../context';

const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    },
    input: {
      marginRight: '1rem'
    }
  }

const ToDoItem = ({todo, index, onChange}) => {
    const {removeToDo} = useContext(Context)
    const classes = []

    if (todo.completed) { 
        classes.push('done')
    }

    return (
    
        <li key={todo.id} className="todo-item">
            <span className={classes.join(' ')}>
                <input 
                    type="checkbox" 
                    onChange={() => onChange(todo.id)} 
                    checked={todo.completed} />
                &nbsp;
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>
            
            <button onClick={() =>removeToDo(todo.id)}>&times;</button>
        </li>
       
     
        
    );
};

export default ToDoItem;