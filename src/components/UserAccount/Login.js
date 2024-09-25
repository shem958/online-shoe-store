import React from "react";
import "./UserAccount.css";

function Login() {
  return (
    <div className="user-account-page">
      <h2 className="user-account-title">Login</h2>
      <form className="user-account-form">
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
          Login
        </button>
        <p className="prompt">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
