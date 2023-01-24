import React from "react";
import { useState } from "react";

const Register = () => {
  let [formData, setFormData] = useState({firstName: '', lastName: '', email: '', password: '', age: ''});

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

    if (passwordRegex.test(email) && email !== undefined) {
      console.log("password is successfully entered");
    } else {
      console.log("wrong email");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = errorFunc();
    console.log('data from the error function', data)
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
