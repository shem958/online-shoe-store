import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Running Shoe",
      price: "$50.00",
      image: "/path/to/shoe-image.jpg",
    },
    {
      id: 2,
      name: "Basketball Shoe",
      price: "$75.00",
      image: "/path/to/basketball-shoe.jpg",
    },
    // Add more products as needed
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Shoe Haven</h1>
        <p>Find the best shoes for every occasion</p>
        <Link to="/shop" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
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
    </div>
  );
}

export default HomePage;
