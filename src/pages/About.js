import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Verticalname from '../components/Verticalname';
import { FaBriefcase, FaRocket } from 'react-icons/fa';
import { TypewriterEffect } from '../utils/TypewriterEffect';

const About = () => {
  return (
    <div className="tw-bg-black tw-text-white">
      <Navbar />

      <div className="about_container tw-flex tw-flex-col tw-items-start tw-px-6 tw-py-12 lg:tw-py-20 lg:tw-max-w-5xl lg:tw-mx-auto">
        {/* Typewriter effect for heading */}
        <TypewriterEffect
          text="I'm a software engineer, bringing ideas to life through impactful MVPs."
          className="tw-text-5xl tw-font-bold tw-text-left"
          cursorClassName="tw-w-1 tw-h-8"
        />

        <TypewriterEffect
          text="Turning concepts into reality with powerful digital experiences."
          className="tw-text-xl tw-text-gray-400 tw-mt-2 tw-text-left"
          cursorClassName="tw-w-1 tw-h-6"
        />

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="experience_section tw-flex tw-flex-col tw-items-start tw-bg-gray-900 tw-rounded-xl tw-shadow-lg tw-p-8 tw-w-full md:tw-w-4/5 lg:tw-w-full tw-mt-10 tw-mb-10"
        >
          <div className="section_header tw-flex tw-items-center tw-space-x-3">
            <FaBriefcase className="tw-text-3xl tw-text-teal-500 tw-transition-transform hover:tw-scale-110" />
            <h2 className="tw-text-3xl tw-font-semibold">Experience</h2>
          </div>
          <ul className="tw-mt-6 tw-space-y-6">
            <li>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h3 className="tw-text-xl tw-font-semibold tw-text-teal-400">
                  SDE Intern at Ownpath
                </h3>
                <p className="tw-text-gray-300 tw-mt-2">
                  <span className="tw-font-medium tw-text-teal-500">Role:</span>{' '}
                  Developed a health tech app for Philips Innovation, enabling
                  faster health scans and boosting user engagement by{' '}
                  <span className="tw-text-white tw-font-semibold">25%</span>.
                </p>
                <p className="tw-text-gray-400 tw-mt-1">
                  <span className="tw-font-medium tw-text-teal-500">Tech:</span>{' '}
                  Created an engaging frontend with React and Tailwind;
                  engineered backend APIs using Node.js and MongoDB for
                  real-time data processing.
                </p>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h3 className="tw-text-xl tw-font-semibold tw-text-teal-400">
                  SWE Intern at Gastrogate AB
                </h3>
                <p className="tw-text-gray-300 tw-mt-2">
                  <span className="tw-font-medium tw-text-teal-500">Role:</span>{' '}
                  Developed essential components for a React-based admin
                  platform, integrating GraphQL for data efficiency and a fuzzy
                  search bar that reduced search times by{' '}
                  <span className="tw-text-white tw-font-semibold">50%</span>.
                </p>
                <p className="tw-text-gray-400 tw-mt-1">
                  <span className="tw-font-medium tw-text-teal-500">
                    Impact:
                  </span>{' '}
                  Increased user engagement by 30% with data-driven
                  improvements.
                </p>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <h3 className="tw-text-xl tw-font-semibold tw-text-teal-400">
                  Web Dev & NLP Intern at Symmulate Labs
                </h3>
                <p className="tw-text-gray-300 tw-mt-2">
                  <span className="tw-font-medium tw-text-teal-500">
                    Highlights:
                  </span>{' '}
                  Created 10+ chatbot UIs and optimized LLMs for quicker
                  response times. As a founding engineer, led development
                  resulting in{' '}
                  <span className="tw-text-white tw-font-semibold">
                    acquisition by Adda247
                  </span>
                  .
                </p>
              </motion.div>
            </li>
          </ul>
        </motion.div>

        {/* Freelance & MVP Work Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="freelance_section tw-flex tw-flex-col tw-items-start tw-bg-gray-900 tw-rounded-xl tw-shadow-lg tw-p-8 tw-w-full md:tw-w-4/5 lg:tw-w-full tw-mt-10 tw-mb-10"
        >
          <div className="section_header tw-flex tw-items-center tw-space-x-3">
            <FaRocket className="tw-text-3xl tw-text-teal-500 tw-transition-transform hover:tw-scale-110" />
            <h2 className="tw-text-3xl tw-font-semibold">
              Freelance & MVP Work
            </h2>
          </div>
          <div className="tw-mt-6">
            <motion.p
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="tw-text-gray-300"
            >
              I bring MVPs to life through focused, impactful development. As a
              founding engineer at Symmulate Labs, I helped create an
              educational LLM chatbot, later acquired by{' '}
              <span className="tw-text-white tw-font-semibold">Adda247</span>.
            </motion.p>
            <ul className="tw-mt-4 tw-space-y-3 tw-text-gray-400">
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                Developed MVPs for clients focused on user experience and rapid
                deployment.
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                Transformed ideas into robust, functional prototypes ready for
                market validation.
              </motion.li>
            </ul>
            <motion.p
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="tw-mt-4 tw-text-gray-300 tw-font-semibold"
            >
              Have an idea? Let’s connect and make it happen!
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="Vertical_text"
      >
        <Verticalname />
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;
