import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({children}) {
    let { AuthState } = useContext(AuthContext) ;

    return AuthState.isAuth ?  children : <Navigate to={"/login"}/>
	
}

export default PrivateRoute;
