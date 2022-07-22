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
                <a href="https://www.linkedin.com/in/aaditya-chowdhury-14a5a921b/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aaditya-chowdhury-14a5a921b/">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/simply_being_aadi/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="mailto:aadityaz2077@gmail.com">
                  <GrMail />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
