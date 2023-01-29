import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHeader from "../../assets/images/home-header3.jpg";
import ItemCard from "./ItemCard/ItemCard";
import { motion, useScroll } from "framer-motion";
import {
  addProductToCart,
  setInitialState,
} from "../../redux/Slices/cartSlice";
import {
  isLogin,
  regBoolean,
  alreadyRegistered,
  userDashboardModal,
  dashboardSelectedUser,
  fetchUserList,
} from "../../redux/Slices/loginSlice";

const Home = () => {
  let dispatch = useDispatch();
  const { scrollYProgress } = useScroll();

  let dataFetcher = async () => {
    let response = await axios("http://localhost:3000/posts");
    const apiResp = response?.data;
    dispatch(setInitialState(apiResp));
  };

  let userListFetcher = async () => {
    const response = await axios("http://localhost:3000/profile").catch((err) =>
      console.log("error while fetching user list", err)
    );
    dispatch(fetchUserList(response.data))
  };

  let {
    cart: { product, quantity }, login: {dataArray}
  } = useSelector((state) => state);

  useEffect(() => {
    dataFetcher();
    userListFetcher();
    dispatch(isLogin(false));
    dispatch(regBoolean(false));
    dispatch(alreadyRegistered(false));
    dispatch(userDashboardModal(false));
    dispatch(dashboardSelectedUser(0));
  }, []);

  let cartProductSender = (value) => {
    const productSentToCart = product.filter((x) => x.id === value);
    dispatch(addProductToCart(productSentToCart));
  };

  const womensClothing = product?.filter(
    (x) => x.category === "women's clothing"
  );

  return (
    <div className="relative ">
      <motion.div
        className="w-full fixed h-2 origin-left bg-red-600 top-0 left-0 z-10"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <img src={HomeHeader} alt="header" />
      <div className="absolute top-[210px] w-full h-auto flex flex-col items-center">
        <div className="w-[96%] drop-shadow-2xl bg-orange-100 flex flex-wrap">
          {womensClothing.map((x) => (
            <ItemCard data={x} func={cartProductSender} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
