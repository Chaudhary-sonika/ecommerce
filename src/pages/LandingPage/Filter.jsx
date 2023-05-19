 import "./Filter.css";
export const Filter = ()=>{
    return(
        <div>
          
        <div className="HomeDiv">
          <div className="priceDiv">
            <h3>PRICE</h3>
            <label><input type="radio" />High to Low</label>
            <label><input type="radio" />Low to High  </label>
          </div>
          <div>
            <h3>PRICE RANGE</h3>
            <input type="range" min="500" max="200000"/>
          </div>
          <div className="categoryDiv">
            <h3>CATEGORIES</h3>
            <label><input type="checkbox"/>AC</label>
            <label><input type="checkbox"/>Refrigerator</label>
            <label><input type="checkbox"/>Microwave</label>
            <label><input type="checkbox"/>Washing Machine</label>
            <label><input type="checkbox"/>LED/TV</label>
            <label><input type="checkbox"/>Air Purifier</label>
            <label><input type="checkbox"/>Smart Watch</label>
            <label><input type="checkbox"/>Mobile</label>
            <label><input type="checkbox"/>Laptop</label>
            
          </div>
          <div className="ratingDiv">
            <h3>RATINGS</h3>
            <label><input type="radio"/>4 Star & above</label>
            <label><input type="radio"/>3 Star & above</label>
            <label><input type="radio"/>2 Star & above</label>
          </div>
        </div>
    </div>
    )
}