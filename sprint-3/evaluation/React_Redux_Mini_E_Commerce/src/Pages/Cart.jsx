import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  // console.log(cart);
  useEffect( ()=>{
    console.log(cart);
  },[] )
  return (
    <div>
      <div className="cart-items-container">
      {cart.map( (item,index) => {
          return <ProductCard key={index} item={item} />
        })}
      </div>
    </div>
  );
};

export default Cart;
