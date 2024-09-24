import React from "react";
import "./Cart.css";

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Running Shoe",
      price: "$50",
      quantity: 1,
      image: "/path/to/shoe1.jpg",
    },
    // Add more cart items
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.price.slice(1)),
    0
  );
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
export default Cart;
