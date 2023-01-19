import React from "react";
import rateIcon from "../../../assets/images/icons/star.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCartOnce } from "../../../redux/Slices/cartSlice";

const SimilarProducts = ({ data }) => {
  let dispatch = useDispatch();
  let {
    id,
    title,
    price,
    description,
    category,
    image,
    amount,
    rating: { rate, count },
  } = data;

  return (
    <Link to={`/cart/${id}`}>
      <motion.div onClick={()=> dispatch(addProductToCartOnce(id))}
        whileHover={{ scale: 1.1 }}
        className="flex flex-col items-center ml-4 mt-4 "
      >
        <div className="w-[100px] h-auto flex flex-col ">
          <img
            src={image}
            alt="product"
            className=" h-[180px] w-[150px] object-contain"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <h2 className="font-[400] text-[12px] w-[170px] h-[50px] mb-2 text-left">
            {title}
          </h2>
          <div className="flex mt-2">
            <p className=" bg-green-700 inline-flex items-center justify-center text-white ">
              {rate} <img src={rateIcon} alt="star" />
            </p>
            <p className="ml-2 text-gray-400 font-semibold">{count} </p>
          </div>
          <div className="flex items-baseline">
            <h1 className="text-black text-[15px] font-semibold ">
              ₹ {price * 83}
            </h1>
            <h1 className="ml-3 text-[15px] text-gray-500 ">
              <s>₹{Math.floor(0.86 * (price * 83)).toString()}</s>
            </h1>
            <h1 className="ml-3 text-[15px] text-green-700 font-semibold">
              14% off
            </h1>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default SimilarProducts;
