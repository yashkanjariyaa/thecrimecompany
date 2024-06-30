import { useNavigate } from "react-router-dom";
import Hero from "../components/home/Hero";
import Carousel from "../components/home/CarouselHome";
import ImageScroller from "../components/ImageScroller";
import ToAbout from "../components/home/ToAbout";
import Culture from "../components/home/Culture";
import products from "../constants/productsObject.json";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";

const Home = () => {
  const images = [img1, img2, img3];
  const navigate = useNavigate();
  return (
    <section className="home">
      <Hero />
      <ImageScroller
        products={products}
        onImageClick={function (): void {
          navigate("/shop");
        }}
      />
      <Culture />
      <Carousel images={images} interval={3000} />
      <ToAbout />
    </section>
  );
};

export default Home;
