import React from "react";
import "./Cards.css";
import Fade from "react-reveal/Fade";
import netflix from "../assets/netflix.png";
import tesla from "../assets/tesla.png";
import crypto from "../assets/crypto.jpg";
import mapty from "../assets/mapty.png";
import mock from "../assets/mock.jpeg";
import youtube from "../assets/youtube.png";

const Cards = () => {
  return (
    <div class="container">
      <Fade bottom duration={1300} delay={200}>
        <div class="main">
          <h1 className="experience-heading">Projects</h1>

          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img class="exp-img" src={netflix}></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Netflix Clone</h2>
                  <p class="card_text">
                    A webapp built with ReactJS, TMDB API and axios to fetch
                    data from the server.
                  </p>
                  <a
                    href=" https://dynamic-sable-52dc19.netlify.app/"
                    target="_blank"
                  >
                    <button class="btn card_btn">Read More</button>
                  </a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src={mapty} class="exp-img"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Mapty APP</h2>
                  <p class="card_text">
                    {" "}
                    A webapp to track all your daily workouts on the map. Made
                    with Pure HTML, CSS and JS.
                  </p>
                  <a
                    href="https://spiffy-jelly-b513b8.netlify.app/"
                    target="_blank"
                  >
                    <button class="btn card_btn">Read More</button>
                  </a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src={crypto} class="exp-img"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">NFT website on blockchain</h2>
                  <p class="card_text">
                    A React.js website to showcase your NFTs
                  </p>
                  <a
                    href="https://github.com/AadiXC0DE/CryptoPunk"
                    target="_blank"
                  >
                    <button class="btn card_btn">Read More</button>
                  </a>
                </div>
              </div>
            </li>

            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src={tesla} class="exp-img"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Tesla Website Clone</h2>
                  <p class="card_text">
                    Clone of Tesla website built with React and styled
                    components
                  </p>
                  <a
                    href="https://clever-trifle-e934fc.netlify.app/"
                    target="_blank"
                  >
                    <button class="btn card_btn">Read More</button>
                  </a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src={mock} class="exp-img"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">React Chatapp</h2>
                  <p class="card_text">
                    A chatapp built with React.js and firebase (coming soon!!)
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src={youtube} class="exp-img"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Youtube Clone</h2>
                  <p class="card_text">
                    A working youtube clone built with React and MaterialUI
                  </p>
                  <a
                    href="https://capable-paletas-d20ffc.netlify.app/"
                    target="_blank"
                  >
                    <button class="btn card_btn">Read More</button>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default Cards;
