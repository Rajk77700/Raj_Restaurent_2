import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
// import Services from './pages/Services'
import Contact from './pages/Contact'
import Reservation from './pages/Reservation'
import Notfound from './pages/Notfound'
import Success from './pages/Success'
import './index.css'
import Restaurant from './pages/Restaurant'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>}></Route>
        {/* <Route path='/services' element={<Services/>}></Route> */}
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>} ></Route>
        <Route path='/reservation' element={<Reservation/>}></Route>
        <Route path='/success' element={<Success></Success>}></Route>
        <Route path='/*' element={<Notfound/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App