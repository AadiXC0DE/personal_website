import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './Cards.css';
import netflix from '../assets/netflix.png';
import tesla from '../assets/tesla.png';
import crypto from '../assets/crypto.jpg';
import mapty from '../assets/mapty.png';
import mock from '../assets/mock.jpeg';
import youtube from '../assets/youtube.png';
import qr from '../assets/qr.png';
import quiz from '../assets/quiz.png';
import sarazaiten from '../assets/sarazaiten.png';

const projectsData = [
  {
    title: 'QR Ninja',
    image: qr,
    description:
      'A cool QR code generator with NextJS and TailwindCSS. You can generate QR codes for URLs, text, and even download them as SVGs!',
    link: 'https://qr-ninja.vercel.app/',
  },
  {
    title: 'Elabs Quiz',
    image: quiz,
    description:
      'An internal quiz app for ELabs KIIT, built with ReactJS, Tailwind CSS and MongoDB. Now in use by 2000+ college students!',
    link: 'https://elabs-quiz.vercel.app/',
  },
  {
    title: 'Sarazaiten',
    image: sarazaiten,
    description:
      "A webapp built with ReactJS, Tailwind CSS, Framer animations and OpenAI's GPT-3.5 that makes learning DSA free and fun!",
    link: 'https://sarazaiten.netlify.app/',
  },
  {
    title: 'Netflix Clone',
    image: netflix,
    description:
      'A webapp built with ReactJS, TMDB API and axios to fetch data from the server.',
    link: 'https://dynamic-sable-52dc19.netlify.app/',
  },
  {
    title: 'Mapty APP',
    image: mapty,
    description:
      'A webapp to track all your daily workouts on the map. Made with Pure HTML, CSS and JS.',
    link: 'https://spiffy-jelly-b513b8.netlify.app/',
  },
  {
    title: 'NFT website on blockchain',
    image: crypto,
    description:
      'A React.js website to showcase your NFTs, currently in development. Check out the code on GitHub!',
    link: 'https://github.com/AadiXC0DE/CryptoPunk',
  },
  {
    title: 'Tesla Website Clone',
    image: tesla,
    description:
      'Clone of Tesla website built with React and styled components.',
    link: 'https://clever-trifle-e934fc.netlify.app/',
  },
  {
    title: 'React Chatapp',
    image: mock,
    description:
      'A chatapp built with React.js and firebase (coming soon!!). Check out the code on GitHub!',
  },
  {
    title: 'Youtube Clone',
    image: youtube,
    description: 'A working youtube clone built with React and MaterialUI',
    link: 'https://capable-paletas-d20ffc.netlify.app/',
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
          className="experience-heading tw-mt-8"
        >
          Projects
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
                <motion.div
                  className="card_image"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    className="exp-img"
                    src={project.image}
                    alt={project.title}
                  />
                </motion.div>
                <div className="card_content">
                  <h2 className="card_title">{project.title}</h2>
                  <p className="card_text">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-no-underline"
                    >
                      <button className="btn card_btn">Read More</button>
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
