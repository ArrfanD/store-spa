import React from "react";
import upArrow from "../../../assets/images/buttons/arrow-up-line.png";
import downArrow from "../../../assets/images/buttons/arrow-down-line.png";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { increaseAmount, decreaseAmount } from '../../../redux/Slices/cartSlice'

const ItemCard = ({
  data: {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
    amount,
  },
  func,
}) => {
  let dispatch = useDispatch();
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex drop-shadow-2xl items-center content-center mx-auto"
    >
      <div className="flex drop-shadow-2xl bg-white w-[530px] my-10 h-[300px] p-6 rounded-[3px]">
        <img
          src={image}
          alt="image"
          className="w-[140px] ml-1 mr-5 h-auto object-contain shadow-purple-300"
        />
        <div className="flex flex-col content-evenly items-center">
          <h1 className="w-[300px]">{title}</h1>
          <p className="text-[10px] w-[300px] mt-4 h-[200px] overflow-y-auto overflow-x-hidden">
            {description}
          </p>
          <h2 className="mt-2">Rating : {rate}</h2>
          <h3 className="mb-6">No of Ratings : {count}</h3>
          <div className="flex items-center h-6 content-between m-0">
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => func(id)}
              className="mr-6 w-[100px] drop-shadow-2xl rounded-[4px] bg-orange-100 h-[25px]"
            >
              Add to Cart
            </motion.button>
            <div className={`${amount > 0 ? "visible" : "hidden"}`}>
              <img src={upArrow} onClick={()=> dispatch(increaseAmount(id))} alt="up" /> <img onClick={()=> dispatch(decreaseAmount(id))} src={downArrow} alt="down" />
            </div>
            <h1  className={`${amount > 0 ? "visible ml-4" : "hidden ml-4"}`}>{amount}</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCard;
