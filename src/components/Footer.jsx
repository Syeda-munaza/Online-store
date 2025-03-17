import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        <h3>
          <img src="shopping-cart.png" alt="" /> Shopaholic's Haven
        </h3>
      </div>
      <div className="second">
        <h3>Quick Links</h3>
        <li>
          <a href="">&rarr; Home</a>
        </li>
        <li>
          <a href="">&rarr; Shop</a>
        </li>
        <li>
          <a href="">&rarr; About</a>
        </li>
        <li>
          <a href="">&rarr; Contact</a>
        </li>
        <li>
          <a href="">&rarr; Privacy Policy</a>
        </li>
      </div>
      <div className="third">
        <h3>Accounts</h3>
        <li>
          <a href="">&rarr; Login</a>
        </li>
        <li>
          <a href="">&rarr; Signup</a>
        </li>
      </div>
    </div>
  );
};

export default Footer;
