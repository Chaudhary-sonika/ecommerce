import { useCart } from "../../Contexts/CartContext";
import { useWishlist } from "../../Contexts/WishlistContext"
import {FaRegTrashAlt} from "react-icons/fa";
export const Wishlist = ()=>{
    const {wishlistItem, removeFromWishlist} = useWishlist();
    const {AddToCart} = useCart();
    return(
        <>
        <h1>Your Wishlisted items</h1>
        <div>
        {
           wishlistItem?.map((item)=>{
            const {_id, name, price,mrp, imageUrl} = item;
            return(
                <div key={_id} className="CartProduct">
                    <div className="CartImageProd">
                    <img src={imageUrl} alt="CartProductImage" style={{width:"10rem", height:"10rem"}}/>  
                    </div>
                    <div className="cartProdDetail">
                    <div className="cartProductRemove">
                    <h5 className="cartProdName">{name}</h5>
                    <button  onClick={()=>removeFromWishlist(_id)} className="removeBtn"><FaRegTrashAlt/></button>
                    </div>
                    <h4>Price: Rs.{price}</h4>
                    <button onClick={()=>AddToCart(item)}>Add To Cart</button>
                    </div>
                </div>
            )
           }) 
        }
        </div>
        </>
    )
}