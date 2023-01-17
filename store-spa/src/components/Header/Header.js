import React from "react";
import BlissCartLogo from "../../assets/images/blisscart-logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row bg-white justify-evenly items-center h-[65px] drop-shadow-xl">
      <NavLink to="/">
        <img src={BlissCartLogo} alt="logo" className="w-[140px] m-4" />
      </NavLink>
      <button className="cart w-auto p-2 inline-flex items-center shadow-yellow-300 drop-shadow-lg  h-8 text-center bg-gray-400 rounded-md text-white font-bold">
        Become a Seller
      </button>
      <NavLink to='/login'>
        <button className="cart w-[100px]   shadow-yellow-300 drop-shadow-lg h-8 text-center bg-gray-400 rounded-md text-white font-bold">
          Login
        </button>
      </NavLink>
      <NavLink to="/cart">
        <button className="cart w-[100px]   shadow-yellow-300 drop-shadow-lg h-8 text-center bg-gray-400 rounded-md text-white font-bold">
          CART
        </button>
      </NavLink>
      <button className="cart w-auto p-2 inline-flex items-center shadow-yellow-300 drop-shadow-lg  h-8 text-center bg-gray-400 rounded-md text-white font-bold">
        My Profile
      </button>
    </div>
  );
};

export default Header;
