import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDashboardModal, dashboardSelectedUser } from "../../redux/Slices/loginSlice";

const UserDashboard = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let {login : { isUserLoggedIn, isUserDashboardDetailOpen }} = useSelector(state => state);

  let [userList, setUserList] = useState([]);
  // let [dataId, setDataId] = useState();

  let fetchUserCredentials = async () => {
    let response = await axios("http://localhost:3000/profile");
    // console.log("user list available in the dashboard section", response);
    let userData = response?.data;
    // console.log('data avilable after calling api', userData)
    setUserList(userData);
  };

  useEffect(() => {
    fetchUserCredentials();
  }, []);

  console.log("user list available in the dashboard section", userList);
  console.log('dashboard deatil boolean : ', isUserDashboardDetailOpen)

  if (!isUserLoggedIn) return <div>
    Sorry But you are not logged in!
    <button onClick={() => navigate('/login')}></button>
  </div>

  function handleUserPageClick (val){
    dispatch(userDashboardModal(true));
    // setDataId(val);
    dispatch(dashboardSelectedUser(val))
  }

  return (
    <div className="bg-[whitesmoke] p-6">
      <h1>This is the Admin Dashboard for your Admin account!</h1>
      <div className="flex flex-col justify-center items-center">
        <p>User List</p>
        <div className="flex flex-wrap gap-2 items-center justify-center mt-3">
          {userList?.map((x, i) => {
            let { id, firstName, lastName, email, password, age } = x;
            return (
              <motion.div onClick={() => handleUserPageClick(id)} whileHover={{ scale: '1.1' }} whileTap={{ scale: 0.9 }} className="bg-black/5 m-6 rounded-lg shadow-xl p-6">
                <p>id: {id}</p>
                <p>firstName: {firstName}</p>
                <p>lastName: {lastName}</p>
                <p>email: {email}</p>
                <p>password: {password}</p>
                <p>age: {age}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
