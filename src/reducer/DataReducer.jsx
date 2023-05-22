

export const DataReducer=(state, action)=>{
        
    switch(action.type){
    case "initial_Product":
     return {
           ...state,
           AllProduct: action.payload,
         };
         
       default:
         return state;
         } 
   }