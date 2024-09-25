import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Shoe Haven</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="header-icons">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <CiSearch className="search-icon" />
        </div>
        <Link to="/cart" className="icon-link">
          <i className="cart-icon">🛒</i>
        </Link>
        <Link to="/account" className="icon-link">
          <i className="user-icon">👤</i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
