import { useState } from "react";
import { useAuth } from "../../Contexts/AuthContex"
import "./Login.css";
import { useNavigate } from "react-router";
import {toast} from "react-toastify";


export const Login = ()=>{
    const {authState, userLogin, userLogout} = useAuth();
    const [userCred, setUserCred] = useState({email: "", password: "",});
    const navigate = useNavigate();
    const testUserData = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
    const loginHandler = ()=>{
        if(!userCred.email.trim() || !userCred.password.trim()){
            toast.warning("Enter all the fields");
        } else{
            userLogin(userCred);
            toast.success("You are Logged In!");
            navigate("/landing");
        }
    }
     const testUserHandler=()=>{
        setUserCred(testUserData);
        userLogin(testUserData);
        toast.success("You are Logged In!");
        // navigate("/landing");
     } 
    return(
        <>
        <div className="loginHome">
           <h4>Get Access To Your personalised Cart, Wishlist And Orders</h4>
           <h1>{authState.isLoggedIn?"You are Signed In" :"Sign In"}</h1>
           { authState.isLoggedIn? <div>
            <h4>"Welcome to DigiSpace! You Logged in as a guest"</h4>
            <button onClick={userLogout}>Logout</button>
           </div>: <div className="loginDiv">
            <label for="email">Email: </label>
            <input id="email"placeholder="Enter your email" value={userCred?.email} onChange={(e)=>setUserCred((prevState)=>({...prevState, email: e.target.value}))}/>
            <label for="password">Password: </label>
            <input id="password"placeholder="Enter your password" value={userCred?.password} onChange={(e)=>setUserCred((prevState)=>({...prevState, password: e.target.value}))}/>
            <button onClick={loginHandler}>Sign In</button>
            <button onClick={testUserHandler}>Test User</button>
            <p>Don't have an account? <span className="signupBtn" onClick={()=>navigate("/signup")}>Sign Up</span> </p>
           </div>
           }
        </div>
        </>
    )
}