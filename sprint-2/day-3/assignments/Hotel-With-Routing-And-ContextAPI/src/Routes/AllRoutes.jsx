import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import SingleRoom from "../Pages/SingleRoom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/dashboard" element={ <PrivateRoute> <Dashboard/> </PrivateRoute> } />
        <Route path="/dashboard/:id" element={ <PrivateRoute> <SingleRoom/>  </PrivateRoute> } />
      </Routes>
  </BrowserRouter>
  </div>
}

export default AllRoutes;
