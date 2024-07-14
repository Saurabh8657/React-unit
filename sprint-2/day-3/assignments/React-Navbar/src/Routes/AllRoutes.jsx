import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Products from '../Pages/Products'

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route  path='/' element={ <Home/> } />
                    <Route  path='/about' element={ <About/> } />
                    <Route  path='/contact' element={ <Contact/> } />
                    <Route  path='/products' element={ <Products/> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export {AllRoutes}