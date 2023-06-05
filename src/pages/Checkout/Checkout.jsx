import { useState } from "react";
import { useCart } from "../../Contexts/CartContext"
import "./Checkout.css";
import { useAddress } from "../../Contexts/AddressContext";

export const Checkout = ()=>{
    const {cartItem, cartProductDetails} = useCart();
    const {quantity, totalPrice, totalMRP} = cartProductDetails;
    const [currentAddress, setCurrentAddress] = useState({});
    const {addressState, setAddressInitialState, resetAddress } = useAddress();
    console.log(addressState);
    return(
        <>
        <h2>Checkout here</h2>
         <div className="checkoutMainDiv">
            <div>
                <h3>Select Address</h3>
            <ul>
              {addressState?.map((address) => (
                <li className="checkout_actual_address">
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="selectAddress"
                      value={address._id}
                      checked={currentAddress._id === address._id}
                      onChange={() => setCurrentAddress(address)}
                    />
                    <div className="checkoutAddressDetails">
                      <h3>{address?.name}</h3>
                      <p>{address?.street}</p>
                      <p>
                        {address.city} - {address.zipcode}
                      </p>
                      <p>
                        {address.state} - {address.country}
                      </p>
                      <p>{address.mobile}</p>
                    </div>
                  </label>
                </li>
              ))}
               <button
                className="addAddressBtn"
                onClick={() => {
                //   navigate("/addNewAddress");
                  setAddressInitialState(resetAddress);
                }}
              >
                + Add New Address
              </button>
            </ul> 
            </div>
            <div className="order_detailCheck">
               <h3>Order Details</h3>
               <div className="title_checkDiv">
                <h4>Items({quantity})</h4>
                <h4>Quantity</h4>
               </div>
               
                {cartItem?.map((item)=>(
                    <div className="item_checkDiv">
                        <p>{item.name}</p>
                    <p>{item.qty}</p>
                    </div> 
                ))}
                
                <h3>Price Details</h3>
                <div className="price_checkDiv">
                <p style={{fontWeight:"600"}}>Total MRP({quantity}): </p>
                <p>Rs. {totalMRP}</p>
                </div>
                <div className="mrp_checkDiv">
                <p style={{color:"green", fontWeight:"600"}}>Discount:</p>
                <p style={{color:"green"}}> Rs. {`${totalMRP-totalPrice}`}</p>
                </div>
                <div className="total_checkDiv">
                <p style={{fontWeight:"600"}}>Total Price: </p>
                <p>Rs. {totalPrice}</p>
                </div> 
                <div>
                <h3>Deliver to</h3>
                </div>
                <button>Place Order</button>
            </div>
            
         </div>
        </>
    )
}