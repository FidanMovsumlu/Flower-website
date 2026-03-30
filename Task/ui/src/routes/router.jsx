import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home";
import About from "../pages/about";
import Product from "../pages/product";
import Contact from "../pages/contact";
import Register from "../pages/register";
import Login from "../pages/login";
const router = createBrowserRouter([
      {
        element:<Layout/>,
        path: "/",
        children:[
            {
                element:<Home/>,
                index:true
            },
            {
                element:<About/>,
                path:"about"
            },
            {
                element:<Product/>,
                path:"product"
            },
            {
                element:<Contact/>,
                path:"contact"
            },
        ]
    },
    {
        element:<Register/>,
        path:"register"
    },
    {
        element:<Login/>,
        path:"login"
    }
])
export default router