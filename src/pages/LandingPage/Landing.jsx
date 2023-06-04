import "./Landing.css";
import { Filter } from "./Filter"

import { useFilter } from "../../Contexts/filterContext";
import { useNavigate } from "react-router";
import { useCart } from "../../Contexts/CartContext";
import { useWishlist } from "../../Contexts/WishlistContext";
import { toast } from "react-toastify";

export const Landing =()=>{
    const {FinalData} = useFilter();  
    const navigate = useNavigate(); 
    const {AddToCart, cartItem}  = useCart();
    const {AddToWishlist, wishlistItem} = useWishlist();
    
    return(
        <div>
            <div className="titleDiv">
               <img className="Hero" src="https://static0.pocketlintimages.com/wordpress/wp-content/uploads/130383-smart-home-news-feature-how-will-samsung-s-200m-smartthings-purchase-affect-your-house-image5-35ZMJprEi9.png" alt="HomePicture"/>
                <div className="heroText">
                   <h1>DigiSpace provides you exciting offers</h1>
                   <h2>Grab it now</h2>
                </div>
               
            </div> 
            <h3 id="landingHedingTwo">All Products list here-</h3>
           <div className="landingDiv">
             <Filter/>
             <div>
                
                <div className="productLandingDiv">
                    {FinalData.map((item)=>{
                        const {_id, name, category, rating, price, mrp, imageUrl} = item;
                        const isWishlisted = wishlistItem.find((arr)=>arr._id===_id );
                        const isItemInCart = cartItem.find((arr)=>arr._id===_id);
                        return(
                          <div key={_id} className="productDiv" >
                              <div className="prodDiv" onClick={()=>navigate(`/products/${_id}`)}>
                                <img className="productImg" src={imageUrl} alt="productImage" />
                              </div> 
                              <div className="allInfoDiv">
                              <h5>{name}</h5>
                              <p className="catName">{category}</p>
                              <div className="detailDiv">
                                 <div>
                                  <p className="pricePara">Price: ₹{price}</p>
                                  <p className="mrpPara">MRP: ₹{mrp}</p>
                                 </div>
                                <p className="ratingPara">{rating}⭐</p>
                              </div>
                              {isItemInCart?<button className="landingBtn" onClick={()=>navigate("/cart")}>Go to Cart</button>:<button className="landingBtn" onClick={()=>AddToCart(item)}>Add to Cart</button>}
                              <button className="landingBtn" onClick={()=>AddToWishlist(item)}>{isWishlisted?"Wishlisted": "Add To Wishlist"}</button>
                              </div>
                            </div>
                        )
                    })}
                </div>
             </div>
           </div>
        </div>
    )
}