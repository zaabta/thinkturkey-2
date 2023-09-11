import { createContext, useState } from "react";

export const  TaskContext = createContext();

export const Context = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const handleOnCheck = (id) => {
        const newTasks = [...tasks];
        const index = newTasks.findIndex((task) => task.id === id);
        if(index !== -1) {
        newTasks[index].isChecked = !newTasks[index].isChecked
        setTasks(newTasks);
        }
    }
    const handleOnDelete = (id) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.id === id);
    if(index !== -1) {
      newTasks.splice(index, 1)
      setTasks(newTasks);
    }
    }
    const global = {
        tasks,
        setTasks,
        check: handleOnCheck,
        delete: handleOnDelete,
    }
    return(
    <TaskContext.Provider value={global}>
        {children}
    </TaskContext.Provider>);
}