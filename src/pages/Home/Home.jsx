import { useEffect, useState } from "react";
import "./Home.css";
import homespace from "../images/homespace2.jpg";

import { useNavigate } from "react-router";
import { useData } from "../../Contexts/contexts";

export const Home=()=>{
    const {dispatch} = useData();
    const [homeData, setHomeData] = useState([]);
    const fetchData = async()=>{
        try{
            const response = await fetch("/api/categories");
            const dataCat = await response.json();
            setHomeData( dataCat.categories);
            // console.log(dataCat);
        }catch(e){
            console.error(e)
        }
       }
  useEffect(()=>{
   fetchData();
  }, []);

  const categoryHandler=(categoryName)=>{
    dispatch({
        type: "category",
        payload: categoryName,
    })
    navigate("/landing")
  }
  const navigate = useNavigate();
    return(
        <div>
           <div className="homeFolderDiv">
            <img className="homePic" src={homespace} alt="img"/>
            <div className="homeText">
              <h1 className="headingText">Welcome to DigiSpace</h1>
              <h3 className="headingText">Summer Sale is Live!</h3>
              <button className="btnCheck" onClick={()=>navigate("/landing")}>Check it now</button>
            </div>
           </div>
          
          <h3 className="catHeading">Choose By Category-</h3>
          <div className="categoryBox">
           {homeData.map(({_id, categoryName, description, imageUrl})=>(
                <div key={_id} className="catDiv" onClick={()=>categoryHandler(categoryName)}>
                    <h3>{categoryName}</h3>
                    <img className="imageCat" src={imageUrl} alt="category"/>
                    <p>{description}</p>
                </div>
                ))}
           </div>
           <div className="homeDiv">
           <div className="aboutDiv">
           <h2>DigiSpace</h2>
           <p>We are emerging E-commerce Brand in India. we provide you electronic items. Whether you’re setting up a new home or looking to upgrade, our range of appliances from Samsung, LG, Whirlpool, Godrej, and IFB among others will ensure you go home with the best appliance from the best brands. </p>
           </div>
           <img className="heroTwo" src="https://onsitego.com/blog/wp-content/uploads/2017/01/rsz_ha2025.jpg" alt="heroImg"/>
          </div>
        </div>
        
    )
    
}