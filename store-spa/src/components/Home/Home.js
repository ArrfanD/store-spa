import axios from "axios";
// import { logindata } from "../../redux/Slices/loginSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHeader from "../../assets/images/home-header3.jpg";
import ItemCard from "./ItemCard/ItemCard";
import { motion, useScroll } from "framer-motion"
import { addProductToCart, setInitialState } from '../../redux/Slices/cartSlice'


const Home = () => {
const { scrollYProgress } = useScroll();

  let dispatch = useDispatch();
  let {
    cart: { product },
  } = useSelector((state) => state);

  let dataFetcher = async () => {
    let response = await axios("http://localhost:3000/posts");
    const apiResp = response?.data;
    dispatch(setInitialState(apiResp));
  };

  let cartProductSender = (value) => {
    const productSentToCart = product.filter(x => x.id === value)
      dispatch(addProductToCart(productSentToCart))
    }

  const womensClothing = product?.filter(
    (x) => x.category === "women's clothing"
  );

    useEffect(() => {
    dataFetcher();
  }, []);

  return (
    <div  className="relative ">
      <motion.div className="w-full fixed h-2 origin-left bg-red-600 top-0 left-0 z-10" style={{ scaleX: scrollYProgress }} ></motion.div>
      <img src={HomeHeader} alt="header" />
      <div className="absolute top-[210px] w-full h-auto flex flex-col items-center">
        <div className="w-[96%] drop-shadow-2xl bg-orange-100 flex flex-wrap">
          {womensClothing.map((x) => (
            <ItemCard data={x} func={cartProductSender}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
