import "./App.css";
import MainPage from "./MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import LoginModal from "./components/Login/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isLogin } from "./redux/Slices/loginSlice";
import LoginBackdrop from "./components/Login/LoginBackdrop";
import { AnimatePresence } from "framer-motion";

function App() {
  let dispatch = useDispatch();
  let {
    login: { isLoginBoolean },
  } = useSelector((state) => state);

  function onClose(val) {
    dispatch(isLogin(val));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainPage />
        <Footer />
        <LoginModal open={isLoginBoolean} onClose={onClose} />
      </BrowserRouter>
    </div>
  );
}

export default App;
