import { toast } from "react-toastify";
import { useAuth } from "../../Contexts/AuthContex";
import "./Login.css";
export const SignUp = () => {
  const { userSignUp, userCredentials, setUserCredentials } = useAuth();
  const signUpHandler = () => {
    if (
      !userCredentials.firstName.trim() ||
      !userCredentials.lastName.trim() ||
      !userCredentials.email.trim() ||
      !userCredentials.password.trim() ||
      !userCredentials.confirmPassword.trim()
    ) {
      toast.warning("Enter all credentials!");
    } else if (userCredentials.password !== userCredentials.confirmPassword) {
      toast.warning("Passwords donot match!");
    } else {
      userSignUp(userCredentials);
    }
  };
  console.log(userCredentials);
  return (
    <>
      <div className="signUpHome">
        <h2>Please fill your Details Here...</h2>
        <div className="signUpDiv">
          <label for="email">Enter your Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email-Id"
            value={userCredentials.email}
            onChange={(e) =>
              setUserCredentials((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
          <label for="firstname">Enter Your Firstname:</label>
          <input
            type="firstname"
            id="firstname"
            placeholder="First Name"
            value={userCredentials.firstName}
            onChange={(e) =>
              setUserCredentials((prevState) => ({
                ...prevState,
                firstName: e.target.value,
              }))
            }
          />
          <label for="lastname">Enter your Lastname:</label>
          <input
            type="lastname"
            id="lastname"
            placeholder="Last Name"
            value={userCredentials.lastName}
            onChange={(e) =>
              setUserCredentials((prevState) => ({
                ...prevState,
                lastName: e.target.value,
              }))
            }
          />
          <label for="password">Enter your New Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Create Password"
            value={userCredentials.password}
            onChange={(e) =>
              setUserCredentials((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
          <label for="confirmPassword">Re-Enter your Password:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter Password"
            value={userCredentials.confirmPassword}
            onChange={(e) =>
              setUserCredentials((prevState) => ({
                ...prevState,
                confirmPassword: e.target.value,
              }))
            }
          />

          <button className="signPageBtn" onClick={signUpHandler}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};
