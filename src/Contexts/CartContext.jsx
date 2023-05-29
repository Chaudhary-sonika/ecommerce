import { createContext, useContext } from "react";


const CartContext = createContext(null);
export const CartProvider =({children})=>{
    // const fetchCartData = async()=>{
    //     try{
    //         const response = await fetch()
    //     }
    // }
    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = ()=>useContext(CartContext);