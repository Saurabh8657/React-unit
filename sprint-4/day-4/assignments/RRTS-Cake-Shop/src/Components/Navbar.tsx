import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h1>Masai TS Cake Shop</h1>
      <div className="options">
        <Link to={"/"}>Home</Link>
        <Link to={"/cake"}>Cakes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
