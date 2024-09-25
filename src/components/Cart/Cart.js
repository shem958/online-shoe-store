import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Running Shoe",
      price: 5000, // Price in KES
      quantity: 1,
      image: "/path/to/shoe1.jpg",
    },
  ]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Price: KES {item.price.toLocaleString()}</p>
              <p>
                Quantity:
                <button onClick={() => handleQuantityChange(item.id, -1)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </button>
              </p>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: KES {total.toLocaleString()}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
export default Cart;
