import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import "../App.css";
import Verticalname from "../components/Verticalname";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../utils/TypewriterEffect";
import Brands from "../components/Brands";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aaditya Chowdhury",
    "url": "https://aadityachowdhury.dev",
    "sameAs": [
      "https://github.com/AadiXC0DE",
      "https://www.linkedin.com/in/aaditya-chowdhury-14a5a921b/",
      "https://x.com/AadiChowdhury7",
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Ownpath",
    },
  };

  return (
    <div className="tw-text-white">
      <Helmet>
        <title>Aaditya Chowdhury | Software Engineer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Aaditya Chowdhury, a software engineer who builds fast, clean, and real-world web applications."
        />
        <link rel="canonical" href="https://aadityachowdhury.dev" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navbar />

      <div className="container tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between tw-px-3 lg:tw-px-12 lg:tw-py-auto">
        {/* Main Text Section */}
        <div className="Home_main_text tw-flex tw-flex-col tw-space-y-6 tw-pb-4">
          {/* Greeting with Typewriter Effect */}
          <TypewriterEffect
            text="Hi, I'm Aaditya Chowdhury"
            className="tw-text-4xl lg:tw-text-6xl tw-font-bold tw-leading-tight tw-text-[#4fbdba]"
            cursorClassName="tw-w-1 tw-h-8 tw-bg-emerald-400"
          />

          {/* Subheading with Emphasis */}
          <div className="tw-overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="tw-text-2xl lg:tw-text-3xl tw-text-gray-300"
            >
              Software Engineer • I build fast, clean, real-world apps.
            </motion.h2>
          </div>

          {/* About and Services */}
          <div className="tw-overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="tw-text-lg tw-text-gray-400 tw-max-w-lg"
            >
              From napkin sketches to polished MVPs. Need your next big thing
              built? Let's make the internet a bit more awesome together.
            </motion.p>
          </div>
          <div className="tw-overflow-visible">
            <Brands />
          </div>

          {/* CTA Button */}
          <div className="tw-overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="tw-mt-8"
            >
              <motion.a
                href="https://calendly.com/aadityaz2077/one-on-one"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -2,
                  scale: 1.03,
                  boxShadow: "0 0 24px rgba(79,189,186,0.55)",
                }}
                whileTap={{ scale: 0.98 }}
                className="tw-group tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-[#4fbdba] tw-text-black tw-font-semibold tw-px-6 tw-py-3 tw-transition-all tw-duration-300 tw-ease-out hover:tw-bg-teal-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-teal-300 tw-no-underline"
              >
                {/* Glow background */}
                <span
                  aria-hidden
                  className="tw-pointer-events-none tw-absolute -tw-inset-0.5 tw-rounded-full tw-bg-[radial-gradient(ellipse_at_center,rgba(79,189,186,0.7),rgba(79,189,186,0)_60%)] tw-blur tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"
                />

                {/* Content */}
                <span className="tw-relative tw-z-[1] tw-flex tw-items-center tw-gap-2">
                  <span className="tw-text-base tw-tracking-wide">
                    Schedule a call
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="tw-w-5 tw-h-5 tw-transition-transform group-hover:tw-translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vertical Name and Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="Vertical_text"
      >
        <Verticalname />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
