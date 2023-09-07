import { ToDo } from "./ToDo";

export const ToDoList = ({ data, checkFun, deleteFun }) => {
    return(<div className="todo-list">
        {
            data.map((task) => {
                return(<ToDo 
                    id={task.id}
                    key={task.id} 
                    text={task.content} 
                    color={task.color} 
                    isChecked={task.isChecked}
                    checkTodo={checkFun}
                    deleteTodo={deleteFun}
                    />)
            })
        }
    </div>);
}