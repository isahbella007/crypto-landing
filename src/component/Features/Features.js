import React from "react";
import "./Features.css";
import feature_1 from "../../assets/Crypto_images/feature-1-img.png";
import feature_2 from "../../assets/Crypto_images/feature-2-img.png";
import feature_3 from "../../assets/Crypto_images/feature-3-img.png";

const Features = () => {
  return (
    <div className="feature-container">
        <div className="trial">
            .
            <div className="feature-header">
            <h2>
                Market sentiments, portfolio, and run the infrastructure of your
                choice
            </h2>
            </div>
        </div>

        <div className="all-features">
            <div className="feature">
            <div className="feature-text">
                <h3>Invest Smart</h3>
                <p>
                Get full statistic information about the behaviour of buyers and
                sellers will help you to make the decision.{" "}
                </p>
                <button className="feature-btn">
                <p>Learn More</p>
                </button>
            </div>
            <div className="feature-image-smart-invest">
                <img src={feature_1} alt="bitcoin_card"></img>
            </div>
            </div>

            <div className="feature">
            <div className="feature-text">
                <h3>Detailed Statistics</h3>
                <p>
                View all mining related information in realtime, at any point at
                any location and decide which polls you want to mine in.{" "}
                </p>
                <button className="feature-btn">
                <p>Learn More</p>
                </button>
            </div>
            <div className="feature-image-stats">
                <img src={feature_2} alt="bitcoin_card"></img>
            </div>
            </div>

            <div className="feature">
            <div className="feature-text">
                <h3>Grow your profit and track your investments</h3>
                <p>
                Use advanced analytical tools. Clear TradingView charts let you
                track current and historical profit investments.{" "}
                </p>
                <button className="feature-btn">
                <p>Learn More</p>
                </button>
            </div>
            <div className="feature-image-all-currency">
                <img src={feature_3} alt="bitcoin_card"></img>
            </div>
            </div>
        </div>
        <div className="mining-container">
            <div className="mining-card">
                <div className="mining-details">
                    <div className="start-mining">
                        <h3>Start mining now</h3>
                        <p>Join now with CRAPPO to get the latest news and start mining now</p>
                    </div>
                    <div className="enter-email">
                        <input placeholder="Enter your email"></input>
                        <button className="enter-email-button"><p>Subscribe</p></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Features;
