import { FC } from "react";
import "../../assets/css/productCard.css";
import { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
import { AdvancedImage } from "@cloudinary/react";

import Product from "../../constants/productInterface";

const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

interface ProductCardProps {
  product: Product;
  onClose: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onClose }) => {
  const image = new CloudinaryImage(product.url, {
    cloudName: cloudinaryCloudName,
  });

  const addToCart = (product: Product) => {
    const cartProducts = localStorage.getItem("cartProducts");
    let cart: Product[] = cartProducts ? JSON.parse(cartProducts) : [];
    cart.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
    onClose();
  };

  return (
    <div className="productCard">
      <div className="image">
        <AdvancedImage cldImg={image} />
      </div>
      <div className="card-col">
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
