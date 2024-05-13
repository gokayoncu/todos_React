import React from 'react'
import './../css/footer.css'

function Footer({todos,onRemoveAll}) {
  const removeAll = () =>{
    onRemoveAll(todos.length)
  }

  return (
    <div className='footer'>
        <p>{todos.length} item left</p>
        <div>
            <button>All</button>
            <button>Active</button>
            <button >Completed</button>
        </div>
        <button className='clear-btn' onClick={removeAll}>Clear Completed</button>
    </div>
  )
}

export default Footer
