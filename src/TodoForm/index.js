import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const {setOpenModal, addTodo} = useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = () => {setOpenModal(false)};
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };
    return(
        <form onSubmit={
            onSubmit
        }>
            <label>Write your Todo:</label>
            <input className='ModalInput' value={newTodoValue} onChange={onChange}/>
            <div>
                <button onClick={onSubmit}>+</button>
                <button onClick={onCancel} style={{backgroundColor: '#af0000'}}>Cancel</button>
            </div>
        </form>
    )
}

export {TodoForm};