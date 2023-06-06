import { useNavigate } from "react-router";
import { useAddress } from "../../Contexts/AddressContext"
import "./Checkout.css";

export const Address = ()=>{
    const navigate = useNavigate();
    const { addAddress, addressInitialState, setAddressInitialState, resetAddress} = useAddress();
    return(
        <>
        <h3>Enter Your Address Details here</h3>
        <div className="address_mainDiv">
        <input
          required
          type="text"
          placeholder="Name"
          value={addressInitialState.name}
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              name: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="Street"
          value={addressInitialState.street}
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              street: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="City"
          value={addressInitialState.city}
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              city: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="Zipcode"
          value={addressInitialState.zipcode}
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              zipcode: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="State"
          value={addressInitialState.state}
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              state: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="Country"
          value={addressInitialState.country}
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              country: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="Mobile Number"
          value={addressInitialState.mobile}
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              mobile: e.target.value,
            })
          }
        />
        <button onClick={()=>{navigate("/checkout"); addAddress(addressInitialState)}}>Add address</button>
        <button onClick={()=>navigate("/checkout")}>Cancel</button>
        <button onClick={()=>setAddressInitialState(resetAddress)}>Reset</button>
        </div>
        </>
    )
}