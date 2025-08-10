import React from "react";
import "./Contactform.css";
import { SiGmail } from "react-icons/si";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Contactform = () => {
  return (
    <div className="contact-box">
      <Fade bottom duration={1300} delay={200}>
        <h1 className="contact-heading">Connect With Me</h1>
      </Fade>
      <hr className="line"></hr>
      <Fade bottom duration={1300} delay={300}>
        <h2>
          Got a project in mind? Schedule a call with me, and let's chat about
          how we can work together.
          <br />
          <br />
          I'm always open to exciting projects, let's ship something awesome!
        </h2>
      </Fade>

      <Fade bottom duration={1300} delay={800}>
        <div className="contact-detail">
          <a href="mailto:aadityaz2077@gmail.com">
            <SiGmail />
          </a>

          <a
            href="https://www.linkedin.com/in/aaditya-chowdhury-14a5a921b/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a href="https://github.com/AadiXC0DE" target="_blank">
            <AiFillGithub />
          </a>

          <a href="https://twitter.com/AadiChowdhury7" target="_blank">
            <AiFillTwitterCircle />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Contactform;
