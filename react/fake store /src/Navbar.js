import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategories(["all", ...data]))
        .catch((err => console.log(err)))
    },[])
    return(
    <ul className="navbar">
        { categories.map((category) => {
            return (<li>
                <Link to={`/categories/${category}`}>{category}</Link>
                </li>)
            }) 
        }
    </ul>);
}