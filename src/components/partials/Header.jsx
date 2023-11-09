import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
//import $ from "jquery";

const Header = ({isLogin, setIsLogin}) => {

  const BASE_URL = window.location.host;

  useEffect(() => {
    /*$(".nav li:first").addClass("active");

    $(window).scroll(function () {
      checkSection();
    });

    $(".main-menu, .scroll-to-section").on("click", "a", function (e) {
      if ($(e.target).hasClass("external")) {
        return;
      }
      e.preventDefault();
      $("#menu").removeClass("active");
      showSection($(this).attr("href"), true);
    });*/
  }, []);

  /*const showSection = (section, isAnimate) => {
    let pathname = window.location.pathname;

    if (pathname === "/") {
      var direction = section.replace(/#/, "");
      var reqSection = $(".section").filter(
        '[data-section="' + direction + '"]'
      );

      var reqSectionPos = reqSection && reqSection.offset().top - 0;

      if (isAnimate) {
        $("body, html").animate(
          {
            scrollTop: reqSectionPos,
          },
          800
        );
      } else {
        $("body, html").scrollTop(reqSectionPos);
      }
    }
  };

  const checkSection = () => {
    $(".section").each(function () {
      var $this = $(this),
        topEdge = $this.offset().top - 80,
        bottomEdge = topEdge + $this.height(),
        wScroll = $(window).scrollTop();
      if (topEdge < wScroll && bottomEdge > wScroll) {
        var currentId = $this.data("section"),
          reqLink = $("a").filter("[href*=\\#" + currentId + "]");
        reqLink
          .closest("li")
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    });
  };*/

  const logout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    setIsLogin(false);
    window.location.href = `http://${BASE_URL}/`;
  }

  return (
    <header className="main-header clearfix">
      <div className="logo">
        <a href="#section1">Slate</a>
      </div>
      <a href="#menu" className="menu-link">
        <i className="fa fa-bars"></i>
      </a>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li>
            <NavLink to={"/#home"}>Accueil</NavLink>
          </li>
          <li className="has-submenu">
            <a href="#section2">A propos</a>
            <ul className="sub-menu">
              <li>
                <NavLink to={"/#section2"}>Who we are?</NavLink>
              </li>
              <li>
                <NavLink to={"/#section3"}>What we do?</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={"/#section6"}>Contact</NavLink>
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
