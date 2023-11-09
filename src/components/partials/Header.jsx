import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({isLogin, setIsLogin}) => {

  const BASE_URL = window.location.host;

  const logout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    setIsLogin(false);
    window.location.href = `http://${BASE_URL}/`;
  }

  const handleBarMenuClick = (e) => {
    e.preventDefault();
    let status = e.currentTarget.dataset.status;
  
    console.log(status);
    let menu = document.getElementById('menu');
    let menuLink = document.querySelector('.menu-link');
    if(status === 'close') {
        menu.classList.add('active');
        menuLink.classList.add('active');
        menuLink.dataset.status = 'open';
    } else {
      menu.classList.remove('active');
      menuLink.classList.remove('active');
      menuLink.dataset.status = 'close';
    }
  }
  let navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function(e) {
      let menu = document.getElementById('menu');
    let menuLink = document.querySelector('.menu-link');
    menu.classList.remove('active');
      menuLink.classList.remove('active');
      menuLink.dataset.status = 'close';
    });
  });
  

  return (
    <header className="main-header clearfix">
      <div className="logo">
        <a href="#section1">Slate</a>
      </div>
      <a href="#menu" className="menu-link" data-status='close' onClick={handleBarMenuClick}>
        <i className="fa fa-bars"></i>
      </a>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li>
            <NavLink to={"/#home"}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>A propos</NavLink>
          </li>
          {isLogin ? (
              <React.Fragment>
              <li>
                <NavLink to="" className={"external"}>Mon compte</NavLink>
              </li>
              <li>
                <a href="#logout" onClick={logout} className={"external"}>Déconnexion</a>
              </li>
              </React.Fragment>
            )  : 
            (
              <React.Fragment>
              <li>
              <NavLink to={"/login"} className={"external"}>Se connecter</NavLink>
            </li>
            <li>
              <NavLink to={"/sign-up"} className={"external"}>S'inscrire</NavLink>
            </li>
            </React.Fragment>
              )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
