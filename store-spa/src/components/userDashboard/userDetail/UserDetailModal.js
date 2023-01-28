import React from "react";
import UserDetailBackdrop from "./UserDetailBackdrop";
// import { ReactDOM } from "react-dom/client";
import { useSelector, useDispatch } from "react-redux";
import { userDashboardModal } from "../../../redux/Slices/loginSlice";

const portalElement = document.getElementById("portal-div");

const UserDetailModal = () => {
  let dispatch = useDispatch();
  let {
    login: { isUserDashboardDetailOpen },
  } = useSelector((state) => state);

  if (!isUserDashboardDetailOpen) return null;

  return (
    <UserDetailBackdrop isOpen={isUserDashboardDetailOpen} onClose={() => dispatch(userDashboardModal(false))}>
    <div className="absolute z-50 bg-white m-6 p-10" onClick={(e) => e.stopPropagation()}>
      <p>You can Edit your profile detials as you wish</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur
        voluptatibus enim voluptas ea vero iure ipsam, veniam cumque fugiat
        libero perspiciatis cupiditate fuga! Minima, fugit beatae mollitia
        possimus aperiam obcaecati facere, voluptates culpa qui totam optio.
        Soluta error numquam adipisci quasi deserunt, quo consectetur modi,
        voluptatibus libero doloremque optio?
      </p>
      <button onClick={() => dispatch(userDashboardModal(false))}>
        Close Modal
      </button>
    </div>
    </UserDetailBackdrop>
  );
};

export default UserDetailModal;
