import React from "react";

const Header = () => {
  
  return (
    <header className="main-header clearfix">
      <div className="logo">
        <a href="#section1">
          <em>Grad</em> School
        </a>
      </div>
      <a href="#menu" className="menu-link">
        <i className="fa fa-bars"></i>
      </a>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li>
            <a href="#section1">Home</a>
          </li>
          <li className="has-submenu">
            <a href="#section2">About Us</a>
            <ul className="sub-menu">
              <li>
                <a href="#section2">Who we are?</a>
              </li>
              <li>
                <a href="#section3">What we do?</a>
              </li>
              <li>
                <a href="#section3">How it works?</a>
              </li>
              <li>
                <a
                  href="https://templatemo.com/about"
                  rel="sponsored"
                  className="external"
                >
                  External URL
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#section4">Courses</a>
          </li>
          <li>
            <a href="#section6">Contact</a>
          </li>
          <li>
            <a href="https://templatemo.com" className="external">
              External
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
