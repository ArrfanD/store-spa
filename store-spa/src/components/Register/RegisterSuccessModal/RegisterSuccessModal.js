import React from "react";
import RegisterModalBackdrop from "./RegisterModalBackdrop";

const RegisterSuccessModal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <RegisterModalBackdrop>
      <div className="bg-white">
        <h1>You have succesfully registered your account</h1>
        <button onClick={()=> onClose(false)}>OK! Close this dialog now</button>
      </div>
    </RegisterModalBackdrop>
  );
};

export default RegisterSuccessModal;
