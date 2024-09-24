import React from "react";
import "./UserAccount.css";

function Login() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit" className="login-submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
