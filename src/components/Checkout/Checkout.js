import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Shipping Address</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Payment information</label>
          <input type="text" placeholder="Card Number" required />
        </div>
        <button type="submit" className="checkout-submit-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
