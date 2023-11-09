import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/sign_up/SignUp";
import About from "./components/about/About";

function App() {

  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
      <Header isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Routes>
        <Route exact path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login isLogin={isLogin}/>}/>
        <Route path='/sign-up' element={<SignUp isLogin={isLogin}/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
