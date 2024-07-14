import React, { useState } from "react";
import { ProductObj } from "../constants";
import { useDispatch } from "react-redux";
import { CartActionType } from "../Reducers/Cart/action.types";
import { addToCart, deleteFromCart } from "../Reducers/Cart/action-creators";

type ProductPropsType = {
  product: ProductObj;
  inCart: boolean ;
}

 export default function Product({product, inCart }: ProductPropsType) {
  const [ add, setAdd ] = useState<boolean>(true) ;
  const dispatch = useDispatch();
  
  const handleAddToCart = (e:React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault();
    dispatch<CartActionType>(addToCart(product)) ;
  };

  const handleDeleteFromCart = (e:React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault();
    dispatch<CartActionType>(deleteFromCart(product)) ;
  };

  return (
    <div data-testid="product" style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "300px", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} >
      <img data-testid="product-image" src={product.img} alt="404 Error" style={{ width: "200px" }} />
      <h3 data-testid="product-brand">{product.brand}</h3>
      <h4 data-testid="product-price">Price:- {product.price}</h4>
      <p data-testid="product-category">Category:- {product.category}</p>
      <p data-testid="product-details">{product.details}</p>
      <button onClick={inCart ? handleDeleteFromCart : handleAddToCart}>
        {
          inCart ?  "Delete" : "Add To Cart" 
        }
      </button>
    </div>
  );
}