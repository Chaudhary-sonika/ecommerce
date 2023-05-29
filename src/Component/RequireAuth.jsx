import { Navigate } from "react-router"
import { useAuth } from "../Contexts/AuthContex"



export const RequireAuth = ({children})=>{
    const {isLoggedIn} = useAuth();
    return isLoggedIn ? children : <Navigate to="/login"/>
}