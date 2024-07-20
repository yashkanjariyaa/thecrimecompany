import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/imageScroller.css";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import { CloudinaryImage } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";

const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

interface ImageScrollerProps {
  products: Product[];
  onImageClick: Function;
}

const ImageScroller: React.FC<ImageScrollerProps> = ({
  products,
  onImageClick,
}) => {
  return (
    <div className="image-scroller-container">
      <div className="image-scroller">
        {products.map((product, index) => {
          const img = new CloudinaryImage(product.url, {
            cloudName: cloudinaryCloudName,
          });
          const imageContainerStyle =
            product.color == "white"
              ? { background: "#000", color: "#fff" }
              : { background: "#fff", color: "#000" };
          return (
            <div
              key={index}
              className="image-container"
              style={imageContainerStyle}
            >
              <AdvancedImage
                key={index}
                cldImg={img}
                className="scroll-image"
                onClick={() => onImageClick()}
              />
            </div>
          );
        })}
      </div>
      <div className="link-container">
        <Link className="link" to="/shop">
          SHOP NOW
          <FontAwesomeIcon className="shop-icon" icon={faArrowCircleRight} />
        </Link>
      </div>
    </div>
  );
};

export default ImageScroller;
