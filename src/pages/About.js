import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Verticalname from '../components/Verticalname';
import { FaBriefcase, FaRocket } from 'react-icons/fa';
import { TypewriterEffect } from '../utils/TypewriterEffect';
import BlogSection from '../components/BlogSection';

const About = () => {
  // Add state to manage visibility of expanded content for each section
  const [expandedSections, setExpandedSections] = React.useState({});

  // Toggle function for expanding/collapsing sections
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="tw-bg-black tw-text-white">
      <Navbar />

      <div className="about_container tw-flex tw-flex-col tw-items-start tw-px-3 sm:tw-px-6 lg:tw-py-16 lg:tw-max-w-5xl lg:tw-mx-auto">
        {/* Typewriter effect for heading */}
        <TypewriterEffect
          text="I'm a software engineer, bringing ideas to life"
          className="tw-text-4xl sm:tw-text-5xl tw-font-bold tw-text-left"
          cursorClassName="tw-w-1 tw-h-8"
        />

        <TypewriterEffect
          text="Bringing your vision to life."
          className="tw-text-xl sm:tw-text-2xl tw-text-gray-400 tw-mt-3 tw-text-left"
          cursorClassName="tw-w-1 tw-h-6"
        />

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="experience_section tw-flex tw-flex-col tw-items-start tw-bg-gray-900 tw-rounded-xl tw-shadow-lg tw-p-6 sm:tw-p-8 tw-w-full md:tw-w-4/5 lg:tw-w-full tw-mt-10 tw-mb-10"
        >
          <div className="section_header tw-flex tw-items-center tw-space-x-3 tw-mb-6">
            <FaBriefcase className="tw-text-3xl tw-text-teal-500 tw-transition-transform hover:tw-scale-110" />
            <h2 className="tw-text-3xl tw-font-semibold">Experience</h2>
          </div>
          
          <div className="tw-mt-6 tw-space-y-8">
            {/* Ownpath Experience */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="tw-border-l-2 tw-border-teal-500 tw-pl-0 tw-py-2"
            >
              <h3 className="tw-text-xl tw-font-semibold tw-text-teal-400">
                <span className="tw-font-bold">Ownpath</span>
              </h3>
              <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                <p className="tw-text-gray-400 tw-text-sm">Software Engineer • 2024 - Present</p>
                <span className="tw-text-xs tw-px-2 tw-py-1 tw-bg-gray-800 tw-rounded-full tw-text-teal-400 tw-w-fit tw-mt-1 sm:tw-mt-0">Hybrid</span>
              </div>
              
              <div className="tw-mt-3 tw-space-y-3">
                <div className="tw-flex tw-items-start">
                  <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                  <p className="tw-text-gray-300">
                    Developed a health tech app for <span className="tw-font-medium tw-text-white">Philips Innovation</span>, 
                    enabling faster health scans and boosting user engagement by <span className="tw-text-white tw-font-semibold">25%</span>.
                  </p>
                </div>
                
                {/* Show all points on desktop, or when expanded on mobile */}
                <div className={`${!expandedSections['ownpath'] ? 'tw-hidden sm:tw-block' : ''} tw-space-y-3`}>
                  <div className="tw-flex tw-items-start">
                    <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                    <p className="tw-text-gray-300">
                      Created frontend with React and Tailwind; engineered backend APIs using Node.js 
                      and MongoDB for real-time data processing.
                    </p>
                  </div>
                  
                  <div className="tw-flex tw-items-start">
                    <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                    <p className="tw-text-gray-300">
                      Working on design system for <span className="tw-font-medium tw-text-white">Hero MotoCorp</span>, 
                      building AI tools to enhance design workflows.
                    </p>
                  </div>
                  
                  <div className="tw-flex tw-items-start">
                    <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                    <p className="tw-text-gray-300">
                      Developed AI agents for designer website analysis using LLM and LangChain.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Toggle button - only visible on mobile */}
              <p 
                onClick={() => toggleSection('ownpath')} 
                className="tw-text-teal-400 tw-text-sm tw-mt-2 tw-ml-[18px] sm:tw-hidden tw-hover:underline"
              >
                {expandedSections['ownpath'] ? 'See less' : 'See more'}
              </p>
              
              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-3 tw-pl-[18px]">
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">React</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">Node.js</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">MongoDB</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">LangChain</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">Tailwind</span>
              </div>
            </motion.div>
            
            {/* Gastrogate Experience */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="tw-border-l-2 tw-border-teal-500 tw-pl-0 tw-py-2"
            >
              <h3 className="tw-text-xl tw-font-semibold tw-text-teal-400">
                Gastrogate AB
              </h3>
              <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                <p className="tw-text-gray-400 tw-text-sm">SWE Intern • 2023 - 2024</p>
                <span className="tw-text-xs tw-px-2 tw-py-1 tw-bg-gray-800 tw-rounded-full tw-text-teal-400 tw-w-fit tw-mt-1 sm:tw-mt-0">Sweden (Remote)</span>
              </div>
              
              <div className="tw-mt-3 tw-space-y-3">
                <div className="tw-flex tw-items-start">
                  <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                  <p className="tw-text-gray-300">
                    Developed essential components for a React-based admin platform with GraphQL integration.
                  </p>
                </div>
                
                {/* Show all points on desktop, or when expanded on mobile */}
                <div className={`${!expandedSections['gastrogate'] ? 'tw-hidden sm:tw-block' : ''} tw-space-y-3`}>
                  <div className="tw-flex tw-items-start">
                    <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                    <p className="tw-text-gray-300">
                      Built fuzzy search functionality reducing search times by <span className="tw-text-white tw-font-semibold">50%</span>.
                    </p>
                  </div>
                  
                  <div className="tw-flex tw-items-start">
                    <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                    <p className="tw-text-gray-300">
                      Increased user engagement by <span className="tw-text-white tw-font-semibold">30%</span> with data-driven improvements.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Toggle button - only visible on mobile */}
              <p 
                onClick={() => toggleSection('gastrogate')} 
                className="tw-text-teal-400 tw-text-sm tw-mt-2 tw-ml-[18px] sm:tw-hidden tw-hover:underline"
              >
                {expandedSections['gastrogate'] ? 'See less' : 'See more'}
              </p>
              
              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-3 tw-pl-[18px]">
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">React</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">GraphQL</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">Expo</span>
              </div>
            </motion.div>

            {/* Symmulate Labs Experience */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="tw-border-l-2 tw-border-teal-500 tw-pl-0 tw-py-2"
            >
              <h3 className="tw-text-xl tw-font-semibold tw-text-teal-400">
                Symmulate Labs
              </h3>
              <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                <p className="tw-text-gray-400 tw-text-sm">Web Dev & NLP Intern • 2023 - 2023</p>
                <span className="tw-text-xs tw-px-2 tw-py-1 tw-bg-gray-800 tw-rounded-full tw-text-teal-400 tw-w-fit tw-mt-1 sm:tw-mt-0">IIT Mandi</span>
              </div>
              <div className="tw-mt-3 tw-space-y-3">
                <div className="tw-flex tw-items-start">
                  <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                  <p className="tw-text-gray-300">
                    Created 10+ chatbot UIs and optimized LLMs for faster responses.
                  </p>
                </div>
                
                {/* Show all points on desktop, or when expanded on mobile */}
                <div className={`${!expandedSections['symmulate'] ? 'tw-hidden sm:tw-block' : ''} tw-space-y-3`}>
                  <div className="tw-flex tw-items-start">
                    <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                    <p className="tw-text-gray-300">
                      Later Joined as founding engineer, led development of an edTech chatbot resulting in 
                      <span className="tw-text-white tw-font-semibold"> acquisition by Adda247</span>.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Toggle button - only visible on mobile */}
              <p 
                onClick={() => toggleSection('symmulate')} 
                className="tw-text-teal-400 tw-text-sm tw-mt-2 tw-ml-[18px] sm:tw-hidden tw-hover:underline"
              >
                {expandedSections['symmulate'] ? 'See less' : 'See more'}
              </p>
              
              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-3 tw-pl-[18px]">
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">LLMs</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">Chatbots</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">NLP</span>
              </div>
            </motion.div>
            
            {/* Elabs Experience */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="tw-border-l-2 tw-border-teal-500 tw-pl-0 tw-py-2"
            >
              <h3 className="tw-text-xl tw-font-semibold tw-text-teal-400">
                <span className="tw-font-bold">Elabs Platform</span>
              </h3>
              <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-mt-1">
                <p className="tw-text-gray-400 tw-text-sm">Frontend Engineer • 2022</p>
                <span className="tw-text-xs tw-px-2 tw-py-1 tw-bg-gray-800 tw-rounded-full tw-text-teal-400 tw-w-fit tw-mt-1 sm:tw-mt-0">Remote</span>
              </div>
              
              <div className="tw-mt-3 tw-space-y-3">
                <div className="tw-flex tw-items-start">
                  <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                  <p className="tw-text-gray-300">
                    Created engaging UX through image optimization and code refinement using React, 
                    JavaScript, Styled Components, and Framer Motion.
                  </p>
                </div>
                
                {/* Show all points on desktop, or when expanded on mobile */}
                <div className={`${!expandedSections['elabs'] ? 'tw-hidden sm:tw-block' : ''} tw-space-y-3`}>
                  <div className="tw-flex tw-items-start">
                    <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                    <p className="tw-text-gray-300">
                      Developed responsive SPAs with MUI, Tailwind CSS, and Next.js.
                    </p>
                  </div>
                  
                  <div className="tw-flex tw-items-start">
                    <div className="tw-text-teal-500 tw-mt-1 tw-mr-3">•</div>
                    <p className="tw-text-gray-300">
                      Optimized platform with Express.js and AWS, boosting user base by <span className="tw-text-white tw-font-semibold">70%</span> 
                      to 2000+ and reducing load times by <span className="tw-text-white tw-font-semibold">20%</span>.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Toggle button - only visible on mobile */}
              <p 
                onClick={() => toggleSection('elabs')} 
                className="tw-text-teal-400 tw-text-sm tw-mt-2 tw-ml-[18px] sm:tw-hidden tw-hover:underline"
              >
                {expandedSections['elabs'] ? 'See less' : 'See more'}
              </p>
              
              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-3 tw-pl-[18px]">
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">Next.js</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">Framer Motion</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">AWS</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">Express.js</span>
                <span className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-teal-500/10 tw-text-teal-400">MUI</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Freelance & MVP Work Section - Improved */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="freelance_section tw-flex tw-flex-col tw-items-start tw-bg-gray-900 tw-rounded-xl tw-shadow-lg tw-p-8 tw-w-full md:tw-w-4/5 lg:tw-w-full tw-mt-10 tw-mb-10"
        >
          <div className="section_header tw-flex tw-items-center tw-space-x-3 tw-mb-6">
            <FaRocket className="tw-text-3xl tw-text-teal-500 tw-transition-transform hover:tw-scale-110" />
            <h2 className="tw-text-3xl tw-font-semibold">
              Freelance & MVP Work
            </h2>
          </div>
          
          <div className="tw-w-full">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="tw-mb-5 tw-border-l-2 tw-border-teal-500 tw-pl-0 tw-py-2"
            >
              <h3 className="tw-text-xl tw-font-semibold tw-text-teal-400">MVP Development</h3>
              <p className="tw-text-gray-300 tw-mt-3">
                I bring MVPs to life through focused, impactful development. As a
                founding engineer at Symmulate Labs, I helped create an
                educational LLM chatbot, later acquired by{' '}
                <span className="tw-text-white tw-font-semibold">Adda247</span>.
              </p>
            </motion.div>
            
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-mt-6">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="tw-bg-black/30 tw-p-5 tw-rounded-lg tw-border tw-border-teal-500/20 tw-hover:border-teal-500/50 tw-transition-all tw-duration-300"
              >
                <div className="tw-text-teal-400 tw-mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="tw-text-lg tw-font-medium tw-text-white tw-mb-2">Rapid Prototyping</h4>
                <p className="tw-text-gray-300">
                  Developed MVPs for clients focused on user experience and rapid deployment.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="tw-bg-black/30 tw-p-5 tw-rounded-lg tw-border tw-border-teal-500/20 tw-hover:border-teal-500/50 tw-transition-all tw-duration-300"
              >
                <div className="tw-text-teal-400 tw-mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="tw-text-lg tw-font-medium tw-text-white tw-mb-2">Idea to Product</h4>
                <p className="tw-text-gray-300">
                  Transformed ideas into robust, functional prototypes ready for market validation.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="tw-mt-6 tw-p-4 tw-bg-gradient-to-r tw-from-teal-500/10 tw-to-transparent tw-rounded-lg tw-border-l-4 tw-border-teal-500"
            >
              <p className="tw-text-white tw-font-medium">
                Have an idea? Let's connect and make it happen!
              </p>
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
