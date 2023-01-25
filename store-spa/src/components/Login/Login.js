import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginBackdrop from "./LoginBackdrop";
import { useSelector, useDispatch } from "react-redux";
import loginImg from "../../assets/images/icons/login.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isLogin } from "../../redux/Slices/loginSlice";

let dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const LoginModal = ({ open, onClose }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [userRecords, setUserRecords] = useState({});

  let fetchUserRecords = async () => {
    const response = await axios("http://localhost:3000/profile")
      .then((res) => setUserRecords(res.data))
      .catch((err) => console.log("error ", err));
  };

  useEffect(() => {
    fetchUserRecords();
  }, []);

  let [errorObj, setIsError] = useState({});

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let {
    login: { isLoginBoolean },
  } = useSelector((state) => state);

  function handleChange(e) {
    e.preventDefault();
    // console.log("data here ====> ", [e.target.name, e.target.value]);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function isError(e) {
    let errorObject = {};
    let { email, password } = formData;
    var regularExpression =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regularExpression.test(password)) {
      // console.log("password approved");
    } else {
      errorObject = {
        ...errorObject,
        password: "please enter the password correctly",
      };
    }

    if (emailRegex.test(email)) {
      // console.log("mail approved");
    } else {
      errorObject = {
        ...errorObject,
        email: "please enter the email correctly",
      };
    }
    return errorObject;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let dataOfError = isError();
    console.log('data of error is here', Object.keys(dataOfError).length)

    if (Object.keys(dataOfError).length) {
      console.log("Please fill the form correctly");
    } else {
      validateUser();
    }
  }

  function validateUser() {
    // console.log("DATA NOW PRESENT IN THE STATE", userRecords);
    console.log('form data', formData)
    let checkMatch = userRecords.filter(x => x.email === formData.email && x.password === formData.password);
    // console.log('here is the final result of checkMatch', Boolean(Object.keys(checkMatch).length))
    if (Boolean(Object.keys(checkMatch).length)) {
      navigate('/dashboard')
      dispatch(isLogin(false))
    } else {
      console.log("Chak bhak bsdk")
    }
    
  }

  if (!open) return null;

  return (
    <LoginBackdrop onClose={onClose} open={isLoginBoolean}>
      <AnimatePresence>
        <motion.div
          key="login"
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex h-[75vh]">
            <div className="flex flex-col justify-between p-6 items-center bg-[#2874f0]">
              <div>
                <h1 className="text-left text-[27px] text-white font-semibold">
                  Login
                </h1>
                <p className="text-left text-[16px] mt-4 w-[183px] text-gray-300">
                  Get access to your Orders, Wishlist and Recommendations
                </p>
              </div>
              <img src={loginImg} alt="img" className="w-[200px] h-auto" />
            </div>
            <div className="flex flex-col justify-between bg-white p-6 w-[400px]">
              <form
                className="flex flex-col items-start gap-2"
                onSubmit={handleSubmit}
              >
                <label htmlFor="email">
                  Please enter username or email
                </label>
                <input
                  type="text"
                  name="email"
                  className="shadow-inner w-full"
                  onChange={handleChange}
                />
                <label htmlFor="password">Please enter the password</label>
                <input
                  type="password"
                  name="password"
                  className="shadow-inner w-full"
                  onChange={handleChange}
                />
                <p className="text-[13px] text-left">
                  By continuing, you agree to Blisscart's Terms of Use and
                  Privacy Policy.
                </p>
                <button
                  type="submit"
                  className="mt-4 w-full h-10 rounded-sm text-white font-semibold text-[14px] bg-[#fb641b]"
                >
                  Login
                </button>
              </form>
              <div className="flex flex-col">
                <p>Don't have an account?</p>
                <button onClick={() => navigate("/register")}>Sign up</button>
              </div>
            </div>
          </div>
          <button onClick={() => onClose(false)}>Close Modal</button>
        </motion.div>
      </AnimatePresence>
    </LoginBackdrop>
  );
};

export default LoginModal;
