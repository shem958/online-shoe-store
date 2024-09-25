import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Shoe Haven</Link>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "Close" : "Menu"}
        </button>
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
        <form className="search-form">
          <input type="text" placeholder="Search..." aria-label="Search" />
          <button type="submit">🔍</button>
        </form>
      </nav>
      <div className="header-icons">
        <Link to="/cart" aria-label="Cart">
          <i className="cart-icon">🛒</i>
        </Link>
        <Link to="/account" aria-label="User Account">
          <i className="user-icon">👤</i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
