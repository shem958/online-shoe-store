import React, { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    shippingAddress: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here or call an API to process the order
    console.log("Order placed", formData);
    alert("Order placed successfully!");
  };
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Shipping Address</label>
          <input
            type="text"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment information</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            placeholder="Card Number"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="checkout-submit-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
