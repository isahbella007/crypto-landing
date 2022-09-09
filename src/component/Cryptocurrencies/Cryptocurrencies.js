import React from "react";
import "./Cryptocurrencies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import bitcon from "../../assets/Crypto_images/bitcon.png"
import ethereum from "../../assets/Crypto_images/ethereum.png"; 
import litecoin from "../../assets/Crypto_images/litecoin.png"
const Cryptocurrencies = () => {

    const selected = () => { 
        console.log("clicked");
    }
  return (
    <div className="currencies-container">
            <div className="currency-p-header">
                <p>Trade securely and market the high growth cryptocurrencies.</p>
            </div>
            
            <div className="currency-cards">
                <div className="card-container ">
                    <div className="card-image">
                        <img src={bitcon} alt = "bitcoin"></img>
                    </div>
                    <div className="card-header">
                        <h3 >Bitcoin</h3>
                        <p>BTC</p>
                    </div>
                    <div  className="currency-card-text">
                        <p>
                            Digital currency in which a record of transactions is maintained.
                        </p>
                    </div>
                    
                    <div className="crypto-button">
                        <button className="crypto-btn">
                        <p>Start mining</p>
                        <div className="currencies-arrow-container">
                            <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="currencies-icon-arrow"
                            />
                        </div>
                        </button>
                    </div>
                    
                </div>
                <div className="card-container not-selected">
                    <div className="card-image">
                        <img src={ethereum} alt = "bitcoin"></img>
                    </div>
                    <div className="card-header">
                        <h3>Ethereum</h3>
                        <p>ETH</p>
                    </div>
                    <div  className="currency-card-text">
                        <p>
                        Blockchain technology to create and run decentralized digital applications.
                        </p>
                    </div>
                    <div className="crypto-button">
                        <button className="crypto-btn">
                        {/* <p>Start mining</p> */}
                        <div className="currencies-arrow-container">
                            <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="currencies-icon-arrow"
                            />
                        </div>
                        </button>
                    </div>
                    
                </div>
                <div className="card-container not-selected" onClick={selected}>
                    <div className="card-image">
                        <img src={litecoin} alt = "bitcoin"></img>
                    </div>
                    <div className="card-header not-selected">
                        <h3>Litecoin</h3>
                        <p>LTC</p>
                    </div>
                    <div  className="currency-card-text">
                        <p>
                        Cryptocurrency that enables instant payments to anyone in the world.
                        </p>
                    </div>
                    <div className="crypto-button">
                        <button className="crypto-btn">
                        {/* <p>Start mining</p> */}
                        <div className="currencies-arrow-container">
                            <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="currencies-icon-arrow"
                            />
                        </div>
                        </button>
                    </div>
                    
                </div>
               
            </div>
            
   
    </div>
  );
};
export default Cryptocurrencies;
