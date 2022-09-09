import React from "react";
import "./Header.css";
import logo from "../../assets/Crypto_images/logo.svg";


const Header = () => {
  window.onload = function () {
    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector('.mobile-nav')
    menu_btn.addEventListener("click", function () {
      menu_btn.classList.toggle("is-active");
      mobile_menu.classList.toggle("is-active")
    });
  };

  return (
    <>
      <div className="header-container">
        <div className="header-items">
          <div className="header-image-container">
            <img src={logo} alt="crypto"></img>
          </div>
          <nav>
            <a href="/earn"> Products</a>
            <a href="#"> Features</a>
            <a href="#"> About</a>
            <a href="#">Contact</a>
            <a href="#" className="a-login">
              Login
            </a>
            <div className="vertical-line"></div>
            <button className="register-btn">
              <p>Register</p>
            </button>
          </nav>
          <button className="hamburger">
            <div className="bar"></div>
          </button>
          
        </div>
        <nav className="mobile-nav">
          <a href="#"> Products</a>
          <a href="#"> Features</a>
          <a href="#"> About</a>
          <a href="#">Contact</a>
          <div className="mobile-nav-bottom">
            <a href="#" className="a-login">
              Login
            </a>
            <div className="vertical-line"></div>
            <button className="register-btn">
              <p>Register</p>
            </button>
          </div>
        </nav>

      </div>
      
    </>
  );
};
export default Header;
