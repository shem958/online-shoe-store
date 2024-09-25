import React from "react";
import useCart from "../../hooks/useCart";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Items: {getTotalItems()}</h3>
          <h3>Total Price: ${getTotalPrice()}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
