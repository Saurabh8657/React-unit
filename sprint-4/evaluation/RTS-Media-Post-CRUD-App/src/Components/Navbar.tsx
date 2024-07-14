import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


type NavbarPropType = {
  page: boolean
};

export const Navbar = ({page}:NavbarPropType) => {
  return (
    <div>
      <h2>Media Post</h2>
      
      <Link className="home-link" to="/">
        Home
      </Link>
      <Link className="add-post-link" to="/add-post">
        Add New Post
      </Link>
      <h2 data-testid="page-name" >
        {
          !page ? "Add Post Page" : "Home Page"
        }
      </h2>
    </div>
  );
};
