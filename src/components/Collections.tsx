import React from "react";
import "../assets/css/imageScroller.css";

interface ImageScrollerProps {
  images: string[];
  onImageClick: (image: string) => void;
  title: string;
}

const ImageScroller: React.FC<ImageScrollerProps> = ({
  images,
  onImageClick,
  title
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
    </div>
  );
};

export default ImageScroller;
