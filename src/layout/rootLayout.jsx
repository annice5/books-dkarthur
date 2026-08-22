import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/sideBar'
import ScrollToTop from '../components/scrollToTop'

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <SideBar />
      <div className="pt-20 sm:pt-24 lg:pt-28">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout