import React from "react";
import "./Earn.css";
import { earnText } from "../../constants";
const Earn = () => {
  return (
    <div className="earn-container">
      {earnText.map((item) => (
        <>
          <h2 key={item.id}>{item.header}</h2>
          <p>{item.text}</p>
        </>
      ))}
    </div>
  );
};
export default Earn;
