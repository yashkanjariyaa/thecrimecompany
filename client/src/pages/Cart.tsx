import { useEffect, useState } from "react";
import "../assets/css/cart.css";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen/index";
import useUser from "../context/UserContext";
import DisplayUserData from "../components/DisplayUserData";
import { useNavigate } from "react-router-dom";

const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [userExists, setUserExists] = useState<boolean>(false);
  const navigate = useNavigate();
  const { userEmail } = useUser();

  useEffect(() => {
    const storedProducts = localStorage.getItem("cartProducts");
    if (storedProducts) {
      const parsedProducts: CartItem[] = JSON.parse(storedProducts);
      setItems(parsedProducts);
      calculateTotalPrice(parsedProducts);
    }
  }, []);

  const calculateTotalPrice = (items: CartItem[]) => {
    const total = items.reduce((sum, item) => {
      const price = item.product.discountBool
        ? item.product.discountPrice
        : item.product.price;
      return sum + price * item.quantity;
    }, 0);
    setTotalPrice(total);
  };

  const handleSizeChange = (id: number, newSize: string) => {
    const updatedProducts = items.map((item) =>
      item.product.productId === id ? { ...item, size: newSize } : item
    );
    setItems(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedProducts = items.map((item) =>
      item.product.productId === id ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    calculateTotalPrice(updatedProducts);
  };

  const handleRemoveProduct = (id: number) => {
    const updatedProducts = items.filter(
      (item) => item.product.productId !== id
    );
    setItems(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    calculateTotalPrice(updatedProducts);
  };

  useEffect(() => {
    setUserExists(userEmail ? true : false);
  });

  const handleCheckout = () => {
    alert("Proceeding to checkout");
    navigate("/checkout");
  };

  return (
    <div className="cart">
      <div className="cart-title">Shopping Cart</div>
      <div className="strip">
        <div>STREETWEAR</div>
        <div>ETHNIC</div>
        <div>INDO WESTERN</div>
        <div>CASUAL</div>
      </div>
      <div className="cart-container">
        <div className="left-container">
          {items.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <div className="product-list">
              {items.map((item, index) => {
                const img = new CloudinaryImage(item.product.url, {
                  cloudName: cloudinaryCloudName,
                });
                return (
                  <div className="product-item" key={index}>
                    <div className="product-image">
                      <AdvancedImage cldImg={img} />
                    </div>
                    <div className="info-col">
                      <div className="info">
                        <div className="name">{item.product.name}</div>
                        <button
                          className="remove-button"
                          onClick={() =>
                            handleRemoveProduct(item.product.productId)
                          }
                        >
                          &times;
                        </button>
                        <div className="info-section">
                          <div className="label">Description</div>
                          <div className="description">
                            {item.product.description}
                          </div>
                        </div>
                        <div className="info-section">
                          <div className="label">Collection</div>
                          <div className="collection">
                            {item.product.collection}
                          </div>
                        </div>
                        <div className="info-section">
                          <div className="label">Size</div>
                          <select
                            className="size-select"
                            value={item.size}
                            onChange={(e) =>
                              handleSizeChange(
                                item.product.productId,
                                e.target.value
                              )
                            }
                          >
                            <option value="" disabled>
                              Select Size
                            </option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                          </select>
                        </div>
                        <div className="info-section">
                          <div className="label">Quantity</div>
                          <input
                            type="number"
                            className="quantity-select"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.product.productId,
                                Number(e.target.value)
                              )
                            }
                            min="1"
                          />
                        </div>
                      </div>
                      <div className="product-price">
                        Price: ₹
                        {item.product.discountBool
                          ? item.product.discountPrice
                          : item.product.price}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="right-container">
          <div className="total-price">
            Total Price: ₹{totalPrice.toFixed(2)}
          </div>
          {items.length > 0 && (
            <button className="buy-now-button" onClick={handleCheckout}>
              Checkout
            </button>
          )}
          {userExists ? <div className="user-info"></div> : <></>}
          <DisplayUserData />
        </div>
      </div>
      <div className="strip">
        <div>STREETWEAR</div>
        <div>ETHNIC</div>
        <div>INDO WESTERN</div>
        <div>CASUAL</div>
      </div>
    </div>
  );
};

export default Cart;
