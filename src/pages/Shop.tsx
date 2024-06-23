import products from "../constants/productsObject.json";
import ProductGrid from "../components/shop/ProductGrid";

const Shop = () => {
  return (
    <section className="shop">
      <div className="strip"></div>
      <ProductGrid products={products} />
    </section>
  );
};

export default Shop;
