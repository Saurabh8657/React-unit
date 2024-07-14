import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../Components/Product";
import { ProductObj } from "../constants";
import { rootState } from "../Reducers/store";
function Cart() {
  const cart  = useSelector( (state: rootState) => state.cart)

  useEffect( ()=>{
    console.log(cart)
  },[])
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "30px" }} >
      {
        cart.map( (item,index) => {
          return <> <Product key={index} product={item} inCart={true} />
          </>
        } )
      }
    </div>
    </>
  );
}

export default Cart;
