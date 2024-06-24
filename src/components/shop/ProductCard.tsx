import { FC, useState } from "react";
import "../../assets/css/productCard.css";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

import Product from "../../constants/productInterface";
import ProductToCart from "../../constants/productToCart"; // Adjust the path according to your project structure

const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

interface ProductCardProps {
  product: Product;
  onClose: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onClose }) => {
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const image = new CloudinaryImage(product.url, {
    cloudName: cloudinaryCloudName,
  });

  const bgStyle =
    product.color == "white"
      ? { background: "black", color: "white" }
      : { background: "white", color: "black" };

  const addToCart = (product: Product) => {
    if (!size) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const cartProducts = localStorage.getItem("cartProducts");
    let cart: ProductToCart[] = cartProducts ? JSON.parse(cartProducts) : [];
    const productToAdd: ProductToCart = { ...product, size, quantity };
    cart.push(productToAdd);
    localStorage.setItem("cartProducts", JSON.stringify(cart));
    alert(
      `${product.name} (Size: ${size}, Quantity: ${quantity}) added to cart!`
    );
    onClose();
  };

  return (
    <div className="productCard" style={bgStyle}>
      <div className="image">
        <AdvancedImage cldImg={image} />
      </div>
      <div className="card-col">
        <div className="upper-container">
          <div className="id">{product.id}</div>
          <div className="info">
            <div className="name">{product.name}</div>
            <div className="info-section">
              <div className="label">Price</div>
              <div className="price">{product.price}₹</div>
            </div>
            <div className="info-section">
              <div className="label">Description</div>
              <div className="description">{product.description}</div>
            </div>
            <div className="info-section">
              <div className="label">Collection</div>
              <div className="collection">{product.collection}</div>
            </div>
            <div className="info-section">
              <div className="label">Size</div>
              <select
                className="size-select"
                value={size}
                onChange={(e) => setSize(e.target.value)}
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
                className="quantity-select"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
              />
            </div>
          </div>
        </div>

        <div className="action">
          <div className="add-to-cart">
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
          <div className="buy-now">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
