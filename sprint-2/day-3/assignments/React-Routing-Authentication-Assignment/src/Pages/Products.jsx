import React, { useEffect, useState } from 'react'

export default function AllProducts() {

  const [ products, setProducts ] = useState([]) ;

  let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products` ;
  
  async function fetchProducts(url){
    try{
      let response = await fetch(`${url}`);
      let data = await response.json();
      console.log(data.data);
      if(data.data){ setProducts(data.data) } ;
    }catch(error){
      console.log(error);
    }
  }
  useEffect( ()=>{
    fetchProducts(url);
  },[] )

  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
          {/* Map the below div against product data */}
          { products.map( (item,index)=> {
            return <div key={index} >
              <h3 className = "name"> {item.title} </h3>
              <div className= "brand"> {item.brand} </div>
              <div className = "price"> {item.price} </div>
          </div>
          } ) }
            
      </div>
    </div>
  )
}