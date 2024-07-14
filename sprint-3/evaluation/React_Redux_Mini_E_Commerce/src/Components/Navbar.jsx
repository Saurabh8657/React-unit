import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../redux/actionTypes";

const Navbar = () => {
  const [state, setState ] = useState();
  const dispatch = useDispatch();
  function handlechangeAsc(e){
    e.preventDefault();
    setState("asc");
    dispatch(getProducts(1,`_order=${state}`))
  }
  function handlechangeDesc(e){
    e.preventDefault();
    setState("desc");
    dispatch(getProducts(1,`_order=${state}`))
  }
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" className="navbar-brand" id="home-link">
          My Shop
        </Link>
        <Link to="/cart" className="navbar-brand" id="cart-link">
          Cart
        </Link>
        <Link to="/wishlist" className="navbar-brand" id="wishlist-link">
          WishList
        </Link>
      </div>

      <div className="navbar-sort">
        <label htmlFor="sort-select" className="sort-label">
          Sort by:
        </label>
        <select id="sort-select" className="sort-select">
          <option value={""}>Default</option>
          <option value="asc"  
            onChange={(e)=>handlechangeAsc(e) }
          >Price Low to High</option>
          <option value="desc"
            onChange={(e)=>handlechangeDesc(e) }
          >Price High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
