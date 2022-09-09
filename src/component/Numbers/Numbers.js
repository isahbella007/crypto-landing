import React from "react";
import "./Numbers.css"; 
import {numbers} from "../../constants/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Numbers = () => { 
    return(
        <div className="numbers-container">
        {numbers.map((items) => (
            <div className="numbers-items">
                <div className="number-image">
                    <FontAwesomeIcon icon={items.icon} className = "number-icons"></FontAwesomeIcon>
                </div>
                <div className="number-texts">
                    <h2>{items.textHeader}</h2>
                    <p>{items.text}</p>
                </div>
            </div>
        ))}
            
            
            
        </div>
    )
}
export default Numbers