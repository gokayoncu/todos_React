import { useState } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'

function App() {
  

  return (
    <div className='container'>
      <h1>todos</h1>
      <TodoContainer />
    </div>
  )
}

export default App
