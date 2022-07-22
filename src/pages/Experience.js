import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Verticalname from "../components/Verticalname";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Fade bottom delay={450} duration={1400}>
        <div className="Vertical_text">
          <Verticalname />
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default Experience;
