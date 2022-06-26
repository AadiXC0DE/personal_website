import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import main from "../assets/main_image.png";
import Homebutton from "../components/Homebutton";
import Verticalname from "../components/Verticalname";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="Home_main_text">
          <Fade bottom delay={50}>
            <p className="Home_heading">Hi👋 I'm</p>
          </Fade>
          <Fade bottom delay={200}>
            <h1 className="Home_heading Heading_name">Aaditya</h1>
          </Fade>
          <Fade bottom delay={250}>
            <h2 className="Home_heading_2">Web Designer and Developer</h2>
          </Fade>
          <Fade bottom delay={300} duration={1300}>
            <h3 className="Home_heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h3>
          </Fade>
          <Fade bottom delay={320}>
            <h3 className="Button_text">
              Learn more about me by clicking on this cool button
            </h3>
            <Homebutton />
          </Fade>
        </div>
        <Fade right delay={300} duration={1300}>
          <img src={main} className="image"></img>
        </Fade>
      </div>
      <Fade bottom delay={350} duration={1400}>
        <div className="Vertical_text">
          <Verticalname />
        </div>
      </Fade>
    </div>
  );
};

export default Home;
