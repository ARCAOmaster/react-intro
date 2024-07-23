import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import CreateTodoButton from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'
import '../Modal/Modal.css';
import React from 'react';
import { TodoForm } from '../TodoForm';

function AppUI(){
  const {openModal, setOpenModal} = React.useContext(TodoContext);
    return (
        <>

        <TodoCounter/>
        <TodoSearch/>

          <TodoContext.Consumer>
            {(
              {
                searchedTodos,
                completeTodo,
                deleteTodo,
                loading,
                error}
            )=> (
            <TodoList>
              {loading && <TodosLoading/>}
              {error && <TodosError/>}
              {(!loading && searchedTodos.length === 0 && !error) && <TodosEmpty/>}
              {searchedTodos.map(todo => (<TodoItem onDelete = {() => deleteTodo(todo.text)} onComplete = {() => completeTodo(todo.text)} key={todo.text} text={todo.text} completed={todo.completed}/>))}
            </TodoList>
          )}
          </TodoContext.Consumer>
          <CreateTodoButton/>
          {openModal &&
            (<Modal>
              <TodoForm/>
          </Modal>)}
        </>
      );
}

export {AppUI};