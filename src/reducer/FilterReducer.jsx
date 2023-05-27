

export const FilterReducer = (filterState, action)=>{
  switch (action.type){
    case "category":
        console.log(action.payload);
        return filterState.category.includes(action.payload) ? {...filterState, category:[...filterState.category].filter((item)=>item!==action.payload),}:{...filterState, category:[...filterState.category, action.payload] }
       
     case "filterByCategory":
         return filterState.productByCategory.includes(action.payload) ? {...filterState, productByCategory: [...filterState.productByCategory].filter((item)=>item!==action.payload),}:{...filterState, productByCategory:[...filterState.productByCategory, action.payload]}

     case "filterByPrice":
       return {...filterState, sort:action.payload};
     
     case "priceRangeFilter":
        return {...filterState, price:action.payload};  

     case "ratingFilter":
        return {...filterState, rating:action.payload};   
        
  }
}