import "./App.css";
import MainPage from "./MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import LoginModal from "./components/Login/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isLogin, regBoolean } from "./redux/Slices/loginSlice";
import RegisterSuccessModal from "./components/Register/RegisterSuccessModal/RegisterSuccessModal";

function App() {
  let dispatch = useDispatch();
  let {
    login: { isLoginBoolean, isRegisterSuccess },
  } = useSelector((state) => state);


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
          onClose={closeRegisterSuccessModal}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
