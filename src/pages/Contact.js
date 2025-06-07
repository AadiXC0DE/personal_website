import React from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";
import Verticalname from "../components/Verticalname";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact | Aaditya Chowdhury</title>
        <meta
          name="description"
          content="Get in touch with Aaditya Chowdhury to discuss potential projects, collaborations, or job opportunities."
        />
        <link rel="canonical" href="https://aadityachowdhury.dev/contact" />
      </Helmet>
      <Navbar />
      <Fade clear delay={200} duration={1200}>
        <Contactform />
      </Fade>
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
