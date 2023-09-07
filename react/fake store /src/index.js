import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Category from "./Category"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/product/:id",
        element: <SingleProduct/>
    },
    {
        path: "categories/:categories",
        element: <Category />
    },
    {
        path: "categories",
        element: <App/>
    }
])

ReactDOM.createRoot(document.getElementById('root'))
.render(<RouterProvider router={routes}/>);

