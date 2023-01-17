import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    let navigate = useNavigate()
  return (
    <div className="">
      <div>Sorry, this location is not present!</div>
      <p>Please Go Back to the previous location or Revert to the Home Page</p>
      <button onClick={()=> navigate('/')} className="cart w-auto p-2 shadow-yellow-300 drop-shadow-lg  h-10 bg-gray-400 rounded-md text-white font-bold">
        Go to Homepage
      </button>
    </div>
  );
};

export default Error;

