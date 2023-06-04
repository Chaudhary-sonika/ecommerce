
import "./Login.css";
export const SignUp =()=>{
    return(
        <>
        <div className="signUpHome">
            <h2>Please fill your Details Here...</h2>
        <div className="signUpDiv">
            <label>Enter your Email:</label>
            <input placeholder="Email-Id"/>
            <label>Enter Your Firstname:</label>
            <input placeholder="First Name"/>
            <label>Enter your Lastname:</label>
            <input placeholder="Last Name"/>
            <label>Enter your New Password:</label>
            <input placeholder="Create Password"/>
            <label>Re-Enter your Password:</label>
            <input placeholder="Re-enter Password"/>
            <button className="signPageBtn">Sign Up</button>
        </div>
        </div>
        </>
    )
}