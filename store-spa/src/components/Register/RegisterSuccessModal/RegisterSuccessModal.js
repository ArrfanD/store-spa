import React from "react";
import RegisterModalBackdrop from "./RegisterModalBackdrop";

const RegisterSuccessModal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <RegisterModalBackdrop>
      <div className="bg-white absolute top-[50%] p-10 rounded-[2px] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1>You have succesfully registered your account</h1>
        <button onClick={()=> onClose(false)}>OK! Close this dialog now</button>
      </div>
    </RegisterModalBackdrop>
  );
};

export default RegisterSuccessModal;
