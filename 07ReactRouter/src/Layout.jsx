import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> 
    {/* header footer will stay same uske ander ki cheeze chnage hogi */}
    <Footer/>
    </>
  )
}

export default Layout