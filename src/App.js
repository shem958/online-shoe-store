import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Change Switch to Routes
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import ProductListing from "./components/ProductListing/ProductListing";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/UserAccount/Login";
import Signup from "./components/UserAccount/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          {" "}
          {/* Changed from Switch to Routes */}
          <Route path="/" element={<HomePage />} />{" "}
          {/* Changed from component to element */}
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
