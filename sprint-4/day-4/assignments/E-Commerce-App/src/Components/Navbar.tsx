import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductObj } from "../constants";
import { rootState } from "../Reducers/store";
function Navbar() {
  const cart = useSelector( (state: rootState) => state.cart )
  return (
    <nav>
      <h1>Masai TS E-Commerce</h1>
      <div className="options">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          Cart -{" "}
          <span id="cart-count">{cart.length}</span>
        </Link>
      </div>
    </nav>
  ) ;
}

export default Navbar;
