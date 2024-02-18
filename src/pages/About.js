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
          <img
            alt="my_image"
            src={image}
            className="my_image tw-rounded-lg"
          ></img>
        </Fade>
        <div className="about_text">
          <Fade bottom delay={100}>
            <h1 className="about_heading">About me</h1>
          </Fade>
          <div className="about_content">
            <Fade bottom delay={300}>
              <p>
                Hey there, I'm Aaditya Chowdhury, your friendly neighborhood
                Software Engineer on a mission to make the digital world a
                cooler place, one line of code at a time! Picture this: a fusion
                of creativity, tech wizardry, and a sprinkle of mad scientist
                vibes—that's me in a nutshell. When I'm not busy crafting
                jaw-dropping websites with JavaScript and ReactJS, you'll find
                me geeking out over the latest design trends in Figma, where I
                transform pixels into pure magic. But hey, I'm not just about
                making things pretty—I'm also diving headfirst into MongoDB,
                Docker, and Tailwind, because why settle for ordinary when you
                can embrace the extraordinary?
              </p>
            </Fade>
            <Fade bottom delay={500}>
              <p>
                From building epic language models to rocking TypeScript and
                ReactJS like a boss, my portfolio is a playground of innovation
                and awesomeness. So buckle up and join me on this wild ride as
                we redefine the boundaries of cool in the ever-evolving world of
                software engineering.
              </p>
            </Fade>
            <Fade bottom delay={700}>
              <p>
                The future? Oh, it's looking pretty darn rad with me leading the
                charge! 🚀✨
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
