import { FC } from "react";
import "../../assets/css/productCard.css";
import { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
import { AdvancedImage } from "@cloudinary/react";

import Product from "../../constants/productInterface";

const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;


interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const image = new CloudinaryImage(product.url, {
    cloudName: cloudinaryCloudName,
  });

  return (
    <div className="productCard">
      <div className="id">{product.id}</div>
      <div className="image">
        <AdvancedImage cldImg={image} />
      </div>
      <div className="price">{product.price}</div>
      <div className="description">{product.description}</div>
      <div className="collection">{product.collection}</div>
      <div className="add-to-cart">
        <button>Add to Cart</button>
      </div>
      <div className="buy-now">
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
