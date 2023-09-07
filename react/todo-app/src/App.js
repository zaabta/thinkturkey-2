import './App.css';
import { useState } from 'react';
import { Box } from './components/Box';
import { ToDoList } from './components/ToDoList';

const App = () => {
  const [text, setText] = useState("");
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
  return (
    <div className="app">
      <Box>
        <h1>what's the plan for today?</h1>
        <div className='text-input'>
          <input 
            value={text}  
            type='text' 
            placeholder='Enter your todo...' 
            onChange={(e) => setText(e.target.value)}/>
          <input 
            type='button' 
            value={"add ToDo"} 
            onClick={() => {
              const todo = {
                id: Math.random() * 10000,
                content: text,
                isChecked: false,
                color: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
              }
              setTasks([todo, ...tasks])
              setText("");
            }}/>
        </div>
        <ToDoList data={tasks} checkFun={handleOnCheck} deleteFun={handleOnDelete} />
      </Box>
    </div>
  );
}

export default App;
