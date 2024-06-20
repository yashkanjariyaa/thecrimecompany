import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/imageScroller.css";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";

interface ImageScrollerProps {
  images: string[];
  onImageClick: (image: string) => void;
  title: string;
}
// will update the component to input a json file with headings and names
const ImageScroller: React.FC<ImageScrollerProps> = ({
  images,
  onImageClick,
  title,
}) => {
  return (
    <div className="image-scroller-container">
      <div className="title">{title}</div>
      <div className="image-scroller">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="scroll-image"
            onClick={() => onImageClick(image)}
          />
        ))}
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
