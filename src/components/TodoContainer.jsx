import React, { useState } from 'react'
import TodosCreat from './Todos-Creat'
import './../css/TodoContainer.css'
import TodoList from './TodoList'
import Footer from './Footer'

function TodoContainer() {
  const [todos,setTodos]= useState([])
  const [updateTodos,setUpdateTodos]= useState({
    id:null,
    title:"",
    completed:false
  })
  const handleUpdateInoutContent=(todo)=>{
    setUpdateTodos({
      id:todo.id,
      content:todo.content,
      completed:todo.completed
    })
  }
  const handleUpdateInoutChange =(e)=>{
    setUpdateTodos({
      ...updateTodos,
      content: e.target.value,
    })
  }
  const handleUpdateInoutBlur = ()=>{
    const id= updateTodos.id;
   setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, content: updateTodos.content } : todo
    ),
    setUpdateTodos({
      id:null,
      content:"",
      completed:false
    })
  )}

  const completedCheckbox = (todo) =>{
    const id = parseInt(todo.id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    )
  }

  const removeTodo = (todoId) =>{
    setTodos([...todos.filter((todo)=> todo.id !== todoId)]);
  }
  
  const creatTodos = (newTodo) =>{
    setTodos([...todos, newTodo])
  }
  const removeAll = (todoLenght) =>{
    setTodos([todos.splice(0,todoLenght)])
    console.log(todos) 
  }
  
  console.log(todos)

  return (
    <div className='todo-container'>
        <TodosCreat oncreatTodos={creatTodos} />
        <TodoList todos={todos} updateTodos={updateTodos}  onremoveTodos={removeTodo} handleUpdateInoutContent={handleUpdateInoutContent} handleUpdateInoutChange={handleUpdateInoutChange} handleUpdateInoutBlur={handleUpdateInoutBlur}
        completedCheckbox={completedCheckbox}
        />
        <Footer todos={todos} onRemoveAll={removeAll}/>
    </div>
  )
}

export default TodoContainer
