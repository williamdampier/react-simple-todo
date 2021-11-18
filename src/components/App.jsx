import React, { useState, useEffect } from 'react';
import ToDoList from './ToDoList';
import Context from '../context';
import '../styles.css'
import Loader from './Loader';
import Modal from './Modal/Modal';

const AddToDo = React.lazy(() => new Promise(resolve => {
  setTimeout(()=> {resolve(import('./AddToDo'))},3000)
}))

const App = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
   
    useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(()=> {
          setTodos(todos)
          setLoading(false)
        
        }, 2000)
        
        })
        }
    ,[])

    function toggleToDo(id) {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      )
    }

    function addToDo(title) {
      setTodos(todos.concat([{
        title: title,
        id: Date.now(),
        completed: false
      }]))
    }
    function removeToDo(id){
      setTodos(todos.filter(todo => todo.id != id))
    }



    return (
      <Context.Provider value={{removeToDo: removeToDo}}>
      <div className="wrapper">
        <Modal/>
        <React.Suspense fallback={<p>Loading...</p>}>
        <AddToDo onCreate={addToDo}/>
        </React.Suspense>
        
        {loading && <Loader/>}

        {
          todos.length === 0
          ? (loading ? null : <h1>No Todos to display</h1>)
          :<ToDoList 
        todos={todos}
        onToggle={toggleToDo}
        />
        }
        </div>
      </Context.Provider>
    );
};

export default App;