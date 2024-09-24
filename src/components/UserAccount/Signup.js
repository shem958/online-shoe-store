import React from "react";
import "./UserAccount.css";

function Signup() {
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit" className="signup-submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
