import React, { useRef } from "react";
import UserDetailBackdrop from "./UserDetailBackdrop";
// import { ReactDOM } from "react-dom/client";
import { useSelector, useDispatch } from "react-redux";
import { userDashboardModal } from "../../../redux/Slices/loginSlice";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const UserDetailModal = () => {
  const btnRef = useRef();
  console.log("ref is here ====> ", btnRef);
  let [dataArray, setDataArray] = useState([]);
  let [currentData, setCurrentData] = useState([]);
  let [dataId, setDataId] = useState("");
  let [putData, setPutData] = useState({});
  let dispatch = useDispatch();
  let {
    login: { isUserDashboardDetailOpen, dashboardSelectedUser },
  } = useSelector((state) => state);

  let fetchBackendData = async () => {
    let response = await axios("http://localhost:3000/profile")
      .then((res) => setDataArray(res.data))
      .catch((err) => console.log("error : -", err));
  };

  useEffect(() => {
    fetchBackendData();
  }, []);

  function handleChange(e) {
    console.log("on change function output : ", [
      e.target.name,
      e.target.value,
    ]);
    setCurrentData([e.target.name, e.target.value]);
  }
  console.log("current data ", currentData);

  // console.log("user === detail data id ", dashboardSelectedUser);
  // console.log('data of user list available from the backend ', dataArray);
  let selectedUser = dataArray?.filter(
    (item) => item.id === dashboardSelectedUser
  );
  // console.log("seected user data in dashboard", selectedUser);
  function handleSubmit() {
    setPutData({
      ...putData,
      [`${currentData[0]}`]: currentData[1],
    });
    btnRef.current.focus();
  }

  console.log("only check this for now ======> ", putData);

  let handleDataPut = async (val) => {
    console.log("this data will be sent to backend", putData);
    let response = await axios
      .patch(`http://localhost:3000/profile/${val}`, putData)
      .then((item) => console.log("response data ", item))
      .catch((err) => console.log("error here ", err));
  };

  if (!isUserDashboardDetailOpen) return null;

  return (
    <UserDetailBackdrop
      isOpen={isUserDashboardDetailOpen}
      onClose={() => dispatch(userDashboardModal(false))}
    >
      <div
        className="absolute z-50 bg-white m-6 p-10  overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {selectedUser.map((item, index) => {
          let { age, email, firstName, id, lastName, password } = item;
          return (
            <div className="flex flex-col items-center justify-evenly m-6 gap-3">
              <h1 className="color-gray-400 text-[23px]">
                Selected User Details
              </h1>
              <p>
                You May Conveniently Select any entry below and edit its details
              </p>
              <div className="flex flex-col items-start w-full">
                <p className="flex" onClick={() => setDataId("firstName")}>
                  First Name :
                  {dataId === "firstName" ? (
                    <div>
                      <input
                        name="firstName"
                        onChange={(e) => handleChange(e)}
                        className="ml-3 shadow-inner drop-shadow-lg"
                        type="text"
                      />{" "}
                      <button  onClick={handleSubmit}>
                        Submit
                      </button>
                    </div>
                  ) : (
                    <span className="ml-3">{firstName}</span>
                  )}
                </p>
                <p className="flex" onClick={() => setDataId("lastName")}>
                  Last Name :
                  {dataId === "lastName" ? (
                    <div>
                      <input
                        name="lastName"
                        onChange={(e) => handleChange(e)}
                        className="ml-3 shadow-inner drop-shadow-lg"
                        type="text"
                      />
                      <button onClick={handleSubmit}>Submit</button>
                    </div>
                  ) : (
                    <span  className="ml-3">{lastName}</span>
                  )}
                </p>
                <p className="flex" onClick={() => setDataId("email")}>
                  Email :
                  {dataId === "email" ? (
                    <div>
                      <input
                        name="email"
                        onChange={(e) => handleChange(e)}
                        className="ml-3 shadow-inner drop-shadow-lg"
                        type="text"
                      />
                      <button onClick={handleSubmit}>Submit</button>
                    </div>
                  ) : (
                    <span  className="ml-3">{email}</span>
                  )}
                </p>
                <p className="flex" onClick={() => setDataId("age")}>
                  Age :
                  {dataId === "age" ? (
                    <div>
                      <input
                        name="age"
                        onChange={(e) => handleChange(e)}
                        className="ml-3 shadow-inner drop-shadow-lg"
                        type="text"
                      />
                      <button onClick={handleSubmit}>Submit</button>
                    </div>
                  ) : (
                    <span  className="ml-3">{age}</span>
                  )}
                </p>
                <p className="flex" onClick={() => setDataId("password")}>
                  Password :
                  {dataId === "password" ? (
                    <div>
                      <input
                        name="password"
                        onChange={(e) => handleChange(e)}
                        className="ml-3 shadow-inner drop-shadow-lg"
                        type="password"
                      />
                      <button onClick={handleSubmit}>Submit</button>
                    </div>
                  ) : (
                    <span  className="ml-3">{password}</span>
                  )}
                </p>
              </div>
              <div>
                <p>Submit Edited Details</p>
                <button onClick={() => handleDataPut(id)}>Submit</button>
              </div>
            </div>
          );
        })}
        <button onClick={() => dispatch(userDashboardModal(false))}>
          Close Modal
        </button>
      </div>
    </UserDetailBackdrop>
  );
};

export default UserDetailModal;
