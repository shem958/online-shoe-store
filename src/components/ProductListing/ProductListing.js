import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductListing.css";

const products = [
  //Example product data
  { id: 1, name: "Running Shoe", price: "$50", image: "/path/to/shoe1.jpg" },
  { id: 2, name: "Basketball Shoe", price: "$75", image: "/path/to/shoe2.jpg" },
  // Add more products
];

function ProductListing() {
  const [filter, setFilter] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

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
            <p>{product.price}</p>
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
