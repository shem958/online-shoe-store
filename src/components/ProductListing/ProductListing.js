import React, { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import "./ProductListing.css";

function ProductListing() {
  const { products, loading, error } = useProducts();
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-listing">
      <h2>Shop All Shoes</h2>
      <input
        type="text"
        placeholder="Search shoes..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`} className="view-details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
