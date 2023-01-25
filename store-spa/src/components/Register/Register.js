import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
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
    }

    if (emailRegex.test(email) && email !== undefined) {
      console.log("email is successfully entered");
    } else {
      console.log("wrong email");
    }

    if (age >= 18 && age <= 32 && age !== undefined) {
      console.log("age is successfully entered");
    } else {
      console.log("wrong age");
    }
  }
  let formPut = async () => {
    let response = await axios
      .delete("http://localhost:3000/profile/3")
      .then((res) => console.log("put request response", res));
  };


  function handleSubmit(e) {
    e.preventDefault();
    let data = errorFunc();
    if (data) {
      console.log("please fill your form properly");
    } else {
      console.log("perfect! go ahead and post the data now!");
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
