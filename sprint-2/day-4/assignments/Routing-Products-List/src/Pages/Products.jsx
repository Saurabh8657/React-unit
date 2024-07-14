import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const [ products, setProducts ] = useState([]);
  async function fetchProducts(){
    try{
      let response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`) ;
      let data = await response.json() ;
      console.log(data) ;
      setProducts(data) ;
    }catch(error){
      console.log(error) ;
    }
  }
  useEffect( ()=>{
    fetchProducts() ;
  },[] )
  return (
    <div data-testid="product-page">
      <h1>Products Page</h1>
      <div data-testid="product-card-wrapper" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px",padding:"0 50px"}} > 
       { products.map( (item,index)=>{
        return <ProductCard key={index} item={item} />
       } ) }
      </div>
    </div>
  );
};

export default Products;
