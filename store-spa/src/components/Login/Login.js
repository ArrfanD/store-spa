import React from "react";

const LoginModal = ({ children, open, onClose }) => {
  console.log("is open logged in the modal component", open);
  if (!open) return null;
  return (
    <div className="absolute z-50 top-40 left-0 right-0">
      {children} <br />
      <button onClick={() => onClose(false)}>Close Modal</button>
    </div>
  );
};

export default LoginModal;

