import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AddPost } from "./AddPost";
import { Navbar } from "../Components/Navbar";

export const MainRoutes = () => {
  return <div>
      <Routes>
        <Route path="/"  element={ <HomePage/> } />
        <Route path="/add-post"  element={ <AddPost/> } />
      </Routes>
  </div>;
};
