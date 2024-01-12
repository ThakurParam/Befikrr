import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./Assets/Footer";
import { Home } from "./Components/Home";
import { Welcome } from "./Components/Welcome";
import { SwiperWelcome } from "./Modules/SwiperWelcome";
import Aos from "aos";
import { useEffect } from "react";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <Footer /> */}
      {/* <Home /> */}
      <Welcome />
      {/* <SwiperWelcome /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
    </>
  );
}

export default App;
