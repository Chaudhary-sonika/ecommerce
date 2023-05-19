import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router";

export const Home=()=>{
    const [homeData, setHomeData] = useState([]);
    const fetchData = async()=>{
        try{
            const response = await fetch("/api/categories");
            const dataCat = await response.json();
            setHomeData( dataCat.categories);
            console.log(dataCat);
        }catch(e){
            console.error(e)
        }
       }
  useEffect(()=>{
   fetchData();
  }, []);
  const navigate = useNavigate();
    return(
        <div>
          <div className="homeDiv">
           <div className="aboutDiv">
           <h2>DigiSpace</h2>
           <p>We are emerging E-commerce Brand in India. we provide you electronic items. Whether you’re setting up a new home or looking to upgrade, our range of appliances from Samsung, LG, Whirlpool, Godrej, and IFB among others will ensure you go home with the best appliance from the best brands. </p>
           </div>
           <img className="hero" src="https://onsitego.com/blog/wp-content/uploads/2017/01/rsz_ha2025.jpg" alt="heroImg"/>
          </div>
          <button onClick={()=>navigate("/landing")}>Shop now</button>
          <h3>Choose the Category</h3>
          <div className="categoryBox">
           {homeData.map(({_id, categoryName, description, imageUrl})=>(
                <div key={_id} className="catDiv">
                    <h3>{categoryName}</h3>
                    <img className="imageCat" src={imageUrl} alt="category"/>
                    <p>{description}</p>
                </div>
                ))}
           </div>
        </div>
        
    )
    
}