import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    totalTodos: total,
    completedTodos: completed
  } = React.useContext(TodoContext);
    let counterMessage = 'No hay tareas';
    if(total > 0)
    switch (completed) {
      case 0:
        counterMessage = 'No has completado ninguna tarea';
        break;
      case total:
        counterMessage = '!Felicidades! Has completado todas las tareas';
        break;
      default:
        counterMessage = `Has completado ${completed} de ${total} tareas`;
        break;
    }
    return (<h1 >
      {counterMessage}
      </h1>);
  } 

  export {TodoCounter};