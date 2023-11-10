import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/sign_up/SignUp";
import About from "./components/about/About";
import NewQuestion from "./components/questions/NewQuestion";
import AllQuestions from "./components/questions/AllQuestions";
import Account from "./components/account/Account";
import DetailQuestion from "./components/questions/DetailQuestion";

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
        <Route path='/questions' element={<AllQuestions/>} />
        <Route path="/questions/:id" element={<DetailQuestion/>} />
        <Route path='/ask-question' element={<NewQuestion/>} />
        <Route path="/account" element={<Account/>}/>
        <Route path='/login' element={<Login isLogin={isLogin}/>}/>
        <Route path='/sign-up' element={<SignUp isLogin={isLogin}/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
