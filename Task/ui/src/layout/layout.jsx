import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import ScrollTop from '../providers/scrollTop'
import CartDrawer from '../components/CartDrawer'


function Layout() {
  return (
    <>
    <ScrollTop/>
     <Navbar/>
      <CartDrawer />
  <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
