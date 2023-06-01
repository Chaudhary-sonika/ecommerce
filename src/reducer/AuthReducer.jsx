export const AuthReducer = (authState, action)=>{
switch(action.type){
    case "setLogin":
        return {...authState, isLoggedIn:action.payload}
    case "setUser":
        return {...authState, User:action.payload};
    case "setToken":
        return {...authState, token:action.payload};
        
     default:
        return authState;   
}  

}