import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext'

function CreateTodoButton() {
  const {setOpenModal}  = React.useContext(TodoContext);
  return (
    <div className='btn-center'>
      <button onClick={() => {
        setOpenModal((state)=>!state)}}>+</button>
    </div>
  )
}

export default CreateTodoButton