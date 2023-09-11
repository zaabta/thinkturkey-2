import { ToDo } from "./ToDo";
import { useContext } from "react";
import { TaskContext } from "../context";

export const ToDoList = () => {
    const { tasks: data } = useContext(TaskContext);
    return(<div className="todo-list">
        {
            data.map((task) => {
                return(<ToDo 
                    id={task.id}
                    key={task.id} 
                    text={task.content} 
                    color={task.color} 
                    isChecked={task.isChecked}
                    />)
            })
        }
    </div>);
}