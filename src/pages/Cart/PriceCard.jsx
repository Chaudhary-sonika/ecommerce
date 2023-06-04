import { useCart } from "../../Contexts/CartContext";
import "./Cart.css";
export const PriceCard =()=>{
    const {cartItem, cartProductDetails} = useCart();
    const {quantity, totalPrice, totalMRP} = cartProductDetails;
    return(
        <>
        <div className="priceCardMainDiv">
            <h2>Price Details:</h2>
            <div>
                <p>Total MRP({quantity}): Rs.{totalMRP}</p>
            </div>
            <div>
                <p>Discount: Rs.{`${totalMRP-totalPrice}`}</p>
            </div>
            <div>
                <p>Total Price: Rs.{totalPrice}</p>
            </div>
        </div>
        </>
    )
}