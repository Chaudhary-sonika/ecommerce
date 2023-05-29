import "./SingleProduct.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
 

export const SingleProduct = ()=>{
    const { productId } = useParams();
    
    const [productDetail, setProductDetail] = useState([]);
    
    const fetchData = async()=>{
        try{
             const response = await fetch(`/api/products/${productId}`);
             
             const productInfo = await response.json();
            //  console.log(productInfo, "Shashi", productInfo?.products);
             setProductDetail(productInfo?.product);
             
            
        }catch(e){
            console.error(e);
        }
    }
    // const singleItem = productData.find((item)=>item._id === Number(productId));
    // console.log(singleItem);
    const {_id, name, category, rating, price, mrp, imageUrl, details, isBestSeller} = productDetail;
    useEffect(()=>{
        fetchData();
    }, []);
    
    return(
        <div className="singleAppBody">
            <div className="singleDiv">
                 <h3>{name}</h3>
                 
               <div className="singleProductDiv">
                     <div className="itemDiv">
                     <img className="singleImg" src={imageUrl} alt="productImage"/>
                    </div>
                    <div className="singleItemDiv">
                            <div className="singleCatName">
                               <p>Category: {category}</p>
                               {isBestSeller&& <p className="bestSellerDiv">BestSeller</p>}
                            </div>
                            <div className="SingleDetailDiv">
                                 <div>
                                  <p className="siglePricePara">Price: ₹{price}</p>
                                  <p className="singleMrpPara">(MRP: ₹{mrp})</p>
                                 </div>
                                <p className="singleRatingPara">Rating: {rating}⭐</p>
                                <div>
                                    <h4>Description:-</h4>
                                    {details?.map((item)=>(
                                        <li className="listDiv">{item}</li>
                                    ))}
                                </div>
                                <button className="singlePageBTN">Add to Cart</button>
                            </div>
                    </div>
                       
                </div>
            </div> 
        </div>
    )
}