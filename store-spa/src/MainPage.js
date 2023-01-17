import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

const MainPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainPage;
