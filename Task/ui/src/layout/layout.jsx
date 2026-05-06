import React, { useState } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollTop from '../providers/scrollTop'
import CartDrawer from '../components/CartDrawer'

function Layout() {
   const [loading, setLoading] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <>
    {loading && (
        <div className="fixed inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

    <ScrollTop/>
     <Navbar/>
      <CartDrawer />
  <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
