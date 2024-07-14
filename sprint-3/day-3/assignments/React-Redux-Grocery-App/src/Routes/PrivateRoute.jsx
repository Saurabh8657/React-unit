import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
    const { isAuth } = useSelector(state => state.login);
    return isAuth ? children : <Navigate to={"/"} />;
}
