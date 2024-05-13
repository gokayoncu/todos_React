import React, { useState } from 'react'
import './../css/Todos-Creat.css'

function TodosCreat({oncreatTodos}) {
  const [newTodos, setNewTodos]= useState("");

  const clearInput = () => {
    setNewTodos("");
  }

  const creatTodo = () => {
    if(newTodos == "") return
    const request= {
      content: newTodos,
      id: Math.floor(Math.random()*865472),
      completed: false
    }
    oncreatTodos(request);    
    clearInput()
  }
  

  return (
    <div className='todo-creat'>
        <label >        
          <input 
            type="text" 
            placeholder='What needs to be done?' 
            onChange={(e)=> setNewTodos(e.target.value)}
            value={newTodos}
          />
          <button onClick={creatTodo}>Todo Ekle</button>
        </label>
    </div>
  )
}

export default TodosCreat
