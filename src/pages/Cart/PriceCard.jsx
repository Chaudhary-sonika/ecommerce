import { useNavigate } from "react-router";
import { useCart } from "../../Contexts/CartContext";
import "./Cart.css";
export const PriceCard =()=>{
    const navigate = useNavigate();
    const {cartItem, cartProductDetails} = useCart();
    const {quantity, totalPrice, totalMRP} = cartProductDetails;
    return(
        <>
        <div className="priceCardMainDiv">
            <h2>Price Details:</h2>
            <div className="priceCardMRPDiv">
                <p style={{fontWeight:"600"}}>Total MRP({quantity}): </p>
                <p>Rs. {totalMRP}</p>
            </div>
            <div className="priceCardMRPDiv">
                <p style={{color:"green", fontWeight:"600"}}>Discount:</p>
                <p style={{color:"green"}}> Rs. {`${totalMRP-totalPrice}`}</p>
            </div>
            <div className="priceCardMRPDiv">
                <p style={{fontWeight:"600"}}>Total Price: </p>
                <p>Rs. {totalPrice}</p>
            </div>
            <button onClick={()=>navigate("/checkout")}>Checkout</button>
        </div>
        </>
    )
}