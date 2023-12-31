import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./CheckOut";
import { CartProvider } from "./CartContext";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
