import { AiOutlineCheck, AiTwotoneDelete } from 'react-icons/ai';
import { useContext } from 'react';
import { TaskContext } from "../context"

export const ToDo = ({ id, text, color, isChecked }) => {
    const { check, delete: deleteTodo } = useContext(TaskContext);
    return(
    <div className="todo" style={{
        backgroundColor: color
    }}>
        <p style={{ 
            textDecoration: isChecked ? "line-through" : "none",
         }}>{text}</p>
        <div className="btns">
            <AiOutlineCheck  onClick={() => check(id)}/>
            <AiTwotoneDelete onClick={() => deleteTodo(id)}/>
        </div>
    </div>);
}