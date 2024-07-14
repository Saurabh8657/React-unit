import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom' ;
import Homepage from "../Pages/Homepage";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import PageNotFound from "../Pages/PageNotFound";
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/products" element={ <Products/> } />
        <Route path="/products/:productId" element={ <SingleProduct/> } />
        <Route path="*" element={ <PageNotFound/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
