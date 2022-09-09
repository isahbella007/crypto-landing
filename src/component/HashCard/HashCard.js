import React from "react";
import "./HashCard.css";

const HashCard = () => {
  return (
    <div className="hash-card-container">
      <div className="enter-hash-rate-container">
        <input placeholder="Enter your hash rate"></input>
        <select>
          <option>TH/s</option>
          <option>H/s</option>
          <option>KH/s</option>
          <option>MH/s</option>
          <option>GH/s</option>
        </select>

        <button className="calculate-btn">
          <p>Calculate</p>
        </button>
      </div>
      <div className="estimated-revenue-container">
        <p className="estimated-text">ESTIMATED 24 HOUR REVENUE:</p>
        <div className="result-container">
          <h2>0.055 130 59 ETH </h2>
          <span>($1275)</span>
        </div>

        <p className="grey-text">
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>
    </div>
  );
};
export default HashCard;
