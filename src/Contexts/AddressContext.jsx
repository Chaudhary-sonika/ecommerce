import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { useAuth } from "./AuthContex";
import axios from "axios";
import { toast } from "react-toastify";

const addressReducer = ( addressState, action)=>{
 switch (action.type) {
    case "getAddress":
        return {...addressState, addressData:action.payload};

     default:
        return addressState;   
 }
}

const AddressContext = createContext(null);
export const AddressProvider =({children})=>{
    const {authState} = useAuth();
    // const [addressData, setAddressData] = useState([]);
    const resetAddress = {
        _id: "",
        name: "",
        street: "",
        city: "",
        zipcode: "",
        state: "",
        country: "",
        mobile: "",
      };
    const [addressInitialState, setAddressInitialState] = useState(resetAddress);
  const [addressState, addressDispatch] = useReducer(addressReducer, {addressData: []});
  const fetchAddressData = async()=>{
        try{
            const {data, status} = await axios({
                 method: "GET",
                 url: "/api/user/addresses",
                 headers: { authorization: authState?.token },
            });
            if(status===200){
             addressDispatch({type:"getAddress", payload:data?.address})
            //  setAddressData(data?.address);
            //  console.log(data);
            }
            // console.log(data, status);
        }catch(e){
            console.error(e);
        }
    };
  
    const addAddress = async(addressInput)=>{
        try{
            const {data, status} = await axios({
                method: "POST",
            url: "/api/user/address",
            headers: { authorization: authState?.token },
            data: { address: addressInput },
            });
            if(status ===201){
                addressDispatch({type: "getAddress", payload: data?.address})
                toast.success("New addresss is added successfully");
            }
        }catch(e){
            console.error(e);
        }
    }
    const removeAddress = async(addressId)=>{
        try{
            const {data, status} = await axios({
                method: "DELETE",
              url: `/api/user/address/${addressId}`,
              headers: { authorization: authState?.token },
            });
            if(status===200){
                addressDispatch({type: "getAddress", payload: data?.address})
                toast.success("Removed address succesfully!");
            }
        }catch(e){
            console.error(e);
        }
    }
    const editAddresss = async (addressInput, addressId) => {
        try {
          const { status, data } = await axios({
            method: "POST",
            url: `/api/user/address/${addressId}`,
            headers: { authorization: authState?.token },
            data: { address: addressInput },
          });
          if (status === 201) {
            addressDispatch({ type: "getAddress", payload: data?.address });
           
          }
        } catch (e) {
          console.error(e);
        }
      };
    useEffect(()=>{
       if(authState?.token){
        fetchAddressData();
       } 
      }, [authState?.token]);

    return(
        <AddressContext.Provider value={{addressState, addressDispatch, addAddress, removeAddress, editAddresss, addressInitialState, setAddressInitialState, resetAddress,}}>
            {children}
        </AddressContext.Provider>
    )
}
export const useAddress =()=> useContext(AddressContext);