import axios from "axios";
import { logindata } from "../../redux/Slices/loginSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHeader from "../../assets/images/home-header3.jpg";
import ItemCard from "./ItemCard/ItemCard";

const Home = () => {
  let dispatch = useDispatch();
  let {
    login: { dataArray },
  } = useSelector((state) => state);
  console.log(
    "the data taken from state here in the main page component",
    dataArray
  );

  let dataFetcher = async () => {
    let response = await axios("http://localhost:3000/posts");
    const dataArray = response?.data;
    dispatch(logindata(dataArray));
  };

  const womensClothing = dataArray?.filter(
    (x) => x.category === "women's clothing"
  );

  useEffect(() => {
    dataFetcher();
  }, []);

  return (
    <div className="relative">
      <img src={HomeHeader} alt="header" />
      <div className="absolute top-[210px] w-full h-auto flex flex-col items-center">
        <div className="w-[96%] drop-shadow-2xl bg-orange-100 flex flex-wrap">
          {womensClothing.map((x) => (
            <ItemCard data={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
