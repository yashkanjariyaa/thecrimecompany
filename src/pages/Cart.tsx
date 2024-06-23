import { useEffect, useState } from "react";
import Product from "../constants/productInterface"; // Adjust the path according to your project structure

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cartProducts");
    if (storedProducts) {
      const parsedProducts: Product[] = JSON.parse(storedProducts);
      setProducts(parsedProducts);
      calculateTotalPrice(parsedProducts);
    }
  }, []);

  const calculateTotalPrice = (products: Product[]) => {
    const total = products.reduce((sum, product) => {
      const price = product.discountBool
        ? product.discountPrice
        : product.price;
      return sum + price;
    }, 0);
    setTotalPrice(total);
  };

  const handleBuyNow = () => {
    // Handle the buy now logic here
    alert("Proceeding to checkout");
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {products.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.url} alt={product.name} width="50" />
              <p>{product.name}</p>
              <p>{product.color}</p>
              <p>{product.printType}</p>
              <p>{product.description}</p>
              <p>{product.collection}</p>
              <p>
                Price: $
                {product.discountBool ? product.discountPrice : product.price}
              </p>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      {products.length > 0 && <button onClick={handleBuyNow}>Buy Now</button>}
    </div>
  );
};

export default Cart;
