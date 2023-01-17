import logo from "./logo.svg";
import "./App.css";
import MainPage from "./MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainPage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
