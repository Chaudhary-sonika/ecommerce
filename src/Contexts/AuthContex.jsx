import { createContext, useContext, useReducer, useState } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import { useNavigate } from "react-router";
import axios from "axios";


const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{
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
                // navigate("/landing");
                localStorage.setItem("token", data?.encodedToken);
            }
        } catch(e){
            console.error(e);
        }
    }
    return(
        <>
        <AuthContext.Provider value={{authState, authDispatch, userLogin}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export const useAuth = ()=>useContext(AuthContext)