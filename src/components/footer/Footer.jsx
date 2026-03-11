import React from "react";
import "./footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>Hear X</p>
      </div>
      <div className="email-alerts">
        <p>Subscribe to our e-mail alerts!</p>
        <input type="text" placeholder="Email Address" />
      </div>
      <div className="footer-links">
        <div className="footer-link">
          <p>Shop</p>
          <ul>
            <li>
              <Link to="/headphones" className="footer-links-product-category">
                headphones
              </Link>
            </li>
            <li>
              <Link to="/earbuds" className="footer-links-product-category">
                earbuds
              </Link>
            </li>
            <li>
              <Link to="/speakers" className="footer-links-product-category">
                speakers
              </Link>
            </li>
            <li>
              <Link to="/neckbands" className="footer-links-product-category">
                neckbands
              </Link>
            </li>
            <li>
              <Link to="/earphones" className="footer-links-product-category">
                earphones
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-link">
          <p>Customer Care</p>
          <ul>
            <li>track your order</li>
            <li>return policy</li>
            <li>service centers</li>
            <li>download invoice</li>
            <li>warranty and support</li>
          </ul>
        </div>
        <div className="footer-link">
          <p>Company</p>
          <ul>
            <li>about us</li>
            <li>news</li>
            <li>privacy policy</li>
            <li>terms of use</li>
            <li>careers</li>
          </ul>
        </div>
      </div>
      <div className="social">
        <p>Let's get social</p>
        <div className="social-links">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
