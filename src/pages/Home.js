import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import main from "../assets/main_image.png";
import Homebutton from "../components/Homebutton";
import Verticalname from "../components/Verticalname";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="Home_main_text">
          <Fade bottom delay={50}>
            <p className="Home_heading Home_greet">Hi👋 I'm</p>
          </Fade>
          <Fade bottom delay={200}>
            <h1 className="Home_heading Heading_name">Aaditya</h1>
          </Fade>
          <Fade bottom delay={250}>
            <h2 className="Home_heading_2">Software Engineer</h2>
          </Fade>
          <Fade bottom delay={300} duration={1300}>
            <h3 className="Home_heading">
              Passionate software developer and current undergraduate, actively
              interning and crafting innovative projects. Proficient in creating
              user interfaces, writing and testing codes, troubleshooting
              simple/ complex issues, and implementing new features.
            </h3>
          </Fade>
          <Fade bottom delay={320}>
            <h3 className="Button_text">
              Learn more about me by clicking down!!
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
      <Footer />
    </div>
  );
};

export default Home;
