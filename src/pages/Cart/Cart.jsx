import { useCart } from "../../Contexts/CartContext"
import { CartCard } from "../../Component/CartCard";
import "./Cart.css";
export const Cart = ()=>{
    const {cartItem, QuantityInCart, RemoveFromCart} =useCart();
    console.log(cartItem, "Cart");
    return(
        <>
        <h1>Items in your cart</h1>
        <div className="CartProdDiv">
        <div className="CartHeading">
            <h2>Product Name</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
        </div>
        {
           cartItem?.map((item)=>{
            const {_id, name, price,qty, imageUrl} = item;
            return(
                <div key={_id} className="CartProduct">
                    <div className="CartImageProd">
                    <h5>{name}</h5>
                    <img src={imageUrl} alt="CartProductImage" style={{width:"10rem", height:"10rem"}}/>  
                    </div>
                    <h3>Rs.{price}</h3>
                    <button onClick={()=>QuantityInCart(_id, "decrement")}>-</button><h3>{qty}</h3><button onClick={()=>QuantityInCart(_id, "increment")}>+</button>
                    <button onClick={()=>RemoveFromCart(_id)}>Remove</button>
                </div>
            )
           }) 
        }
        </div>
            
        </>
    )
}