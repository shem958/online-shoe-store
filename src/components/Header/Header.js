import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "./Header.css";
import HavenLogo from "../../assets/icons/Haven.svg"; // Import the SVG file

function Header({ user }) {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={HavenLogo} alt="Haven Logo" className="logo-image" />
          <span className="logo-text">Shoe Haven</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="nav-links">
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

      {/* Header Icons */}
      <div className="header-icons">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <CiSearch className="search-icon" />
        </div>
        <Link to="/cart" className="icon-link">
          <i className="cart-icon">🛒</i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
