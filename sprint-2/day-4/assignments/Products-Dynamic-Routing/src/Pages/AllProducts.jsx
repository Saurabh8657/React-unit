import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AllProducts() {
  const [ products, setProducts ] = useState([]) ;
  const navigate = useNavigate() ;
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
    fetchProducts();
  },[] )

  function handleNavigation(id){
    navigate(`/products/${id}`)
  }

  return (
    <div style={{
      marginTop: "30px"
      }} >
      <div>All Products</div>
      <div data-testid = "products-wrapper" 
      style={{
        display:"flex",
        gap:"20px",
        marginTop: "30px"
        }} >
        {products.map( (item,index)=>{
          return  <div key={index}  style={{ border:"2px solid black", padding:"20px",cursor:"Pointer"}} 
           onClick={ ()=> handleNavigation(item.id)} >
            <h2 data-testid="product_name" >{item.name}</h2>
            <p>{item.id}</p>
            <p data-testid="product_price" >{item.price}</p>
          </div>
        } )}
      </div>
    </div>
  )
}
