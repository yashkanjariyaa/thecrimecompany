import { useState, useEffect, FC } from "react";
import "../../assets/css/carouselHome.css";
/*Typescript interface for props*/
interface CarouselProps {
  images: string[];
  interval?:number;
}

const CarouselHome: FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const switchSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(switchSlide);
  }, [images.length, interval]);

  return (
    <div className="carousel">
      <div className="text">HIPHOP COLLECTION</div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default CarouselHome;
