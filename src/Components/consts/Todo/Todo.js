import './Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useContext , useEffect} from 'react';
import { ToggleContext } from '../../../Pages/Landing/Landing';

const Todo = ({title,handleDelete,completed}) => {
    
    const { isLight, setIsLight, cancelled,setcancelled,originalTodos,setOriginalTodos,settodos} = useContext(ToggleContext);

    const checkthebox = (e,title) => {
        e.target.checked = !cancelled;
        setcancelled(!cancelled);

        // incomplete  
    }


    console.log(cancelled);

    return (
        <div className="todo_row_top p-3">
            <div className='todo_row'>
                <input type="checkbox" defaultChecked={completed === true} onClick={(e,title)=>checkthebox(e,title)} className="input_radio" name="completed" />
                <span className={completed === true && isLight ? "todo_title light_strikethrough " : completed === true && !isLight ? "todo_title dark_strikethrough" : 'todo_title'} > {title} </span>
            </div>
            
            <button onClick={handleDelete} className={!isLight ? "btn btn-default cancel_btn dark_background dark_text" : "btn btn-default cancel_btn"} >
                <FontAwesomeIcon icon={faTimes} className="fas-3x" />
            </button>
        </div>
    );
}

export default Todo;