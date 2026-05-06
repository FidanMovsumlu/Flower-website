import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home";
import About from "../pages/about";
import Product from "../pages/product";
import Contact from "../pages/contact";
import Register from "../pages/register";
import Login from "../pages/login";
import Favorites from "../pages/Favorites";
import Detail from "../pages/detail";
import AdminLayout from "../pages/admin/adminlayout";
import Products from "../pages/admin/products/products";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Order from "../pages/admin/orders/order";
import Message from "../pages/admin/messages/message";
import MyOrder from "../pages/myOrder";


const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Product />,
        path: "product",
      },
      
      {
  element: <PrivateRoute />,
  children: [
    { path: "favorites", element: <Favorites /> }
  ]
},
      {
path:"/products/:id",
element:<Detail />
      },
      {
        element: <Contact />,
        path: "contact",
      },
    ],
  },
  {
    element: <Register />,
    path: "register",
  },
  {
    element: <Login />,
    path: "login",
  },
   {
  path: "/admin",
  element: <AdminRoute/>,
  children: [
    {
  path: "/admin",
  element: <AdminRoute />,
  children: [
    {
      element: <AdminLayout />,
      children: [
        
       { index: true, element: <Products /> },
        { path: "products", element: <Products /> },
        { path: "orders", element: <Order /> },
        {path:"messages",element: <Message/>}
      ],
    },
  ],
},
  ],
}
]);
export default router;
