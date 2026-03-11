import React from "react";
import "./categorycards.css";

const Categorycards = ({
  topText,
  bottomText,
  productName,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className="category-card"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="category-card-top">
        <p>{topText}</p>
      </div>

      <div className="category-card-bottom">
        <p>{bottomText}</p>
      </div>

      <div className="category-card-productname">
        <p>{productName}</p>
      </div>

      <div className="category-card-button">
        <button>Browse</button>
      </div>
    </div>
  );
};

export default Categorycards;
