import { useEffect, useState } from "react";
import "../assets/css/cart.css";
import ProductToCart from "../types/ProductToCartInterface";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen/index";
import { useUser } from "../context/UserContext";
import DisplayUserData from "../components/DisplayUserData";

const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const Cart = () => {
  const [products, setProducts] = useState<ProductToCart[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [userExists, setUserExists] = useState<boolean>(false);

  const { user } = useUser();

  useEffect(() => {
    const storedProducts = localStorage.getItem("cartProducts");
    if (storedProducts) {
      const parsedProducts: ProductToCart[] = JSON.parse(storedProducts);
      setProducts(parsedProducts);
      calculateTotalPrice(parsedProducts);
    }
  }, []);

  const calculateTotalPrice = (products: ProductToCart[]) => {
    const total = products.reduce((sum, product) => {
      const price = product.discountBool
        ? product.discountPrice
        : product.price;
      return sum + price * product.quantity;
    }, 0);
    setTotalPrice(total);
  };

  const handleSizeChange = (id: number, newSize: string) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, size: newSize } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    calculateTotalPrice(updatedProducts);
  };

  const handleRemoveProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    calculateTotalPrice(updatedProducts);
  };

  useEffect(() => {
    setUserExists(user ? true : false);
  });

  const handleBuyNow = () => {
    alert("Proceeding to checkout");
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
          {products.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <div className="product-list">
              {products.map((product) => {
                const img = new CloudinaryImage(product.url, {
                  cloudName: cloudinaryCloudName,
                });
                return (
                  <div className="product-item" key={product.id}>
                    <div className="product-image">
                      <AdvancedImage cldImg={img} />
                    </div>
                    <div className="info-col">
                      <div className="info">
                        <div className="name">{product.name}</div>
                        <button
                          className="remove-button"
                          onClick={() => handleRemoveProduct(product.id)}
                        >
                          &times;
                        </button>
                        <div className="info-section">
                          <div className="label">Description</div>
                          <div className="description">
                            {product.description}
                          </div>
                        </div>
                        <div className="info-section">
                          <div className="label">Collection</div>
                          <div className="collection">{product.collection}</div>
                        </div>
                        <div className="info-section">
                          <div className="label">Size</div>
                          <select
                            className="size-select"
                            value={product.size}
                            onChange={(e) =>
                              handleSizeChange(product.id, e.target.value)
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
                            value={product.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                product.id,
                                Number(e.target.value)
                              )
                            }
                            min="1"
                          />
                        </div>
                      </div>
                      <div className="product-price">
                        Price: ₹
                        {product.discountBool
                          ? product.discountPrice
                          : product.price}
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
          {products.length > 0 && (
            <button className="buy-now-button" onClick={handleBuyNow}>
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
