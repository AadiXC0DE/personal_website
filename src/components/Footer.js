import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="left">
            <p className="copyright">@aaditya chowdhury</p>
          </div>
          <div className="right">
            <ul className="icons">
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <GrMail />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
