import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { regBoolean } from "../../redux/Slices/loginSlice";


const Register = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch();

  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
  });

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
      baseArr = {...baseArr, password: 'Please enter the password in the right format'}
    }

    if (emailRegex.test(email) && email !== undefined) {
      console.log("email is successfully entered");
    } else {
      console.log("wrong email");
      baseArr = {...baseArr, email: 'Please enter the email in the right format'}
    }

    if (age >= 18 && age <= 32 && age !== undefined) {
      console.log("age is successfully entered");
    } else {
      console.log("wrong age");
      baseArr = {...baseArr, age: 'the age you entered is beyond range'}
    }

    return baseArr;
  }

  let formPut = async () => {
    let response = await axios
      .post("http://localhost:3000/profile",formData)
      .then((res) => console.log("put request response", res));
  };

  console.log('form data after its state is updated', formData)

  function handleSubmit(e) {
    e.preventDefault();
    let data = errorFunc();
    console.log('check this mannnnn', data)
    if (Object.keys(data).length) {
      console.log("please fill your form properly");
    } else {
      alert("perfect! go ahead and post the data now!");
      formPut()
      dispatch(regBoolean(true))
      navigate('/regsuccess')
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
