 import { useFilter } from "../../Contexts/filterContext";
import "./Filter.css";
export const Filter = ()=>{
  // const CatFilter = [{HomeAppliances:[]},]
  const {filterDispatch, filterState} = useFilter();
    return(
        <div>
          <h2>Filters:</h2>
        <div className="HomeDiv">
          <button onClick={()=>filterDispatch({type: "clearFilter"})}>Clear Filter</button>
          <div className="priceDiv">
            <h3>PRICE</h3>
            <label><input type="radio" name="sort" checked={filterState.sort === "highToLow"} onChange={()=>filterDispatch({type:"filterByPrice", payload:"highToLow"})}/>High to Low</label>
            <label><input type="radio" name="sort" checked={filterState.sort === "lowToHigh"} onChange={()=>filterDispatch({type:"filterByPrice", payload:"lowToHigh"})}/>Low to High  </label>
          </div>
          <div>
            <h3>PRICE RANGE</h3>
            <input type="range" min="500" max="112000" value={filterState.price} onChange={(e)=>filterDispatch({type:"priceRangeFilter", payload:e.target.value})}/>
          </div>
          <div className="categoryDiv">
            <h3>CATEGORIES</h3>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("AC")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"AC"})}/>AC</label>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("Refrigerator")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"Refrigerator"})}/>Refrigerator</label>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("Microwave")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"Microwave"})}/>Microwave</label>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("Washing Machine")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"Washing Machine"})}/>Washing Machine</label>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("LED/TV")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"LED/TV"})}/>LED/TV</label>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("Air Purifier")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"Air Purifier"})}/>Air Purifier</label>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("Smart Watch")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"Smart Watch"})}/>Smart Watch</label>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("Mobile")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"Mobile"})}/>Mobile Phone</label>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("Laptop")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"Laptop"})}/>Laptop</label>
            <label><input type="checkbox" checked={filterState?.productByCategory.includes("Headphone")} onClick={()=>filterDispatch({type:"filterByCategory", payload:"Headphone"})}/>Accessories</label>
          </div>
          <div className="ratingDiv">
            <h3>RATINGS</h3>
            <label><input type="radio" checked={filterState?.rating===4} onChange={()=>filterDispatch({type:"ratingFilter", payload:4})}/>4 Star & above</label>
            <label><input type="radio" checked={filterState?.rating===3} onChange={()=>filterDispatch({type:"ratingFilter", payload:3})}/>3 Star & above</label>
            <label><input type="radio" checked={filterState?.rating===2} onChange={()=>filterDispatch({type:"ratingFilter", payload:2})}/>2 Star & above</label>
          </div>
        </div>
    </div>
    )
}