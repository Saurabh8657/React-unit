import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from '../Pages/AllProducts'
import ProductDetails from '../Pages/ProductDetails'

export default function AllRoutes() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={ <AllProducts/> } />
                    <Route path="/products/:id" element={ <ProductDetails/> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
