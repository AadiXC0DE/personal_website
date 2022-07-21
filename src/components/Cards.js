import React from "react";
import "./Cards.css";
import Fade from "react-reveal/Fade";

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
                  <img src="https://picsum.photos/500/300/?image=10"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=5"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=11"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>

            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=14"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=17"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=2"></img>
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
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
