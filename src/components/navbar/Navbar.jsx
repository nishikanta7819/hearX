import React from "react";
import "./navbar.css";
import cart from "../../assets/shopping-cart.png";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/" className="navbar-link">
              shop
            </Link>
          </li>

          <li>
            <Link to="/headphones" className="navbar-link">
              headphones
            </Link>
          </li>

          <li>
            <Link to="/earbuds" className="navbar-link">
              earbuds
            </Link>
          </li>

          <li>
            <Link to="/speakers" className="navbar-link">
              speakers
            </Link>
          </li>
          <li>
            <Link to="/neckbands" className="navbar-link">
              neckbands
            </Link>
          </li>
          <li>
            <Link to="/earphones" className="navbar-link">
              earphones
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-search">
        <input type="search" placeholder="Search Product" />
      </div>

      <div className="navbar-buttons">
        <div className="navbar-cart">
          <img src={cart} alt="cart" />
        </div>
        <div className="navbar-user">
          <img src={user} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
