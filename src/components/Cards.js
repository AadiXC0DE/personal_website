import React from "react";
import "./Cards.css";
import Fade from "react-reveal/Fade";
import netflix from "../assets/netflix.png";
import tesla from "../assets/tesla.png";
import crypto from "../assets/crypto.jpg";
import mock from "../assets/mock.jpeg";

const Cards = () => {
  return (
    <div class="container">
      <Fade bottom duration={1300} delay={200}>
        <div class="main">
          <h1 className="experience-heading">projects</h1>

          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img class="exp-img" src={netflix}></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Netflix Clone</h2>
                  <p class="card_text">
                    A webapp built with React.js and TMDB API
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src={mock} class="exp-img"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Mapty APP</h2>
                  <p class="card_text">webapp to track your workout on map</p>
                  <button class="btn card_btn">Read More</button>
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
                  <button class="btn card_btn">Read More</button>
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
                  <p class="card_text">Clone of Tesla website</p>
                  <button class="btn card_btn">Read More</button>
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
                    A chatapp built with React.js and firebase
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src={mock} class="exp-img"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Upcoming!!</h2>
                  <p class="card_text">Stay tuned....</p>
                  <button class="btn card_btn">Read More</button>
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
