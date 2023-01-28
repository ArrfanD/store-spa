import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoginBackdrop = ({ children, open, onClose }) => {
  if (!open) return null;
  return (
    <motion.div
      key="backdrop"
      onClick={() => onClose(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="top-0 left-0 fixed h-full w-full bg-black/75 flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
};

export default LoginBackdrop;
