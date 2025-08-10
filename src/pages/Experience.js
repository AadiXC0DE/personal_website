import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import "../App.css";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Verticalname from "../components/Verticalname";
import Fade from "react-reveal/Fade";
import VerticalTimeline from "../components/VerticalTimeline";

const Experience = () => {
  return (
    <div className="tw-text-white">
      <Helmet>
        <title>Experience | Aaditya Chowdhury</title>
        <meta
          name="description"
          content="Explore the work experience of Aaditya Chowdhury, including his roles and accomplishments in the software engineering field."
        />
        <link rel="canonical" href="https://aadityachowdhury.dev/experience" />
      </Helmet>
      <Navbar />
      <div className="vertical_timeline_container">
        <VerticalTimeline />
      </div>
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
