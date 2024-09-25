import React from "react";
import "./UserAccount.css";

function Signup() {
  return (
    <div className="user-account-page">
      <h2 className="user-account-title">Create Your Account</h2>
      <form className="user-account-form">
        <div className="form-group">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="user-account-submit-btn">
          Sign Up
        </button>
        <p className="prompt">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
