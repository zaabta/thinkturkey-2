import { AiOutlineCheck, AiTwotoneDelete } from 'react-icons/ai';

export const ToDo = ({ id, text, color, isChecked, checkTodo, deleteTodo }) => {
    return(
    <div className="todo" style={{
        backgroundColor: color
    }}>
        <p style={{ 
            textDecoration: isChecked ? "line-through" : "none",
         }}>{text}</p>
        <div className="btns">
            <AiOutlineCheck  onClick={() => checkTodo(id)}/>
            <AiTwotoneDelete onClick={() => deleteTodo(id)}/>
        </div>
    </div>);
}