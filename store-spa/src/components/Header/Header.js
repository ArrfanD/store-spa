import React from "react";
import BlissCartLogo from "../../assets/images/blisscart-logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { isLogin } from "../../redux/Slices/loginSlice";

const Header = () => {
  let dispatch = useDispatch();

  return (
    <div className="flex flex-row bg-[#2874f0] justify-evenly items-center h-[65px] drop-shadow-xl">
      <NavLink to="/">
        <img src={BlissCartLogo} alt="logo" className="w-[110px] h-auto m-4" />
      </NavLink>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="cart w-auto p-2 inline-flex items-center shadow-yellow-300  h-8 text-center rounded-md text-white font-bold"
      >
        BECOME A SELLER
      </motion.button>

      <motion.button
        onClick={() => dispatch(isLogin(true))}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="cart w-[100px]   shadow-yellow-300 h-8 text-center rounded-md text-white font-bold"
      >
        LOGIN
      </motion.button>

      <NavLink to="/cart">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="cart w-[100px]   shadow-yellow-300 h-8 text-center rounded-md text-white font-bold"
        >
          CART
        </motion.button>
      </NavLink>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="cart w-auto p-2 inline-flex items-center shadow-yellow-300  h-8 text-center rounded-md text-white font-bold"
      >
        MY PROFILE
      </motion.button>
    </div>
  );
};

export default Header;
