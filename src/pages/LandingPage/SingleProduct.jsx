import "./SingleProduct.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useCart } from "../../Contexts/CartContext";
import { toast } from "react-toastify";
import { useAuth } from "../../Contexts/AuthContex";
import { useWishlist } from "../../Contexts/WishlistContext";

export const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState([]);
  const { AddToCart, cartItem } = useCart();
  const { authState } = useAuth();
  const { wishlistItem, AddToWishlist } = useWishlist();
  const checkItemInCart = (data, id) => {
    return data?.find((item) => item._id === id) ? true : false;
  };
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`);

      const productInfo = await response.json();
      //  console.log(productInfo, "Shashi", productInfo?.products);
      setProductDetail(productInfo?.product);
    } catch (e) {
      console.error(e);
    }
  };
  // const singleItem = productData.find((item)=>item._id === Number(productId));
  // console.log(singleItem);
  const {
    _id,
    name,
    category,
    rating,
    price,
    mrp,
    imageUrl,
    details,
    isBestSeller,
  } = productDetail;
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="singleAppBody">
      <div className="singleDiv">
        <h3>{name}</h3>

        <div className="singleProductDiv">
          <div className="itemDiv">
            <img className="singleImg" src={imageUrl} alt="productImage" />
          </div>
          <div className="singleItemDiv">
            <div className="singleCatName">
              <p>Category: {category}</p>
              {isBestSeller && <p className="bestSellerDiv">BestSeller</p>}
            </div>
            <div className="SingleDetailDiv">
              <div>
                <p className="siglePricePara">Price: ₹{price}</p>
                <p className="singleMrpPara">(MRP: ₹{mrp})</p>
              </div>
              <p className="singleRatingPara">Rating: {rating}⭐</p>
              <div>
                <h4>Description:-</h4>
                {details?.map((item) => (
                  <li className="listDiv">{item}</li>
                ))}
              </div>

              {checkItemInCart(cartItem, _id) ? (
                <button
                  className="singlePageBTN"
                  onClick={() => navigate("/cart")}
                >
                  Go To Cart
                </button>
              ) : (
                <button
                  className="singlePageBTN"
                  onClick={() => {
                    if (authState?.isLoggedIn) {
                      if (checkItemInCart(cartItem, _id)) {
                        navigate("/cart");
                      } else {
                        AddToCart(productDetail);
                      }
                    } else {
                      toast.warning("Please login to proceed!");
                      navigate("/login");
                    }
                  }}
                >
                  Add to Cart
                </button>
              )}
              <button
                className="singlePageBTN"
                onClick={() => {
                  if (authState?.isLoggedIn) {
                    if (checkItemInCart(wishlistItem, _id)) {
                      navigate("/wishlist");
                    } else {
                      AddToWishlist(productDetail);
                    }
                  } else {
                    toast.warning("Please login to proceed!");
                    navigate("/login");
                  }
                }}
              >
                {checkItemInCart(wishlistItem, _id)
                  ? "Wishlisted"
                  : "Add To Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
