import React from 'react'
import { Navbar } from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Products from '../Pages/Products'
const AllRoutes = () => {
    return (
        <div>
            <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/products' element={<Products />}/>
              </Routes>
            </BrowserRouter>
        </div>
    )
}
export {AllRoutes}