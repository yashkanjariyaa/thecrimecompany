// ProductGrid.tsx
import { FC, useState } from "react";
import "../../assets/css/productGrid.css";
import { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
import { AdvancedImage } from "@cloudinary/react";

import Product from "../../constants/productInterface";
import Modal from "../../common/Modal";
import ProductCard from "./ProductCard";

const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

interface ProductGridParams {
  products: Product[];
}

const ProductGrid: FC<ProductGridParams> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="productGridContainer">
      <div className="strip">
        <div>STREETWEAR</div>
        <div>ETHNIC</div>
        <div>INDO WESTERN</div>
        <div>CASUAL</div>
      </div>
      <div className="productGrid">
        <div className="grid">
          {products &&
            products.map((product) => {
              const img = new CloudinaryImage(product.url, {
                cloudName: cloudinaryCloudName,
              });
              const productItemStyle =
                product.color == "white"
                  ? { background: "#000", color: "#fff" }
                  : { background: "#fff", color: "#000" };
              return (
                <div
                  key={product.id}
                  className="productItem"
                  style={productItemStyle}
                  onClick={() => handleProductClick(product)}
                >
                  <AdvancedImage cldImg={img} />
                  <div className="name">{product.name}</div>
                  {product.discountBool ? (
                    <div>
                      <span className="originalPrice">{product.price}</span>{" "}
                      <span className="discountPrice">
                        {product.discountPrice}
                      </span>
                    </div>
                  ) : (
                    <p>{product.price}₹</p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      <div className="strip">
        <div>STREETWEAR</div>
        <div>ETHNIC</div>
        <div>INDO WESTERN</div>
        <div>CASUAL</div>
      </div>
      {selectedProduct && (
        <Modal show={isModalOpen} onClose={handleCloseModal}>
          <ProductCard product={selectedProduct} />
        </Modal>
      )}
    </div>
  );
};

export default ProductGrid;
