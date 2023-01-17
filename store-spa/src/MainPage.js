import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Login from './components/Login/Login'
import Error from "./components/Error/Error";


const MainPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />}/>
    </Routes>
  );
};

export default MainPage;
