import { createContext, useContext, useReducer, useState } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";


const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{
    const location = useLocation();
    const [userCredentials, setUserCredentials] = useState({
        firstName:"",
        lastName: "",
        email:"",
        password: "",
        confirmPassword: "",
    });
    const AuthInitial = {
        isLoggedIn: false,
        User:{},
        token: "",
    };
    const [authState, authDispatch] = useReducer(AuthReducer, AuthInitial);
    const navigate = useNavigate();
    const userLogin = async(loginDetail)=>{
        try{
            const {data, status} = await axios({
                method: "POST",
                data: loginDetail,
                url: "/api/auth/login",
              });
            if(status===200){
                authDispatch({type: "setLogin", payload: true});
                authDispatch({type: "setUser", payload: data?.foundUser});
                authDispatch({type:"setToken", payload:data?.encodedToken});
                navigate(location?.state?.from?.pathname || "/landing");
                localStorage.setItem("token", data?.encodedToken);
                // toast.success("Logged In!");
            }
        } catch(e){
            console.error(e);
        }
    }
    const userSignUp = async(signUpData)=>{
        try{
       const {data, status} = await axios({
        method: "POST",
        data: signUpData,
        url: "/api/auth/signup",
       });
       if(status===201){
        authDispatch({type: "setUser", payload:  data?.createdUser});
        authDispatch({type: "setToken", payload: data?.encodedToken});
        navigate(location?.state?.from?.pathname || "/landing");
        localStorage.setItem("token", data?.encodedToken);
        toast.success("You successfully Signed Up!");
       }
        }catch(e){
            console.error(e);
        }
    }
    const userLogout = () => {
        authDispatch({type: "setLogin", payload: false});
        authDispatch({ type: "setUser", payload: {} });
        authDispatch({type: "setToken", payload:""});
        localStorage.removeItem("data");
        toast.warning("You successfully logout from the App!");
      };
    return(
        <>
        <AuthContext.Provider value={{authState, authDispatch, userLogin, userSignUp, userCredentials, setUserCredentials, userLogout}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export const useAuth = ()=>useContext(AuthContext)