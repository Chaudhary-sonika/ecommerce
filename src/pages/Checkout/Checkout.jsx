import { useState } from "react";
import { useCart } from "../../Contexts/CartContext"
import "./Checkout.css";
import { useAddress } from "../../Contexts/AddressContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const Checkout = ()=>{
  const navigate = useNavigate();
    const {cartItem, cartProductDetails} = useCart();
    const {quantity, totalPrice, totalMRP} = cartProductDetails;
    const [currentAddress, setCurrentAddress] = useState({});
    const {addressState, setAddressInitialState, resetAddress, removeAddress, editAddresss } = useAddress();
    // console.log(currentAddress);
    const {_id, name, street, city, zipcode, state, country, mobile} = currentAddress;

    const PlaceOrderHandler=(id)=>{
      const findAdd = currentAddress._id=== id;
      if(findAdd){
        navigate("/ordersummary");
        toast.success("You placed order successfully!");
      }else{
        toast.warning("Please Enter the Address!");
      }
      
    }
    return(
        <>
        <h2>Checkout here</h2>
         <div className="checkoutMainDiv">
            <div>
                <h3>Select Address</h3>
                <button
                className="addAddressBtn"
                onClick={() => {
                  navigate("/addresspage");
                  setAddressInitialState(resetAddress);
                }}
              >
                + Add New Address
              </button>
            <ul>
              {addressState?.addressData?.map((address) => (
                <li className="checkout_actual_address" key={address._id}>
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
                  <button onClick={()=>{navigate("/addresspage"); editAddresss(address, address._id)}}>Edit</button> 
                 <button onClick={()=>removeAddress(address._id)}>Delete</button>
                </li>
              ))}
              
            </ul> 
            </div>
            <div className="order_detailCheck">
               <h3>Order Details</h3>
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
                
                <h3>Price Details</h3>
                <div className="price_checkDiv">
                <p style={{fontWeight:"600"}}>Total MRP({quantity}): </p>
                <p>Rs. {totalMRP}</p>
                </div>
                <div className="mrp_checkDiv">
                <p style={{color:"green", fontWeight:"600"}}>Discount:</p>
                <p style={{color:"green"}}> -Rs. {`${totalMRP-totalPrice}`}</p>
                </div>
                <div className="total_checkDiv">
                <p style={{fontWeight:"600"}}>Total Price: </p>
                <p>Rs. {totalPrice}</p>
                </div> 
                <div>
                <h3>Deliver to</h3>
                <div className="checkoutAddressDetails">
                      <h3>{name}</h3>
                      <p>{street}</p>
                      <p>
                        {city} - {zipcode}
                      </p>
                      <p>
                        {state} - {country}
                      </p>
                      <p>{mobile}</p>
                    </div>
                </div>
                <button onClick={()=>PlaceOrderHandler(_id)}>Place Order</button>
            </div>
            
         </div>
        </>
    )
}