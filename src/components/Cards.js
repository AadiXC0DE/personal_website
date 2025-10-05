import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "./Cards.css";
import netflix from "../assets/netflix.png";
import tesla from "../assets/tesla.png";
import crypto from "../assets/crypto.jpg";
import mapty from "../assets/mapty.png";
import mock from "../assets/mock.jpeg";
import youtube from "../assets/youtube.png";
import qr from "../assets/qr.png";
import quiz from "../assets/quiz.png";
import sarazaiten from "../assets/sarazaiten.png";
import caldy from "../assets/caldy.png";
import craftmine from "../assets/craftmine.png";
import serenity from "../assets/serenity.png";
import neonkit from "../assets/neonkit.png";

const projectsData = [
  {
    title: "Neonkit",
    image: neonkit,
    description:
      "A neon themed set of React components, just copy and paste. Built with Framer Motion, React, and Tailwind CSS.",
    link: "https://get-neonkit.vercel.app/",
    badges: ["2025", "Featured", "In Production"],
  },
  {
    title: "Caldy",
    image: caldy,
    description:
      "Caldy is a platform with Stunning calendar and powerful task management features to help you organize your life beautifully.",
    link: "https://caldy.vercel.app/",
    badges: ["2025", "Featured", "In Production"],
  },
  {
    title: "CraftMine",
    image: craftmine,
    description:
      "CraftMine is simple minecraft clone built with JS and Three.js for the web",
    link: "https://craft-mine.vercel.app/",
    badges: ["2025", "Featured", "In Production"],
  },
  {
    title: "QR Ninja",
    image: qr,
    description:
      "A cool QR code generator with NextJS and TailwindCSS. You can generate QR codes for URLs, text, and even download them as SVGs!",
    link: "https://qr-ninja.vercel.app/",
    badges: ["2024", "Featured", "In Production"],
  },
  {
    title: "Serenity",
    image: serenity,
    description:
      "Serenity is a AI powered therapy companion app powered by Gemini and elevenlabs. Built for Bolt hackathon. (Not maintained anymore, LLMs are costly! Checkout the source code)",
    link: "https://github.com/AadiXC0DE/Serenity",
    badges: ["2023", "AI-powered"],
  },
  {
    title: "Elabs Quiz",
    image: quiz,
    description:
      "An internal quiz app for ELabs KIIT, built with ReactJS, Tailwind CSS and MongoDB. Now in use by 2000+ college students! (Now maintained by Elabs team KIIT)",
    link: "https://github.com/AadiXC0DE/Elabs-Quiz",
    badges: ["2023"],
  },
  {
    title: "Sarazaiten",
    image: sarazaiten,
    description:
      "A webapp built with ReactJS, Tailwind CSS, Framer animations and OpenAI's GPT-3.5 that makes learning DSA free and fun! (Not maintained anymore)",
    link: "https://sarazaiten.netlify.app/",
    badges: ["2023", "AI-powered"],
  },
  // Clones & older projects grouped below
  {
    title: "Youtube Clone",
    image: youtube,
    description: "A working youtube clone built with React and MaterialUI",
    link: "https://capable-paletas-d20ffc.netlify.app/",
    badges: ["2022"],
  },
  {
    title: "Netflix Clone",
    image: netflix,
    description:
      "A webapp built with ReactJS, TMDB API and axios to fetch data from the server.",
    link: "https://dynamic-sable-52dc19.netlify.app/",
    badges: ["2022"],
  },
  {
    title: "Tesla Website Clone",
    image: tesla,
    description:
      "Clone of Tesla website built with React and styled components.",
    link: "https://clever-trifle-e934fc.netlify.app/",
    badges: ["2023"],
  },
  {
    title: "Mapty APP",
    image: mapty,
    description:
      "A webapp to track all your daily workouts on the map. Made with Pure HTML, CSS and JS.",
    link: "https://spiffy-jelly-b513b8.netlify.app/",
    badges: ["2023"],
  },
  {
    title: "NFT website on blockchain",
    image: crypto,
    description:
      "A React.js website to showcase your NFTs, currently in development. Check out the code on GitHub!",
    link: "https://github.com/AadiXC0DE/CryptoPunk",
    badges: ["2023"],
  },
  {
    title: "React Chatapp",
    image: mock,
    description:
      "A chatapp built with React.js and firebase (coming soon!!). Check out the code on GitHub!",
    badges: ["2023"],
  },
];

const Cards = () => {
  return (
    <div className="container">
      <div className="main">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="experience-heading"
        >
          Personal Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="tw-text-white tw-text-center tw-text-lg tw-mt-4 tw-mb-4"
        >
          So many personal projects, here are a few that I am proud of and that
          made an impact in the community. Checkout the rest on my GitHub!
        </motion.p>

        <ul className="cards">
          {projectsData.map((project, index) => (
            <motion.li
              className="cards_item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card">
                <div className="card_image">
                  <img
                    className="exp-img"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title">{project.title}</h2>
                  <p className="card_text">{project.description}</p>
                  {project.badges && (
                    <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mb-3">
                      {project.badges.map((badge, index) => (
                        <span
                          key={index}
                          className={`tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md ${
                            badge === "2025" ||
                            badge === "2024" ||
                            badge === "2023" ||
                            badge === "2022"
                              ? "tw-bg-blue-500/20 tw-text-blue-400 tw-border tw-border-blue-500/30"
                              : badge === "Featured"
                              ? "tw-bg-yellow-500/20 tw-text-yellow-400 tw-border tw-border-yellow-500/30"
                              : badge === "In Production"
                              ? "tw-bg-green-500/20 tw-text-green-400 tw-border tw-border-green-500/30"
                              : badge === "AI-powered"
                              ? "tw-bg-purple-500/20 tw-text-purple-400 tw-border tw-border-purple-500/30"
                              : "tw-bg-gray-500/20 tw-text-gray-400 tw-border tw-border-gray-500/30"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-no-underline"
                    >
                      <button className="btn card_btn">
                        {project.link.includes("github.com")
                          ? "View Code"
                          : "View Project"}
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
