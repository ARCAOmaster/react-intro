import { CompleteIcon } from '../TodoIcons/CompleteIcon';
import { DeleteIcon } from '../TodoIcons/DeleteIcon';
import './TodoItem.css'
function TodoItem(props) {
    return (
      <li>
        <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
        <p className={`${props.completed ? "completed": ''}`}>{props.text}</p>
        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }
  export { TodoItem };