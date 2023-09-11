import './App.css';
import { useState, useContext } from 'react';
import { Box } from './components/Box';
import { ToDoList } from './components/ToDoList';
import { TaskContext } from './context';

const App = () => {
  const [text, setText] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);
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
        <ToDoList />
      </Box>
    </div>
  );
}

export default App;
