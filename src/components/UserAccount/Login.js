import React from "react";
import "./UserAccount.css";

function Login() {
  return (
    <div className="login-page">
      <h2 className="login-title">Login to Your Account</h2>
      <form className="login-form">
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
        <button type="submit" className="login-submit-btn">
          Login
        </button>
        <p className="signup-prompt">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
