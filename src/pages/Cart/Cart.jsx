import { useCart } from "../../Contexts/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { PriceCard } from "./PriceCard";
import "./Cart.css";
export const Cart = () => {
  const { cartItem, QuantityInCart, RemoveFromCart } = useCart();
  console.log(cartItem, "Cart");
  return (
    <>
      <h1>Items in your cart:</h1>
      <div className="cartMainDiv">
        <div>
          {cartItem?.map((item) => {
            const { _id, name, price, qty, imageUrl } = item;
            return (
              <div key={_id} className="CartProduct">
                <div className="CartImageProd">
                  <img
                    src={imageUrl}
                    alt="CartProductImage"
                    style={{ width: "10rem", height: "10rem" }}
                  />
                </div>
                <div className="cartProdDetail">
                  <div className="cartProductRemove">
                    <h5 className="cartProdName">{name}</h5>
                    <button
                      onClick={() => RemoveFromCart(_id)}
                      className="removeBtn"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                  <h4>Price: Rs.{price}</h4>
                  <div className="cartQty">
                    <h4>Quantity: </h4>
                    <button
                      onClick={() => QuantityInCart(_id, "decrement")}
                      className="qtyBtn"
                      disabled={qty<2}
                    >
                      -
                    </button>
                    <h3>{qty}</h3>
                    <button
                      onClick={() => QuantityInCart(_id, "increment")}
                      className="qtyBtn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <PriceCard />
        </div>
      </div>
    </>
  );
};
