import React from "react";
import BlissCartLogo from "../../assets/images/blisscart-logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const Header = () => {

  return (
      <div className="flex flex-row bg-white justify-evenly items-center h-[65px] drop-shadow-xl">
      <NavLink to="/">
        <img src={BlissCartLogo} alt="logo" className="w-[140px] m-4" />
      </NavLink>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8}} className="cart w-auto p-2 inline-flex items-center shadow-yellow-300 drop-shadow-lg  h-8 text-center bg-gray-400 rounded-md text-white font-bold">
        Become a Seller
      </motion.button>
      <NavLink to='/login'>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8}} className="cart w-[100px]   shadow-yellow-300 drop-shadow-lg h-8 text-center bg-gray-400 rounded-md text-white font-bold">
          Login
        </motion.button>
      </NavLink>
      <NavLink to="/cart">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8}} className="cart w-[100px]   shadow-yellow-300 drop-shadow-lg h-8 text-center bg-gray-400 rounded-md text-white font-bold">
          CART
        </motion.button>
      </NavLink>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8}} className="cart w-auto p-2 inline-flex items-center shadow-yellow-300 drop-shadow-lg  h-8 text-center bg-gray-400 rounded-md text-white font-bold">
        My Profile
      </motion.button>
    </div>

    
  );
};

export default Header;
