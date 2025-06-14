import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import '../App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Verticalname from '../components/Verticalname';
import Fade from 'react-reveal/Fade';
import VerticalTimeline from '../components/VerticalTimeline';
import { TypewriterEffect } from '../utils/TypewriterEffect';

const Experience = () => {
  return (
    <div>
      <Helmet>
        <title>Experience | Aaditya Chowdhury</title>
        <meta
          name="description"
          content="Explore the work experience of Aaditya Chowdhury, including his roles and accomplishments in the software engineering field."
        />
        <link rel="canonical" href="https://aadityachowdhury.dev/experience" />
      </Helmet>
      <Navbar />
      <TypewriterEffect
        text="Experience"
        className="tw-text-4xl tw-font-bold tw-text-center tw-pl-4 sm:tw-text-center tw-text-white tw-pb-4 "
        cursorClassName="tw-w-1 tw-h-8"
      />
      <div className="vertical_timeline_container">
        <VerticalTimeline />
      </div>
      <Cards />
      <Fade bottom delay={450} duration={1400}>
        <div className="Vertical_text">
          <Verticalname />
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default Experience;
