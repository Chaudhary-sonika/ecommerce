import { useState } from "react";
import { useAuth } from "../../Contexts/AuthContex"
import "./Login.css";
import { useNavigate } from "react-router";
import {toast} from "react-toastify";


export const Login = ()=>{
    const {authState, userLogin} = useAuth();
    const [userCred, setUserCred] = useState({email: "", password: "",});
    const navigate = useNavigate();
    const testUserData = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };

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
           { authState.isLoggedIn? "Welcome to DigiSpace! You Logged in as a guest": <div className="loginDiv">
            <label>Email: </label>
            <input placeholder="Enter your email"/>
            <label>Password: </label>
            <input placeholder="Enter your password"/>
            <button>Sign In</button>
            <button onClick={testUserHandler}>Test User</button>
            <p>Don't have an account? <span className="signupBtn" onClick={()=>navigate("/signup")}>Sign Up</span> </p>
           </div>
           }
        </div>
        </>
    )
}