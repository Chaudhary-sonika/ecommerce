import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";


const CartContext = createContext(null);
export const CartProvider =({children})=>{
    const [cartItem, setCartItem] = useState([]);
    const token = localStorage.getItem("token");
    
    const cartProductDetails = cartItem.reduce((acc, curr)=>({quantity: acc.quantity + Number(curr.qty), totalPrice: acc.totalPrice+ Number(curr.price) *  Number(curr.qty), totalMRP: acc.totalMRP + Number(curr.mrp) *  Number(curr.qty)}), {quantity:0, totalPrice:0, totalMRP:0})

    const fetchCartData = async()=>{
        try{
            const {data, status} = await axios({
                method: "GET",
                url: "/api/user/cart",
                headers: { authorization: token },
              });
            if(status===200){
              console.log(data);
              setCartItem(data?.cart);
            }
        } catch(e){
            console.error(e);
        }
    }
    const AddToCart = async(cartData)=>{
        try{
            const {data, status} = await axios({
                method: "POST",
                url: "/api/user/cart",
               data: { product: cartData },
                headers: { authorization: token },
            });
            if(status===201){
                setCartItem(data?.cart);
                toast.success("Added to Cart");
            }
        }catch(e){
            console.error(e);
        }
    }
    const RemoveFromCart =async(itemId)=>{
      try{
        const {data, status} = await axios({
            method: "DELETE",
            url: `/api/user/cart/${itemId}`,
            headers: { authorization: token },
        });
        if(status===200){
            setCartItem(data?.cart);
            toast.success("Removed from the Cart");
            // console.log(data.cart, "remove");
        }
      }catch(e){
        console.error(e);
      }
    }
    const QuantityInCart = async(itemId, updateType)=>{
        try{
            const {data, status} = await axios({
                method: "POST",
                data:  { action: { type: updateType } },
                url: `/api/user/cart/${itemId}`,
                headers: {authorization: token},
            });
            if(status===200){
                setCartItem(data?.cart);
                console.log(data.cart, "qty")
            }
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        fetchCartData();
    }, []);
    return(
        <CartContext.Provider value={{ cartItem, AddToCart, RemoveFromCart, QuantityInCart, cartProductDetails}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = ()=>useContext(CartContext);