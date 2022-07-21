import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import image from "../assets/my_image.jpg";
import Resumebutton from "../components/Resumebutton";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";
import Verticalname from "../components/Verticalname";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about_container">
        <Fade left delay={50} duration={1400}>
          <img src={image} className="my_image"></img>
        </Fade>
        <div className="about_text">
          <Fade bottom delay={100}>
            <h1 className="about_heading">About me</h1>
          </Fade>
          <div className="about_content">
            <Fade bottom delay={300}>
              <p>
                I’m Oluwakemi Adeleke, a professional and talented Product
                Designer with front end development skills. I am passionate
                about leveraging my diverse backgrounds to decipher challenging
                problems and create delightful experiences. I honed my skills at
                web development, technical writing, product design and SEO
                analytics.
              </p>
            </Fade>
            <Fade bottom delay={500}>
              <p>
                I develop websites with HTML, CSS and JavaScript. I have top
                skills in using design softwares like Figma, Adobe XD, Invision
                and PhotoShop; with prototype tools like Framer and Protopie.
              </p>
            </Fade>
            <Fade bottom delay={700}>
              <p>
                Being a diligent, hardworking and result oriented lady, I always
                work towards achieving best result on each project I lay my
                hands on.
              </p>
            </Fade>
            <Fade bottom delay={750}>
              <Resumebutton />
            </Fade>
          </div>
        </div>
      </div>
      <Fade bottom delay={350} duration={1400}>
        <div className="Vertical_text">
          <Verticalname />
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default About;
