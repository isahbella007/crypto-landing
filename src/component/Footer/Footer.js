import React from "react";
import "./Footer.css";
import logo from "../../assets/Crypto_images/logo.svg";
import visa from "../../assets/Crypto_images/visa.png";
import mastercard from "../../assets/Crypto_images/mastercard.png";
import bitcoin from "../../assets/Crypto_images/bitcoin.png";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import {
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-image">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="footer-quick-link">
          <h3>Quick Link</h3>
          <p>Home</p>
          <p>Products</p>
          <p>About</p>
          <p>Features</p>
          <p>Contact</p>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <p>Download Whitepaper</p>
          <p>Smart Token</p>
          <p>Blockchain Explore</p>
          <p>Crypto API</p>
          <p>Interest</p>
        </div>

        <div className="payment-systems">
          <h2>We accept following payment systems</h2>
          <div className="payment-card">
            <img src={visa} alt="visa"></img>

            <img src={mastercard} alt="mastercard"></img>
            <img src={bitcoin} alt="bitcoin"></img>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2021 CRAPPO. All rights reserved</p>

        <div className="socials">
          <FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faInstagram}
            className="icon"
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faYoutube} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitter} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};
export default Footer;
