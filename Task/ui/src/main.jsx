import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import "./i18n";

import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root')).render(
  <FavoritesProvider> 
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  </FavoritesProvider>
)