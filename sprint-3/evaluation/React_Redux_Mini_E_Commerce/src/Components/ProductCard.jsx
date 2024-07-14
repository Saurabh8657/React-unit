import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, ADD_TO_WISHLIST } from "../redux/actionTypes";

const ProductCard = (item) => {
  // const cart = useSelector(state => state.cart);
  // const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  item = item.item ;

  function handleAddToCart(e,item){
    e.preventDefault() ;
    dispatch({type:ADD_TO_CART, payload:item})
  }
  function handleAddToWishlist(e,item){
    e.preventDefault() ;
    dispatch({type:ADD_TO_WISHLIST, payload:item})
  }
  useEffect( ()=>{
    console.log(item) ;
  },[] )
  return <div className="product-card">
    <img className="product-image" src={item.image} />
    <h2 className="product-title">{item.title}</h2>
    <p className="product-brand">Brand: {item.brand}</p>
    <p className="product-category">Category: {item.category}</p>
    <p className="product-price">Price: ${item.price}</p>

    <button className="add-to-cart-btn"
    onClick={(e)=> handleAddToCart(e,item)}
    >
      Add to Cart
    </button>

    <button className="add-to-wishlist-btn"
    onClick={(e)=> handleAddToWishlist(e,item)}
    >
      Add to Wishlist
    </button>
  </div>;
};

export default ProductCard;

// brand
// : 
// "roadster"
// category
// : 
// "men"
// id
// : 
// 1
// image
// : 
// "https://picsum.photos/200"
// price
// : 
// 844
// title
// : 
// "cotton Checked Casual Shirt"
