import React from "react";
import "./WhyCrappo.css";
import why_image from "../../assets/Crypto_images/why-img.png";
const WhyCrappo = () => {
  return (
    <div className="why-crappo-container">
      <div className="why-crappo-image">
        <img src={why_image} alt="crappo"></img>
      </div>
      <div className="why-crappo-text-container">
        <div className="crappo-header">
          <h2>Why you should choose CRAPPO</h2>
        </div>
        <div className="crappo-text">
          <p>
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
        </div>
        <div className="section-one-button">
          <button className="try-free-btn">
            <p>Learn More</p>
            
          </button>
        </div>
      </div>
    </div>
  );
};
export default WhyCrappo;
