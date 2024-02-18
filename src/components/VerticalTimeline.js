import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const timelineData = [
  {
    date: "February 2024",
    event: "Started FusionFit.ai",
    description: "Started working on my new startup called FusionFit.ai, a fitness app that uses AI to help people eat healthier and exercise more."
  },
  {
    date: "October 2023",
    event: "Started working at Gastrogate AB",
    description: "Started working as a SWE intern at Gastrogate AB, a restaurant management software company."
  },
  {
    date: "August 2023",
    event: "Started working at Symmulate Labs",
    description: "Started working as a Web Dev and NLP intern at Symmulate Labs, a startup under IIT Mandi that builds AI-powered software."
  },
  {
    date: "January 2023",
    event: "Started working at ELabs KIIT (Volunteer)",
    description: "Started working as the frontend lead at ELabs KIIT, a student-run organization that helps students learn about tech."
  },
  {
    date: "March 2022",
    event: "Started working at Upwork",
    description: "Started working as a freelance web developer and designer on Upwork, a global freelancing platform."
  },
];

const VerticalTimeline = () => {
    return (
      <div className='tw-flex tw-justify-center'>
        <section className="tw-items-center tw-py-2 tw-mb-24 tw-bg-black tw-font-poppins dark:bg-gray-800">
          <div className="tw-justify-center tw-max-w-6xl tw-px-4 tw-py-4 tw-mx-auto lg:py-8 md:px-6">
            <div className="tw-max-w-xl tw-mx-auto">
              <div className="tw-text-center">
                <div className="tw-relative tw-flex tw-flex-col tw-items-center">
                  <h1 className="tw-text-3xl tw-mb-8 tw-text-white tw-font-bold tw-leading-tight dark:text-gray-300">
                    Timeline
                  </h1>
                </div>
              </div>
            </div>
            <div className="tw-w-full tw-mx-auto lg:max-w-3xl">
              {timelineData.map((item, index) => (
                <motion.div // Wrap each timeline item with motion.div for animations
                  className="tw-relative tw-flex tw-justify-start"
                  key={index}
                  initial={{ opacity: 0 }} // Initial state (hidden)
                  animate={{ opacity: 1 }} // Animation to fade in
                  transition={{ duration: 0.5, delay: index * 0.2 }} // Animation duration and delay
                >
                  <div className="tw-flex tw-flex-col tw-items-center tw-w-10 tw-mr-4 md:w-24">
                    <div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-bg-blue-200 tw-rounded-full ">
                        <div className="tw-w-4 tw-h-4 tw-bg-[#4fbdb9] tw-rounded-full "></div>
                      </div>
                    </div>
                    <div className="tw-w-px tw-h-full tw-bg-blue-300 "></div>
                  </div>
                  <div>
                    <h2 className="tw-inline-block tw-px-4 tw-py-2 tw-mb-4 tw-text-xs tw-bg-white tw-text-[#4fbdb9] tw-rounded-3xl tw-font-semibold">
                      {item.date}
                    </h2>
                    <div className="tw-relative tw-flex-1 tw-mb-10 tw-bg-[#4fbdb9] tw-border-b-4 tw-border-blue-200 tw-shadow tw-rounded-3xl ">
                      <div className="tw-relative tw-z-20 tw-p-6">
                        <p className="tw-mb-2 tw-text-lg tw-font-semibold tw-text-white">
                          {item.event}
                        </p>
                        <p className="tw-text-white">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

export default VerticalTimeline;
