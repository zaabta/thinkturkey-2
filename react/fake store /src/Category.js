import { useParams } from 'react-router-dom';
import './App.css';
import { Box } from './Box';
import { Navbar } from './Navbar';
import { useState, useEffect } from 'react';

const Category = () => {
    const { categories } = useParams()
    const [data , setData] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${categories !== "all" ? "category/" + categories : ""}`)
        .then((res) => res.json())
        .then((json) => setData(json))
    }, [categories])
  return(
    <div className='app'>
      <h1>{categories}</h1>
      <Navbar />
      <Box products={data}/>
    </div>
    )

}

export default Category;
