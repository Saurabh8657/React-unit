// Navbar.js

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-heading">Employee Listing</h1>
      <Link to="/" className="nav-link" id="home">Home</Link>
      <Link to="/login" className="nav-link" id="login">Login</Link>
    </nav>
  );
};

export default Navbar;
