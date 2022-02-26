/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/style-prop-object */
import React from "react";
import Logo from "../elements/Logo";
// import Image from "../elements/Image";

const Header = () => {
  const toggleMenu = () => {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  };

  return (
    <header
      id="topnav"
      className="defaultscroll sticky"
      style={{ backgroundColor: "F6F8FB", float: "right" }}
    >
      <div className="container">
        <a className="logo" href="/">
        <Logo/>
        </a>
        <div className="buy-button">
          <a href="tel:+2349036709916" target="_blank">
            <div className="btn btn-primary login-btn-primary">
              <i className="uil-phone-alt"></i>
            </div>
            <div className="btn btn-light login-btn-light">
              <i className="uil-phone-alt"></i>
            </div>
          </a>
        </div>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <div id="navigation">
          <ul className="navigation-menu" style={{ float:'right' }}>

            <li>
              <a href="/about" className="sub-menu-item">
                {/* About Us */}
              </a>
            </li>


            <li>
              {/* <a href="/contact" className="sb-menu-item">
                Contact
              </a> */}
            </li>
          </ul>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
