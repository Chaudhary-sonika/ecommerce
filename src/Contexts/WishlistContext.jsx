import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


const WishlistContext = createContext(null);
export const WishlistProvider =({children})=>{
    const [wishlistItem, setWishlistItem] = useState([]);
    
    const token = localStorage.getItem("token");
    const fetchWishlistData= async()=>{
        try{
            const {data, status} = await axios({
                method: "GET",
                url: "/api/user/wishlist",
                headers: { authorization: token },
            });
            if(status===200){
                setWishlistItem(data?.wishlist);
            }
        } catch(e){
            console.error(e);
        }
    }
    const AddToWishlist = async(wishlistData)=>{
        try{
            const {data, status} = await axios({
                method: "POST",
                url: "/api/user/wishlist",
                data: {product: wishlistData},
                headers: { authorization: token },
            });
            if(status ===201){
                setWishlistItem(data?.wishlist);
                toast.success("added to wishlist");
            }
        }catch(e){
            console.error(e);
        }
    }
    const removeFromWishlist = async(itemId)=>{
        try{
            const {data, status} = await axios({
                method: "DELETE",
                url: `/api/user/wishlist/${itemId}`,
                headers: { authorization: token },
            });
            if(status ===200){
                setWishlistItem(data?.wishlist);
                toast.success("Removed from the Wishlist");
            }
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        fetchWishlistData();
    }, []);
    return(
        <WishlistContext.Provider value={{wishlistItem,  AddToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}
export const useWishlist = ()=> useContext(WishlistContext);