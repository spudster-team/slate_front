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
import Preloader from "./components/preloader/Preloader";

function App() {

  const [isLogin, setIsLogin] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (sessionStorage.getItem("token")) {
      setIsLogin(true);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Preloader/>
      ) : (
        <BrowserRouter>
        <Header isLogin={isLogin} setIsLogin={setIsLogin}/>
        <Routes>
        <Route exact path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/questions' element={<AllQuestions isLogin={isLogin}/>} />
        <Route path="/questions/:id" element={<DetailQuestion isLogin={isLogin}/>} />
        <Route path='/ask-question' element={<NewQuestion isLogin={isLogin}/>} />
        <Route path="/account" element={<Account/>}/>
        <Route path='/login' element={<Login isLogin={isLogin}/>}/>
        <Route path='/sign-up' element={<SignUp isLogin={isLogin}/>}/>
        </Routes>
        <Footer />
        </BrowserRouter>
        )}
    </React.Fragment>
  );
}

export default App;
