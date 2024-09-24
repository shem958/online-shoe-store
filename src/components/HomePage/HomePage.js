import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to ShoeStore</h1>
        <p>Find the best shoes for every occasion</p>
        <Link to="/shop" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Example product card */}
          <div className="product-card">
            <img src="/path/to/shoe-image.jpg" alt="Shoe" />
            <h3>Running Shoe</h3>
            <p>$50.00</p>
            <Link to="/product/1" className="view-details-btn">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
