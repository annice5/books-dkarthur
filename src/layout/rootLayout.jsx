import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/sideBar'
import ScrollToTop from '../components/scrollToTop'


const RootLayout = () => {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <SideBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout