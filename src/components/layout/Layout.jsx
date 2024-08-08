import React from 'react'
import NavBar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    
    <div className='w-full'>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
    
    
  )
}
