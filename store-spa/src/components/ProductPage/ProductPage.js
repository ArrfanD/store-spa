import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../../assets/images/icons/cart.svg";
import buyNowIcon from "../../assets/images/icons/buy-now.svg";
import rateIcon from "../../assets/images/icons/star.svg";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import { addProductToCartOnce } from "../../redux/Slices/cartSlice";
import { Link } from "react-router-dom";

const ProductPage = () => {
  let dispatch = useDispatch()
  let {
    cart: { product, selectedProduct },
  } = useSelector((state) => state);
  const sortedProduct = product.filter((x) => x.id === selectedProduct);

  let {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
    amount,
  } = sortedProduct[0];
  const SimilarProductList = product.filter((x) => x.category === category);
  console.log("ID ID ID ID ID ID ", id);
  // function handleAddSingleProductToCart (id) {
  //   dispatch(addProductToCartOnce(id))
    
  // }

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-[2400px] h-auto flex flex-col items-center my-[50px] ">
          <img
            src={image}
            alt="product"
            className="w-[370px] object-contain mx-auto h-[400px] border-gray-100 px-0 py-10 border-2 "
          />
          <div className="flex gap-6 mt-3">
            <Link to={`/cart/${id}`}>
            <button onClick={()=> dispatch(addProductToCartOnce(id))} className="w-[170px] bg-[#ff9f00] h-[47px] text-white font-semibold inline-flex items-center justify-center ">
              <img src={CartIcon} alt="cart" /> ADD TO CART
            </button>
            </Link>

            <button className="w-[170px] bg-[#fb641b] h-[47px] text-white font-semibold inline-flex items-center justify-center ">
              <img src={buyNowIcon} alt="buynow" /> BUY NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start w-[4200px] pl-6 mr-10 my-[50px] border-gray-100 px-0 py-10 border-2">
          <h2 className="font-[400]">{title}</h2>
          <div className="flex mt-2">
            <p className="w-[60px] h[8px] bg-green-700 inline-flex items-center justify-center text-white ">
              {rate} <img src={rateIcon} alt="star" />
            </p>
            <p className="ml-2 text-gray-400 font-semibold">
              {count} Ratings and Many Reviews
            </p>
          </div>
          <h1 className="mt-3 text-green-700 font-semibold">Special Price</h1>
          <div className="flex items-baseline">
            <h1 className="text-black font-semibold text-[25px]">
              ₹ {price * 83}
            </h1>
            <h1 className="ml-3 text-gray-500 ">
              <s>₹{Math.floor(0.86 * (price * 83)).toString()}</s>
            </h1>
            <h1 className="ml-3 text-green-700 font-semibold">14% off</h1>
          </div>
          <div className="flex gap-6 mt-6">
            <p>Description</p>
            <p className="text-left">{description}</p>
          </div>
        </div>
      </div>
      <div className=" border-gray-100 px-0 py-10 border-2 ml-10 pt-0">
        <h1 className="text-black font-semibold text-[20px] text-left ml-4 mt-4 mb-0">
          Similar Products
        </h1>
        <div className="flex gap-5">
          {SimilarProductList.map((x) => (
            <SimilarProducts data={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
