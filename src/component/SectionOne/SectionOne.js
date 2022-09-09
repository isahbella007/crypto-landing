import React from "react";
import "./SectionOne.css";
import hero_image from "../../assets/Crypto_images/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import hero_ribbon_1 from "../../assets/Crypto_images/hero-ribbon-1.png"; 
import hero_ribbon_2 from "../../assets/Crypto_images/hero-ribbon-2.png"; 
const SectionOne = () => {
  return (
    <>
      <div className="section-one-container">
        <div className="section-one-items">
          <div className="section-one-detail">
            <div className="black-friday-container">
              <button className="save-button">
                <p>75% SAVE</p>
              </button>
              <p className="weekend">For the Black Friday weekend</p>
            </div>
            <div className="section-one-header">
              <h1>Fastest & secure platform to invest in crypto</h1>
            </div>
            <div className="section-one-text">
              <p>
                Buy and sell cryptocurrencies, trusted by 10M wallets with over
                $30 billion in transactions.{" "}
              </p>
            </div>

            <div className="section-one-button">
              <button className="try-free-btn">
                <p>Try for FREE</p>
                <div className="arrow-container">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className = "icon-arrow" />
                </div>
              </button>
            </div>
          </div>

          <div className="section-one-image-container">
            {/* <div className="hero-ribbon-1">
                <img src={hero_ribbon_1} alt = "ribbon_1"></img>
            </div>
            <div className="hero-ribbon-2">
                <img src={hero_ribbon_2} alt = "ribbon_2"></img>
            </div> */}
            <img src={hero_image} alt= "hero"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionOne;
