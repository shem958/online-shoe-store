import { useState, useEffect } from "react";
import productsData from "../data/products";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an API call
    const fetchProducts = () => {
      try {
        // Simulate delay for loading effect
        setTimeout(() => {
          setProducts(productsData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
