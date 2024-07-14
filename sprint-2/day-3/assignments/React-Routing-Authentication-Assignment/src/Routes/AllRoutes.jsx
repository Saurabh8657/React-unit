import React from 'react'
import { Navbar } from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import AllProducts from '../Pages/Products'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>   
                <Routes>
                    <Route  path="/login" element={<Login/>}  />
                    <Route  path="/" element={<Home/>}  />
                    <Route  path="/about" element={<About/>}  />
                    <Route  path="/contact" element={<Contact/>}  />
                    <Route  path="/products" element={ <PrivateRoute>  {<AllProducts/>}  </PrivateRoute>}  />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export {AllRoutes}