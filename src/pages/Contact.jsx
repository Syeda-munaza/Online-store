import React from "react";
import Header from "../components/Header";
import "./Contact.css";
import { FaAddressBook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="head">
          <h1>#CONTACT-US</h1>
        </div>
        <div className="contact-cont">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5086510219703!2d74.30691007430738!3d31.592519343576175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c82d18c2ced%3A0x1aa4688a984fdde1!2sMinar-e-Pakistan!5e0!3m2!1sen!2s!4v1734008389219!5m2!1sen!2s"
            width="500"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="text">
            <p>GET IN TOUCH</p>
            <h2>Contact us today</h2>
            <h3>Head Office</h3>
            <div className="icons">
              <h5>
                <FaAddressBook /> house #4, street #6, Lahore, Pakistan
              </h5>
              <h5>
                <CgMail /> Shopaholic's-Haven.gmail.com
              </h5>
              <h5>
                <FaPhoneAlt /> 0310-1459167
              </h5>
              <h5>
                <IoTime /> Monday to Saturday 9AM to 6PM
              </h5>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
