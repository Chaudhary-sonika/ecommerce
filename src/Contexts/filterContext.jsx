import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/FilterReducer";
import { useData } from "./contexts";


const FilterContext = createContext(null);

export const FilterProvider = ({children})=>{
    const initialState = {  category: [], productByCategory: [], sort: "", rating: 1, price: 500,} 
    const [filterState, filterDispatch] = useReducer(FilterReducer, initialState);

    const {state:{AllProduct},} = useData();
    let FinalData = [...AllProduct];

    if(filterState?.category?.length>0){
        FinalData = FinalData.filter((item)=>filterState?.category.includes(item.categoryName));
    }
    if(filterState?.productByCategory?.length>0){
        FinalData = FinalData.filter((item)=> filterState?.productByCategory.includes(item.category));
    }
    if(filterState?.sort ==="highToLow"){
        FinalData=[...FinalData].sort((a,b)=>b.price - a.price)
    } else if(filterState?.sort === "lowToHigh"){
        FinalData=[...FinalData].sort((a,b)=>a.price - b.price)
    }
    if(filterState?.price>=500){
        FinalData = FinalData.filter((item)=>item.price>=filterState.price);
    }
    if(filterState?.rating>1){
        FinalData = FinalData.filter((item)=>item.rating>=filterState.rating);
    }

    // const filterHomeCategory = filterState?.category?.length>0 ? AllProduct.filter((item)=>filterState?.category.includes(item.categoryName)):AllProduct;

    // const filterCategoryData = filterState?.productByCategory?.length>0 ? filterHomeCategory.filter((item)=> filterState?.productByCategory.includes(item.category)): filterHomeCategory;

  
    return(
        <FilterContext.Provider value={{filterState, filterDispatch, FinalData}}>
            {children}
        </FilterContext.Provider>
    )
}
export const useFilter =()=> useContext(FilterContext);