import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import ScrollTop from '../providers/scrollTop'


function Layout() {
  return (
    <>
    <ScrollTop/>
     <Navbar/>
  <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
