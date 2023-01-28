import "./App.css";
import MainPage from "./MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import LoginModal from "./components/Login/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isLogin, regBoolean, alreadyRegistered } from "./redux/Slices/loginSlice";
import RegisterSuccessModal from "./components/Register/RegisterSuccessModal/RegisterSuccessModal";
import AlreadyRegisteredModal from "./components/Register/AlreadyRegistered/AlreadyRegisteredModal";
import UserDetailModal from "./components/userDashboard/userDetail/UserDetailModal";

function App() {
  let dispatch = useDispatch();
  let {
    login: { isLoginBoolean, isRegisterSuccess, isAlreadyRegistered },
  } = useSelector((state) => state);

  console.log('is already registered boolean : ', isAlreadyRegistered)

  function onClose(val) {
    dispatch(isLogin(val));
  }

  function closeRegisterSuccessModal(val) {
    dispatch(regBoolean(val));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainPage />
        <Footer />
        <LoginModal open={isLoginBoolean} onClose={onClose} />
        <RegisterSuccessModal
          isOpen={isRegisterSuccess}
          // isOpen={true}
          onClose={closeRegisterSuccessModal}
        />
        <AlreadyRegisteredModal isOpen={isAlreadyRegistered} onClose={() => dispatch(alreadyRegistered(false))}/>
        <UserDetailModal />
      </BrowserRouter>
    </div>
  );
}

export default App;
