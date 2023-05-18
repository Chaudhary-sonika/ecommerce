import { NavLink } from "react-router-dom";
import "./Header.css";
export const Header = ()=>{
    return(
        <>
        <nav>
        {/* <h2>DigiSpace</h2> */}
        <img src="https://img-wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/b1e65f52-b7b0-4872-9f88-054c6ba9471d/design-previews/4a92dcd1-ba6f-4e51-a245-b640249e9855/1684342738420-sample.jpeg?filename=Free_Sample_By_Wix.jpg" alt="logo"/>
        <div className="navDiv">
        <input placeholder="Search"/>
        <span style={{margin:"1rem"}}></span>
        <NavLink className="linkNav" to="/">Home</NavLink>
        
        <span style={{margin:"1rem"}}></span>
        <NavLink className="linkNav" to="/wishlist">WishList</NavLink>
        <span style={{margin:"1rem"}}></span>
        <NavLink className="linkNav" to="/cart">Cart</NavLink>
        
        <span style={{margin:"1rem"}}></span>
        <NavLink className="linkNav" to="/login">Login</NavLink>
        </div>
        </nav>
        </>
    );
}