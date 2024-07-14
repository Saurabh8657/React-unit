import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const [ product, setProduct ] = useState({});
  const {id} = useParams();

  async function fetchProduct(){
    try{
      let response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`) ;
      let data = await response.json() ;
      console.log(data) ;
      setProduct(data);
    }catch(error){
      console.log(error) ;
    }
  }

  useEffect( ()=>{
    fetchProduct();
  },[] )

  return (
    <div data-testid = "product-details" >
      <div>
        <h2 data-testid="product_name" >{product.name}</h2>
        <p>{product.id}</p>
        <p data-testid="product_price" >{product.price}</p>
      </div>
    </div>
  )
}
