import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/sideBar'


const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <SideBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout