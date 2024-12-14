import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import { Toaster } from "react-hot-toast";


function Layout() {

  return (
    <>
      <Navigation/>
      <Outlet/>
      <Footer/>
      <Toaster/>

    </>
  )
}

export default Layout
