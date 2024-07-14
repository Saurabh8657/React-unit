import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cake from "./Pages/Cake";
import Edit from "./Pages/Edit";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/cake",
    element: (
      <>
        <Navbar />
        <Cake />
      </>
    ),
  },
  {
    path: "/edit/:cakeid",
    element: (
      <>
        <Navbar />
        <Edit />
      </>
    ),
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
