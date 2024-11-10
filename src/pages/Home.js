import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import main from '../assets/main_image.png';
import Verticalname from '../components/Verticalname';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypewriterEffect } from '../utils/TypewriterEffect';

const Home = () => {
  return (
    <div className="tw-bg-black tw-text-white">
      <Navbar />

      <div className="container tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between tw-px-6 lg:tw-px-12 lg:tw-py-16">
        {/* Main Text Section */}
        <div className="Home_main_text tw-flex tw-flex-col tw-space-y-6">
          {/* Greeting with Typewriter Effect */}
          <TypewriterEffect
            text="Hi, I'm Aaditya Chowdhury"
            className="tw-text-4xl lg:tw-text-6xl tw-font-bold tw-leading-tight tw-text-[#4fbdba]"
            cursorClassName="tw-w-1 tw-h-8 tw-bg-emerald-400"
          />

          {/* Subheading with Emphasis */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="tw-text-2xl lg:tw-text-3xl tw-text-gray-300"
          >
            Software Engineer | Turning Ideas into Digital Solutions
          </motion.h2>

          {/* About and Services */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="tw-text-lg tw-text-gray-400 tw-max-w-lg"
          >
            I specialize in transforming concepts into high-quality MVPs and
            scalable digital products. If you're looking to bring your idea to
            life, I'm here to help you create something extraordinary.
          </motion.p>

          {/* Call to Action Button with Attention Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="tw-mt-6 tw-shadow-xl tw-relative"
          >
            <a
              href="https://calendly.com/aadityaz2077/one-on-one"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-relative tw-z-10 tw-block"
            >
              <motion.button
                className="tw-no-underline tw-bg-gray-300 tw-group tw-cursor-pointer tw-relative tw-shadow-2xl tw-rounded-full tw-px-4 tw-py-2 tw-text-sm tw-font-semibold tw-leading-6 tw-text-white tw-inline-block"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#4fbdba',
                  boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)',
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.2, ease: 'easeInOut' },
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.div
                  className="tw-relative tw-flex tw-space-x-2 tw-items-center tw-z-10 tw-rounded-full tw-bg-black tw-py-1.5 tw-px-6"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="tw-text-lg tw-font-bold tw-tracking-wide">
                    Book a Call
                  </span>
                  <svg
                    fill="none"
                    height="30"
                    viewBox="0 0 24 24"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    className="tw-animate-bounce"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="tw-mt-12 lg:tw-mt-0 tw-flex tw-justify-center"
        >
          <img
            src={main}
            alt="Aaditya"
            className="tw-w-2/3 sm:tw-w-1/2 lg:tw-w-full tw-max-w-lg tw-object-contain"
          />
        </motion.div>
      </div>

      {/* Vertical Name and Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="Vertical_text tw-flex tw-justify-center tw-py-8"
      >
        <Verticalname />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
