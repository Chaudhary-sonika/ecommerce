import "./Landing.css";
import { Filter } from "./Filter"
import { useState, useEffect } from "react";

export const Landing =()=>{
    const [productData, setProductData] = useState([]);
    const fetchData = async()=>{
        try{
            const response = await fetch("/api/products");
            const dataProd = await response.json();
            setProductData( dataProd.products);
            console.log(dataProd);
        }catch(e){
            console.error(e)
        }
       }
  useEffect(()=>{
   fetchData();
  }, []);   
    return(
        <div>
            <div className="titleDiv">
               <img className="Hero" src="https://static0.pocketlintimages.com/wordpress/wp-content/uploads/130383-smart-home-news-feature-how-will-samsung-s-200m-smartthings-purchase-affect-your-house-image5-35ZMJprEi9.png" alt="HomePicture"/>
                <h1 className="heroText">DigiSpace provides you exciting offers</h1>
            </div> 
           <div className="landingDiv">
             <Filter/>
             <div>
                <h4>All Products list here</h4>
                <div className="productLandingDiv">
                    {productData.map((item)=>{
                        const {_id, name, categoryName,category, rating, price, mrp, imageUrl} = item;
                        return(
                            <div key={_id} className="productDiv">
                              <img className="productImg" src={imageUrl} alt="productImage"/> 
                              <h4>{name}</h4>
                              <p className="catName">{category}</p>
                              <div className="detailDiv">
                                 <div>
                                  <p className="pricePara">Price: ₹{price}</p>
                                  <p className="mrpPara">MRP: ₹{mrp}</p>
                                 </div>
                                <p className="ratingPara">Rating: {rating}</p>
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