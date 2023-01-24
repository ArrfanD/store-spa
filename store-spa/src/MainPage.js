import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import ProductPage from "./components/ProductPage/ProductPage";
import Register from "./components/Register/Register";

const MainPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/cart/:id" element={<Cart />} />
      <Route path="/register" element={<Register />}/>
    </Routes>
  );
};

export default MainPage;
