import React from "react";
import AlreadyRegisteredBackdrop from "./AlreadyRegisteredBackdrop";
import { isLogin } from "../../../redux/Slices/loginSlice";
import { useDispatch } from "react-redux";

const AlreadyRegisteredModal = ({ isOpen, onClose }) => {
    let dispatch = useDispatch();
    function handleLogin() {
        onClose();
        dispatch(isLogin(true))
    }
    if (!isOpen) return null
  return (
    <AlreadyRegisteredBackdrop isOpen={isOpen} onClose={onClose}>
      <div onClick={(e)=> e.stopPropagation()} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-10">
        <h1>This user already exists in our database!</h1>
        <p>Please consider logging in instead</p>

        <button onClick={handleLogin}>Login</button>
      </div>
    </AlreadyRegisteredBackdrop>
  );
};

export default AlreadyRegisteredModal;
