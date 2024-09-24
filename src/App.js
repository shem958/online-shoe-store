import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import ProductListing from "./components/ProductListing/ProductListing";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ProductListing} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/account/login" component={Login} />
          <Route path="/account/signup" component={Signup} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
