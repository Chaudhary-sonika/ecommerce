import { Navigate } from "react-router"
import { useAuth } from "../Contexts/AuthContex"
import { useLocation } from "react-router";


export const RequireAuth = ({children})=>{
    const {authState} = useAuth();
    const location = useLocation();
    return authState?.isLoggedIn ? children : <Navigate to="/login" state={{ from: location }}/>
}