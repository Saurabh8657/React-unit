import "./global.css";
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./Context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./Pages/EmployeeList";
import Login from "./Components/Login";
import EmployeeDetail from "./Pages/EmployeeDetail";
import PrivateRoute from "./Components/PrivateRoute";

export default function App() {
  return (
    <>
    <AuthContextProvider>
      <BrowserRouter>
          <Navbar />
          {/* Do not remove the navbar */}
          {/* Provide all routes here */}
          <Routes>
            <Route path="/" element={<EmployeeList/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/employeeDetail" element={ <PrivateRoute>  <EmployeeDetail/> </PrivateRoute> } />
            <Route path="/employeeDetail/:id" element={ <PrivateRoute>  <EmployeeDetail/> </PrivateRoute> } />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}
