import Hero from "../components/Hero";
import Carousel from "../components/CarouselHome";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import ImageScroller from "../components/Collections";
import img4 from "../assets/images/1.png";
import img5 from "../assets/images/3-removebg-preview.png";
import img6 from "../assets/images/3.png";
import img7 from "../assets/images/HOT GIRLS HAVE STOMACH ISSUES.png";
import img8 from "../assets/images/Hoodie FREE.png";
import img9 from "../assets/images/ethnic blue.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const images = [img1, img2, img3];
  const collectionImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const navigate = useNavigate();
  return (
    <section className="home">
      <Hero />
      <Carousel images={images} interval={3000} />
      <ImageScroller
        images={collectionImages}
        onImageClick={function (image: string): void {
          navigate("/shop");
        }}
        title="TOP SELLING"
      />
    </section>
  );
};

export default Home;
