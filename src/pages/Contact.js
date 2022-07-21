import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";
import Verticalname from "../components/Verticalname";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Contactform />
      <Fade bottom delay={350} duration={1400}>
        <div className="Vertical_text">
          <Verticalname />
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default Contact;
