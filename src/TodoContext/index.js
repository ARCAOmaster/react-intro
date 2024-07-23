import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext({});

function TodoProvider({children}){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1');
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    const [openModal, setOpenModal] = React.useState(false);
  
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = todos.findIndex(todo => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false
      });
      saveTodos(newTodos);
    }
  
    return (
        <TodoContext.Provider value={
            {totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
          }
        }>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };