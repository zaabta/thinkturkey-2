import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SingUp";
import SignIn from "../pages/SignIn";

const routers = createBrowserRouter([{
    path: "/signup",
    element: <SignUp />,
},{
    path: "/",
    element: <SignIn/>,  
}])

export default routers