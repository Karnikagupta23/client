import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Register from './pages/Register'
import MyBooking from './pages/MyBooking'
import Coursedetails from './pages/Coursedetails'
import Profile from './pages/Profile'
import AdminBookings from './pages/admin/AdminBookings'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/mybooking' element={<MyBooking/>}/>
      <Route path='/coursedetails/:id' element={<Coursedetails/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/admin/bookings' element={<AdminBookings/>}/>
      

    </Routes>
    <Footer/>
    </>
  )
}

export default App