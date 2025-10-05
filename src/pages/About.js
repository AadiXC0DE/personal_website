import React from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Verticalname from "../components/Verticalname";
// Removed heavy icons to reduce AI-generated feel
import { TypewriterEffect } from "../utils/TypewriterEffect";
import BlogSection from "../components/BlogSection";

const About = () => {
  // Add state to manage visibility of expanded content for each section
  const [expandedSections, setExpandedSections] = React.useState({});

  // Toggle function for expanding/collapsing sections
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="tw-text-white">
      <Helmet>
        <title>About | Aaditya Chowdhury</title>
        <meta
          name="description"
          content="Learn more about Aaditya Chowdhury, a passionate software engineer with experience in building web applications and AI-powered solutions."
        />
        <link rel="canonical" href="https://aadityachowdhury.dev/about" />
      </Helmet>
      <Navbar />

      <div className="about_container tw-flex tw-flex-col tw-items-center tw-px-3 sm:tw-px-6 tw-max-w-5xl tw-mx-auto">
        {/* Typewriter effect for heading */}
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
          <TypewriterEffect
            text="I'm a software engineer, bringing ideas to life"
            className="tw-text-4xl sm:tw-text-5xl tw-font-bold"
            cursorClassName="tw-w-1 tw-h-8"
          />

          <TypewriterEffect
            text="Bringing your vision to life."
            className="tw-text-xl sm:tw-text-2xl tw-text-gray-400 tw-mt-3"
            cursorClassName="tw-w-1 tw-h-6"
          />
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="experience_section tw-flex tw-flex-col tw-items-start tw-bg-black/30 tw-backdrop-blur-sm tw-border tw-border-white/10 tw-rounded-xl tw-shadow-none tw-transition-shadow tw-p-6 sm:tw-p-8 tw-w-full md:tw-w-full lg:tw-w-full tw-mt-10 tw-mb-10"
        >
          <div className="section_header tw-flex tw-items-center tw-space-x-3 tw-mb-6">
            <h2 className="tw-text-3xl tw-font-semibold">Highlights</h2>
          </div>

          <div className="tw-mt-6 tw-space-y-8">
            {/* Ownpath Experience */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="tw-border-l-2 tw-border-teal-500 tw-pl-0 tw-py-2"
            >
              <h3 className="tw-text-2xl tw-font-bold tw-text-white">
                <span className="tw-font-bold">Ownpath</span>
              </h3>
              <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                <p className="tw-text-gray-400 tw-text-sm">
                  Software Engineer • 2024 - Present
                </p>
                <span className="tw-text-xs tw-px-2 tw-py-1 tw-bg-gray-800 tw-rounded-full tw-text-gray-300 tw-border tw-border-gray-700 tw-w-fit tw-mt-1 sm:tw-mt-0">
                  Hybrid
                </span>
              </div>

              <div className="tw-mt-6 tw-space-y-8">
                {/* Philips Innovation */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="tw-border-l-2 tw-border-blue-500 tw-pl-0 tw-py-2"
                >
                  <h4 className="tw-text-lg tw-font-semibold tw-text-blue-400">
                    Philips Innovation
                  </h4>
                  <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                    <p className="tw-text-gray-400 tw-text-sm">
                      Software Engineer • Led Heartprint Mobile App Development
                    </p>
                  </div>

                  <div className="tw-mt-3 tw-space-y-3">
                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-blue-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Led development as the sole engineer for a{" "}
                        <span className="tw-font-medium tw-text-white">
                          PWA health app
                        </span>{" "}
                        that scans fingers to capture vitals and predict diseases using open-source algorithms and health questionnaires, boosting user engagement by{" "}
                        <span className="tw-text-white tw-font-semibold">25%</span>.
                      </p>
                    </div>

                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-blue-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Built scalable backend infrastructure with{" "}
                        <span className="tw-font-medium tw-text-white">
                          React, D3.js, Express.js, and Careplix SDK
                        </span>
                        , serving thousands of users through the Heartprint mobile app with real-time data processing and advanced health analytics.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Hero MotoCorp */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="tw-border-l-2 tw-border-orange-500 tw-pl-0 tw-py-2"
                >
                  <h4 className="tw-text-lg tw-font-semibold tw-text-orange-400">
                    Hero MotoCorp
                  </h4>
                  <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                    <p className="tw-text-gray-400 tw-text-sm">
                      Software Engineer • AI & Design Tools
                    </p>
                  </div>

                  <div className="tw-mt-3 tw-space-y-3">
                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-orange-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Developed AI-powered tools including design analyzer and writing assistant to enhance design team workflows, making the design process faster and more efficient for{" "}
                        <span className="tw-font-medium tw-text-white">
                          Hero MotoCorp
                        </span>
                        's creative teams.
                      </p>
                    </div>

                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-orange-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Maintained and built multiple frontend components for the{" "}
                        <span className="tw-font-medium tw-text-white">
                          Hero Echo Webapp
                        </span>
                        , an internal design system tool that streamlined component reusability and design consistency across Hero Vida's digital platforms.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Koolio.ai */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="tw-border-l-2 tw-border-purple-500 tw-pl-0 tw-py-2"
                >
                  <h4 className="tw-text-lg tw-font-semibold tw-text-purple-400">
                    Koolio.ai
                  </h4>
                  <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                    <p className="tw-text-gray-400 tw-text-sm">
                      Lead Frontend Engineer • AI Audio Editor
                    </p>
                  </div>

                  <div className="tw-mt-3 tw-space-y-3">
                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-purple-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Led development from scratch as the sole frontend engineer for
                        AI-powered audio editor, serving thousands of active users.
                      </p>
                    </div>

                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-purple-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Implemented advanced audio editing features including transcript-based editing, waveform manipulation, AI-generated sound effects, drag-and-drop functionality, and professional-grade operations comparable to Adobe Audition and Descript.
                      </p>
                    </div>

                    <AnimatePresence>
                      {(expandedSections["koolio"] || window.innerWidth >= 640) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="tw-overflow-hidden"
                        >
                          <div className="tw-flex tw-items-start">
                            <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-purple-400 tw-flex-shrink-0"></div>
                            <p className="tw-text-gray-300">
                              Built with{" "}
                              <span className="tw-font-medium tw-text-white">
                                React, WavesurferJS, FFmpeg, and Express.js
                              </span>
                              , delivering a robust audio editing platform used by content creators and professionals worldwide.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Toggle button - only visible on mobile */}
                  <p
                    onClick={() => toggleSection("koolio")}
                    className="tw-text-purple-400 tw-text-sm tw-mt-2 tw-ml-[18px] sm:tw-hidden tw-cursor-pointer tw-hover:underline"
                  >
                    {expandedSections["koolio"] ? "See less" : "See more"}
                  </p>
                </motion.div>

                {/* Realfast AI */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.85, duration: 0.6 }}
                  className="tw-border-l-2 tw-border-emerald-500 tw-pl-0 tw-py-2"
                >
                  <h4 className="tw-text-lg tw-font-semibold tw-text-emerald-400">
                    Realfast AI
                  </h4>
                  <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                    <p className="tw-text-gray-400 tw-text-sm">
                      Frontend Developer • Official Website
                    </p>
                  </div>

                  <div className="tw-mt-3 tw-space-y-3">
                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Built multiple frontend components for the Realfast AI official website, creating engaging user interfaces with modern React patterns and responsive design principles.
                      </p>
                    </div>

                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Implemented smooth animations and micro-interactions using{" "}
                        <span className="tw-font-medium tw-text-white">
                          Framer Motion
                        </span>
                        , enhancing user experience and visual appeal across all platform pages and components.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* General Ownpath Work */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="tw-border-l-2 tw-border-teal-500 tw-pl-0 tw-py-2"
                >
                  <h4 className="tw-text-lg tw-font-semibold tw-text-teal-400">
                    Additional Projects
                  </h4>

                  <div className="tw-mt-3 tw-space-y-3">
                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Developed AI agents for designer website analysis
                        using LLM and LangChain.
                      </p>
                    </div>

                    <div className="tw-flex tw-items-start">
                      <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                      <p className="tw-text-gray-300">
                        Built WhatsApp chatbot for job posting and application management for the Ownpath community, automating recruitment processes and improving hiring efficiency.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Toggle button - only visible on mobile */}
              <p
                onClick={() => toggleSection("ownpath")}
                className="tw-text-teal-400 tw-text-sm tw-mt-2 tw-ml-[18px] sm:tw-hidden tw-cursor-pointer tw-hover:underline"
              >
                {expandedSections["ownpath"] ? "See less" : "See more"}
              </p>

              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-3 tw-pl-[18px]">
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">
                  React
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">
                  Node.js
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">
                  MongoDB
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">
                  LangChain
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">
                  Tailwind
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">
                  Express
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">
                  WavesurferJS
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">
                  VueJS
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">
                  Nuxt
                </span>
              </div>
            </motion.div>

            {/* Gastrogate Experience */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="tw-border-l-2 tw-border-teal-500/40 tw-pl-0 tw-py-2"
            >
              <h3 className="tw-text-2xl tw-font-bold tw-text-white">
                Gastrogate AB
              </h3>
              <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                <p className="tw-text-gray-400 tw-text-sm">
                  SWE Intern • 2023 - 2024
                </p>
                <span className="tw-text-xs tw-px-2 tw-py-1 tw-bg-gray-800 tw-rounded-full tw-text-gray-300 tw-border tw-border-gray-700 tw-w-fit tw-mt-1 sm:tw-mt-0">
                  Sweden (Remote)
                </span>
              </div>

              <div className="tw-mt-3 tw-space-y-3">
                <div className="tw-flex tw-items-start">
                  <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                  <p className="tw-text-gray-300">
                    Developed essential components for a React-based admin
                    platform with GraphQL integration.
                  </p>
                </div>

                <AnimatePresence>
                  {(expandedSections["gastrogate"] ||
                    window.innerWidth >= 640) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="tw-space-y-3 tw-overflow-hidden"
                    >
                      <div className="tw-flex tw-items-start">
                        <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                        <p className="tw-text-gray-300">
                          Built fuzzy search functionality in the{" "}
                          <span className="tw-font-medium tw-text-white">
                            Gastrogate mobile app
                          </span>{" "}
                          used by thousands in Sweden, reducing search times
                          by{" "}
                          <span className="tw-text-white tw-font-semibold">
                            50%
                          </span>
                          .
                        </p>
                      </div>

                      <div className="tw-flex tw-items-start">
                        <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                        <p className="tw-text-gray-300">
                          Increased user engagement by{" "}
                          <span className="tw-text-white tw-font-semibold">
                            30%
                          </span>{" "}
                          with data-driven improvements.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Toggle button - only visible on mobile */}
              <p
                onClick={() => toggleSection("gastrogate")}
                className="tw-text-teal-400 tw-text-sm tw-mt-2 tw-ml-[18px] sm:tw-hidden tw-cursor-pointer tw-hover:underline"
              >
                {expandedSections["gastrogate"] ? "See less" : "See more"}
              </p>

              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-3 tw-pl-[18px]">
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-indigo-500/10 tw-text-indigo-400">
                  React
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-indigo-500/10 tw-text-indigo-400">
                  TypeScript
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-indigo-500/10 tw-text-indigo-400">
                  GraphQL
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-indigo-500/10 tw-text-indigo-400">
                  Expo
                </span>
              </div>
            </motion.div>

            {/* Symmulate Labs Experience */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="tw-border-l-2 tw-border-teal-500/40 tw-pl-0 tw-py-2"
            >
              <h3 className="tw-text-2xl tw-font-bold tw-text-white">
                Symmulate Labs
              </h3>
              <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                <p className="tw-text-gray-400 tw-text-sm">
                  <span className="tw-font-bold tw-text-white">Founding Engineer</span> • 2023 - 2023
                </p>
                <div className="tw-flex tw-items-center tw-gap-2 tw-mt-1 sm:tw-mt-0">
                  <span className="tw-text-xs tw-px-2 tw-py-1 tw-bg-amber-500/20 tw-text-amber-400 tw-rounded-full tw-border tw-border-amber-500/30">
                    Acquired by Adda247
                  </span>
                  <span className="tw-text-xs tw-px-2 tw-py-1 tw-bg-gray-800 tw-rounded-full tw-text-gray-300 tw-border tw-border-gray-700 tw-w-fit">
                    IIT Mandi
                  </span>
                </div>
              </div>
              <div className="tw-mt-3 tw-space-y-3">
                <div className="tw-flex tw-items-start">
                  <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                  <p className="tw-text-gray-300">
                    Created 10+ chatbot UIs and optimized LLMs achieving{" "}
                    <span className="tw-text-white tw-font-semibold">50%</span>{" "}
                    faster inference for EdTech applications.
                  </p>
                </div>

                <AnimatePresence>
                  {(expandedSections["symmulate"] ||
                    window.innerWidth >= 640) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="tw-space-y-3 tw-overflow-hidden"
                    >
                      <div className="tw-flex tw-items-start">
                        <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                        <p className="tw-text-gray-300">
                          As founding engineer, led development of
                          an EdTech chatbot platform resulting in
                          <span className="tw-text-white tw-font-semibold">
                            {" "}
                            acquisition by Adda247
                          </span>
                          .
                        </p>
                      </div>

                      <div className="tw-flex tw-items-start">
                        <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                        <p className="tw-text-gray-300">
                          Created and optimized RVC (Retrieval-based Voice Conversion) models for voice synthesis applications.
                        </p>
                      </div>

                      <div className="tw-flex tw-items-start">
                        <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                        <p className="tw-text-gray-300">
                          Developed AI agents using{" "}
                          <span className="tw-font-medium tw-text-white">
                            Python and LangChain
                          </span>{" "}
                          to solve complex university-level mathematics questions with high accuracy.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Toggle button - only visible on mobile */}
              <p
                onClick={() => toggleSection("symmulate")}
                className="tw-text-teal-400 tw-text-sm tw-mt-2 tw-ml-[18px] sm:tw-hidden tw-cursor-pointer tw-hover:underline"
              >
                {expandedSections["symmulate"] ? "See less" : "See more"}
              </p>

              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-3 tw-pl-[18px]">
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-amber-500/10 tw-text-amber-400">
                  Python
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-amber-500/10 tw-text-amber-400">
                  LLMs
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-amber-500/10 tw-text-amber-400">
                  Chatbots
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-amber-500/10 tw-text-amber-400">
                  NLP
                </span>
              </div>
            </motion.div>

            {/* Elabs Experience */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="tw-border-l-2 tw-border-teal-500/40 tw-pl-0 tw-py-2"
            >
              <h3 className="tw-text-2xl tw-font-bold tw-text-white">
                <span className="tw-font-bold">Elabs Platform</span>
              </h3>
              <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                <p className="tw-text-gray-400 tw-text-sm">
                  Frontend Engineer • 2022
                </p>
                <span className="tw-text-xs tw-px-2 tw-py-1 tw-bg-gray-800 tw-rounded-full tw-text-gray-300 tw-border tw-border-gray-700 tw-w-fit tw-mt-1 sm:tw-mt-0">
                  Remote
                </span>
              </div>

              <div className="tw-mt-3 tw-space-y-3">
                <div className="tw-flex tw-items-start">
                  <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                  <p className="tw-text-gray-300">
                    Created engaging UX through image optimization and code
                    refinement using React, JavaScript, Styled Components, and
                    Framer Motion.
                  </p>
                </div>

                <AnimatePresence>
                  {(expandedSections["elabs"] || window.innerWidth >= 640) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="tw-space-y-3 tw-overflow-hidden"
                    >
                      <div className="tw-flex tw-items-start">
                        <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                        <p className="tw-text-gray-300">
                          Developed responsive SPAs with MUI, Tailwind CSS, and
                          Next.js.
                        </p>
                      </div>

                      <div className="tw-flex tw-items-start">
                        <div className="tw-mt-2 tw-mr-3 tw-h-2 tw-w-2 tw-rounded-full tw-bg-teal-400 tw-flex-shrink-0"></div>
                        <p className="tw-text-gray-300">
                          Optimized platform with Express.js and AWS, boosting
                          user base by{" "}
                          <span className="tw-text-white tw-font-semibold">
                            70%
                          </span>
                          to 2000+ and reducing load times by{" "}
                          <span className="tw-text-white tw-font-semibold">
                            20%
                          </span>
                          .
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Toggle button - only visible on mobile */}
              <p
                onClick={() => toggleSection("elabs")}
                className="tw-text-teal-400 tw-text-sm tw-mt-2 tw-ml-[18px] sm:tw-hidden tw-cursor-pointer tw-hover:underline"
              >
                {expandedSections["elabs"] ? "See less" : "See more"}
              </p>

              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-3 tw-pl-[18px]">
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-violet-500/10 tw-text-violet-400">
                  Next.js
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-violet-500/10 tw-text-violet-400">
                  Framer Motion
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-violet-500/10 tw-text-violet-400">
                  AWS
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-violet-500/10 tw-text-violet-400">
                  Express.js
                </span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-violet-500/10 tw-text-violet-400">
                  MUI
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Add the Blog Section here */}
        <BlogSection />
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
