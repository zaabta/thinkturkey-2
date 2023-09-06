import './App.css';
import { Box } from './Box';
import data from "./data.json"

function App() {
  return(<div>
    <h1>shopping Cart</h1>
    <Box products={data}/>
    </div>)

}

export default App;
