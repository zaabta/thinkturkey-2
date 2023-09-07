import './App.css';
import { Box } from './Box';
import data from "./data.json"
import { Navbar } from './Navbar';

function App() {
  return(
    <div className='app'>
      <h1>shopping Cart</h1>
      <Navbar />
      <Box products={data}/>
    </div>
    )

}

export default App;
