import { useEffect, useState } from "react";
import products from "../api/products";
import ProductGrid from "../components/shop/ProductGrid";

const Shop = () => {
  const [productsArray, setProductsArray] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await products.getProducts(14);
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
    <section className="shop">
      <div className="strip"></div>
      <ProductGrid products={productsArray} />
    </section>
  );
};

export default Shop;
