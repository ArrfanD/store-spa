import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { regBoolean } from "../../redux/Slices/loginSlice";
import { useEffect } from "react";
import { alreadyRegistered } from "../../redux/Slices/loginSlice";

const Register = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [userRecords, setuserRecords] = useState({});
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
  });

  let fetchUserData = async () => {
   let response = await axios("http://localhost:3000/profile")
      .then((res) => setuserRecords(res.data))
      .catch((err) =>
        console.log("error while fetching user records data", err)
      );
  };

  useEffect(()=>{
    fetchUserData()
  },[])

  function handleChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function errorFunc() {
    let baseArr = {};
    let { firstName, lastName, email, password, age } = formData;

    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (passwordRegex.test(password) && password !== undefined) {
      console.log("password is successfully entered");
    } else {
      console.log("wrong password");
      baseArr = {
        ...baseArr,
        password: "Please enter the password in the right format",
      };
    }

    if (emailRegex.test(email) && email !== undefined) {
      console.log("email is successfully entered");
    } else {
      console.log("wrong email");
      baseArr = {
        ...baseArr,
        email: "Please enter the email in the right format",
      };
    }

    if (age >= 18 && age <= 32 && age !== undefined) {
      console.log("age is successfully entered");
    } else {
      console.log("wrong age");
      baseArr = { ...baseArr, age: "the age you entered is beyond range" };
    }

    return baseArr;
  }

  let formPut = async () => {
    let isUserAlreadyPresent = userRecords.filter(x=> x.email === formData.email && x.password === formData.password)
    // console.log('is the user already present?',Object.keys(isUserAlreadyPresent).length)
    if (Object.keys(isUserAlreadyPresent).length) {
      alert('the user is present already')
      dispatch(alreadyRegistered(true))
    } else {
      console.log('the user is new. Making entry in db for the user')
      let response = await axios
      .post("http://localhost:3000/profile", formData)
      .then((res) => console.log("put request response", res));
      // navigate("/regsuccess");
      dispatch(regBoolean(true));
      alert(' the other condition is triggered')
    }    
  };

  function handleSubmit(e) {
    e.preventDefault();
    let data = errorFunc();
    console.log("data returned from error function", data);
    if (Object.keys(data).length) {
      console.log("please fill your form properly");
    } else {
      // alert("perfect! go ahead and post the data now!");
      formPut();
    }
  }

  return (
    <form
      className="flex flex-col gap-2 items-start p-10"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <label htmlFor="firstName">Please enter your First Name</label>
      <input className="shadow-inner w-[350px]" type="text" name="firstName" />
      <label htmlFor="lastName">Please enter your Last Name</label>
      <input className="shadow-inner w-[350px]" type="text" name="lastName" />
      <label htmlFor="email">Please enter your email-id</label>
      <input className="shadow-inner w-[350px]" type="email" name="email" />
      <label htmlFor="password">Please enter your password</label>
      <input
        className="shadow-inner w-[350px]"
        type="password"
        name="password"
      />
      <label htmlFor="age">Please enter your age</label>
      <input className="shadow-inner w-[350px]" type="number" name="age" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
