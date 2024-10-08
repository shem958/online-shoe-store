import React from "react";
import "./ProductDetail.css";

function ProductDetail({ match }) {
  const productId = match.params.id; // Get the product ID from the URL
  const product = {
    id: productId,
    name: "Running Shoe",
    description:
      "High quality running shoe designed for maximum comfort and performance.",
    price: "$50",
    image: "/path/to/shoe1.jpg",
    // Add other product details as necessary
  };

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} className="image" />
      </div>
      <div className="product-detail-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <h3 className="product-price">{product.price}</h3>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
