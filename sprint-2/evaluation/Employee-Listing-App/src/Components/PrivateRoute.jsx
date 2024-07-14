import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      {auth ? children : <Navigate to="/login" />}
    </>
  );
};

export default PrivateRoute;

