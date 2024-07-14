import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  // console.log(cart);
  useEffect( ()=>{
    console.log(wishlist);
  },[] )
  return (
    <div>
      <div className="wishlist-items-container">
      {wishlist.map( (item,index) => {
          return <ProductCard key={index} item={item} />
        })}
      </div>
    </div>
  );
};

export default Wishlist;
