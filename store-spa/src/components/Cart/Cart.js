import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import addIcon from "../../assets/images/buttons/plus.svg";
import subtractIcon from "../../assets/images/buttons/subtract.svg";
import {
  increaseAmount,
  decreaseAmount,
  cartTotal,
} from "../../redux/Slices/cartSlice";
import buyNowIcon from "../../assets/images/icons/buy-now.svg";

const Cart = () => {
  let dispatch = useDispatch();
  let idProduct = useParams();
  let {
    cart: { product, cartPriceTotal, cartQuantityTotal },
  } = useSelector((state) => state);
  let cartProducts = product.filter((x) => x.amount > 0);

  useEffect(() => {
    dispatch(cartTotal(cartProducts));
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col">
      <div className="flex justify-between bg-gray-200">
        <div className="flex flex-col w-[840px] relative bg-gray-200 drop-shadow-md m-6">
          <div className="flex flex-col relative bg-gray-200">
            {!cartProducts.length ? (
              <h1>Sorry but your Cart is Empty</h1>
            ) : (
              cartProducts.map((x) => {
                const { image, title, price, amount, id } = x;
                return (
                  <div className="my-[2px] bg-white flex items-center">
                    <img
                      className="w-[150px] m-5 h-[120px] object-contain"
                      src={image}
                      alt="image"
                    />
                    <div className="flex flex-col justify-start items-start">
                      <h1>{title}</h1>
                      <div className="flex items-baseline mt-3">
                        <h1 className="text-black font-semibold text-[25px]">
                          ₹ {price * 83}
                        </h1>
                        <h1 className="ml-3 text-gray-500 ">
                          <s>₹{Math.floor(0.86 * (price * 83)).toString()}</s>
                        </h1>
                        <h1 className="ml-3 text-green-700 font-semibold">
                          14% off
                        </h1>
                      </div>
                      {/* Add, Substract and Remove from Cart Buttons  */}
                      <div className="flex mt-3 gap-6">
                        <div className="flex items-center justify-start ">
                          <button>
                            <img
                              src={addIcon}
                              alt="add"
                              onClick={() => dispatch(increaseAmount(id))}
                              className="w-7 h-7 p-2 rounded-full border-gray-300 border "
                            />
                          </button>
                          <input
                            type="text"
                            value={amount}
                            className="w-[60px] h-auto border border-gray-300 mx-2 text-center"
                          />
                          <button>
                            <img
                              src={subtractIcon}
                              alt="subtract"
                              onClick={() => dispatch(decreaseAmount(id))}
                              className="w-7 h-7 p-2 rounded-full border-gray-300 border"
                            />
                          </button>
                        </div>
                        <div className="flex justify-between gap-4">
                          <button className="font-semibold">
                            SAVE FOR LATER
                          </button>{" "}
                          <button className="font-semibold">REMOVE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="sticky bottom-0 shadow-[rgba(0,_0,_0,_0.24)_0px_0px_30px] bg-white flex h-auto W-[100%] justify-end">
            <button className="w-[240px] shadow-lg my-5 mr-5 bg-[#fb641b] h-[47px] text-white font-semibold inline-flex items-center justify-center ">
              PLACE ORDER
            </button>
          </div>
        </div>

        <div className="w-[400px] flex flex-col h-full justify-start bg-gray-200 drop-shadow-2xl mx-6 mt-6">
          <div className="bg-white mb-3 my-[2px]">
            <h1 className="text-gray-400 font-semibold py-3 pl-4 text-left">
              PRICE DETAILS
            </h1>
          </div>
          <div className="bg-white flex flex-col space-y-3 py-4  items-center mt-[2px]">
            <h1 className="inline-flex px-4 justify-between w-full">
              Price
              {cartQuantityTotal !== 0
                ? `(${cartQuantityTotal} items) `
                : ``}{" "}
              <span>₹{cartPriceTotal}</span>
            </h1>
            <h1 className="inline-flex px-4 justify-between w-full">
              Discount
              <span>- ₹{Math.floor(0.14 * cartPriceTotal).toString()}</span>
            </h1>
            <h1 className="inline-flex px-4 justify-between w-full">
              Delivery Charges <span>FREE</span>
            </h1>
            <div className="w-[94%] h-[1px] bg-gray-200"></div>
            <h1 className="inline-flex px-4 justify-between w-full">
              Total Amount
              <span>
                ₹
                {`${
                  cartPriceTotal - Math.floor(0.14 * cartPriceTotal).toString()
                }`}
              </span>
            </h1>
            <div className="w-[94%] h-[1px] bg-gray-200"></div>
            <h1 className="inline-flex px-4 justify-start w-full">{`You will save ₹${Math.floor(
              0.14 * cartPriceTotal
            ).toString()} on this order`}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-auto items-center my-10 gap-2">
        <p className="text-gray-500">Policies: </p>
        <p className="text-gray-500">Return Policy</p> <div className="w-[1px] h-3 bg-gray-500"></div> 
        <p className="text-gray-500">Terms of Use</p> <div className="w-[1px] h-3 bg-gray-500"></div>
        <p className="text-gray-500">Security</p> <div className="w-[1px] h-3 bg-gray-500"></div>
        <p className="text-gray-500">Privacy</p> <div className="w-[1px] h-3 bg-gray-500"></div>
        <p className="text-gray-500">Infringement</p>
        <div>
          <p className="text-gray-500 mr-[110px] ml-6">© 2007-2023 Flipkart.com</p>
        </div>
        <p className="text-gray-500 ml-5">Need help? Visit the Help Center or Contact Us</p>

      </div>
    </div>
  );
};

export default Cart;
