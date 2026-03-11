import React from "react";
import Products from "../../Products";
import { Link } from "react-router-dom";

const Headphonesdetails = () => {
  return (
    <div className="product-page-details">
      <div className="product-page-details-left">
        <img src="/" alt="" />
      </div>
      <div className="product-page-details-right">
        <p>
          <Link to="{/}}">{Products.name}</Link>
        </p>
        <p>product details</p>
        <p>product price</p>
        <p>product color</p>
        <div className="buttons">
          <button>add to cart</button>
          <button>buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Headphonesdetails;
