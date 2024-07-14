import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const {productId} = useParams();
  const [ SingleProduct,setSingleProduct] = useState({});
  async function fetchSingleProduct(){
    try{
      let response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${productId}`) ;
      let data = await response.json() ;
      console.log(data) ;
      setSingleProduct(data) ;
    }catch(error){
      console.log(error) ;
    }
  }
  useEffect( ()=>{
    fetchSingleProduct() ;
  },[] )
  return (
    <div data-testid="single-product-page">
      <h1>{SingleProduct.title}</h1>
      <div>
        <img src={SingleProduct.image} alt="Product Image" />
      </div>
      <div>
        <p>
        <strong>Price:</strong> `${SingleProduct.price}`
        </p>
        <p>
          <strong>Category:</strong> {SingleProduct.category}
        </p>
        <p>
          <strong>Description:</strong> {SingleProduct.description}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
