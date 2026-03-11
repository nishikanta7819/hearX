import React from "react";
import "./card.css";

const Card = ({ product }) => {
  if (!product) return null;
  return (
    <div className="card">
      <div className="item-image">
        <img
          src="https://www.gonoise.com/cdn/shop/files/Frame_2-removebg-preview.png?v=1752157432"
          alt=""
        />
      </div>
      <div className="item-color">
        <p>Color: {product.colour || "N/A"}</p>
      </div>

      <div className="item-name">
        <p>{product.name}</p>
      </div>

      <div className="item-price">
        <p>&#8377;{product.price}</p>
      </div>

      <div className="add-to-cart">
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default Card;
