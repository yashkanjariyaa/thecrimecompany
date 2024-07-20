import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/home/Hero";
import Carousel from "../components/home/CarouselHome";
import ImageScroller from "../components/ImageScroller";
import ToAbout from "../components/home/ToAbout";
import Culture from "../components/home/Culture";
import products from "../api/products";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";

const Home = () => {
  const [productsArray, setProductsArray] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const images = [img1, img2, img3];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await products.getProducts(7);
        setProductsArray(data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="home">
      <Hero />
      <ImageScroller
        products={productsArray}
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
