import { useCart } from "../../Contexts/CartContext";
import "./Checkout.css";

export const OrderSummary = ()=>{
    const {cartItem, cartProductDetails} = useCart();
    const {quantity, totalPrice} = cartProductDetails;
    return(
        <>
        <div className="orderSummaryDiv">
        <h3>Order Summary</h3>
             <div>
                <h4 style={{color:"green"}}>You order has been placed succesfully</h4>
             </div>
             <div>
                <h4>Expected Delivery Date: 4-5 Business Days</h4>
             </div>
               <div className="title_checkDiv">
                <h4>Items({quantity})</h4>
                <h4>Quantity</h4>
               </div>
               
                {cartItem?.map((item)=>(
                    <div className="item_checkDiv" key={item._id}>
                        <p>{item.name}</p>
                        <p>{item.qty}</p>
                    </div> 
                ))}
                <div className="total_checkDiv">
                <p style={{fontWeight:"600"}}>Total Price: </p>
                <p>Rs. {totalPrice}</p>
                </div>
        </div>
        </>
    )
}