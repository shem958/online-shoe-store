import React from "react";
import "./ProductDetail.css";

function ProductDetail({ match }) {
  const productId = match.params.id;
  const product = {
    id: 1,
    name: "Running Shoe",
    description:
      "High quality running shoe designed for maximum comfort and performance.",
    price: "$50",
    image: "/path/to/shoe1.jpg",
    //Add other product details
  };

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
