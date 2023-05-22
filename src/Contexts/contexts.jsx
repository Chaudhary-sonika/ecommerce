import { createContext, useContext, useEffect, useReducer, useState } from "react"
import {  DataReducer } from "../reducer/DataReducer";

const DataContext = createContext(null);


export const DataProvider = ({children})=>{
    
    // const [productData, setProductData] = useState([]);
    const [state, dispatch] = useReducer(DataReducer, {AllProduct:[]});
    const fetchData = async()=>{
        try{
            const response = await fetch("/api/products");
            const dataProd = await response.json();
            dispatch({
                type: "initial_Product",
                payload: dataProd?.products,
              });
            // setProductData( dataProd.products);
            // console.log(dataProd);
        }catch(e){
            console.error(e)
        }
       }
  useEffect(()=>{
   fetchData();
  }, []); 
  

    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>

    )
}
export const useData = ()=>useContext(DataContext);