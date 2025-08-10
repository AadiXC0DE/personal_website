"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    title: "2025",
    content: (
      <div className="tw-space-y-6">
        <div className="tw-relative tw-pr-6 bg-black/20 tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
          <h4 className="tw-text-lg tw-font-semibold tw-text-[#4fbdb9] tw-mb-2">
            Software Engineer @ Ownpath
          </h4>
          <p className="tw-text-neutral-300">
            Built AI tools such as design analyzer and writing assistant to
            enhance design workflows for{" "}
            <span className="tw-font-bold">Hero MotoCorp</span>. Contributed to
            the Hero Echo Webapp
          </p>
          <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              LangChain
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              VueJS
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              Nuxt
            </span>
          </div>
        </div>

        <div className="tw-relative tw-pr-6 tw-pt-10 tw-bg-inherit tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
          <h4 className="tw-text-lg tw-font-semibold tw-text-[#4fbdb9] tw-mb-2">
            Software Engineer @ Ownpath
          </h4>
          <p className="tw-text-neutral-300">
            Working on complete frontend from scratch as the lead dev for a JS
            based AI Audio Editor app for a popular{" "}
            <span className="tw-font-bold">San Francisco based startup</span>.
          </p>
          <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              React
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              Express
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              WavesurferJS
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="tw-space-y-6">
        <div className="tw-relative tw-pr-6 tw-pt-10 tw-bg-inherit tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
          <h4 className="tw-text-lg tw-font-semibold tw-text-[#4fbdb9] tw-mb-2">
            Software Engineer @ Ownpath
          </h4>
          <p className="tw-text-neutral-300">
            Led Heartprint mobile app development for{" "}
            <span className="tw-font-bold">Philips Innovation</span>. Built
            scalable backend serving thousands of users.
          </p>
          <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              React.js
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              D3.js
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              Node.js
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              MongoDB
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="tw-space-y-6">
        <div className="tw-relative tw-pr-6 tw-bg-inherit tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
          <h4 className="tw-text-lg tw-font-semibold tw-text-[#4fbdb9] tw-mb-2">
            SWE Intern @ Gastrogate AB
          </h4>
          <p className="tw-text-neutral-300">
            Built admin dashboard with React & GraphQL. Optimized search system
            achieving 50% faster response times.
          </p>
          <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              React
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              TypeScript
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              GraphQL
            </span>
          </div>
        </div>

        <div className="tw-relative tw-pr-6 tw-pt-10 tw-bg-inherit tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
          <div className="tw-absolute tw-top-3 tw-right-3 tw-z-10 tw-px-2 tw-py-1 tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9] tw-text-[clamp(0.75rem,3vw,0.9rem)] tw-max-w-[80%] tw-truncate tw-pointer-events-none">
            Acquired by Adda247
          </div>
          <h4 className="tw-text-lg tw-font-semibold tw-text-[#4fbdb9] tw-mb-2">
            Founding Engineer @ Symmulate Labs
          </h4>
          <p className="tw-text-neutral-300">
            Built & shipped EdTech product with optimized LLMs achieving 50%
            faster inference. Developed 10+ chatbot UIs.
          </p>
          <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              Python
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              React
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              LLMs
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="tw-space-y-6">
        <div className="tw-relative tw-pr-6 tw-bg-inherit tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
          <h4 className="tw-text-lg tw-font-semibold tw-text-[#4fbdb9] tw-mb-2">
            Frontend Lead @ ELabs KIIT
          </h4>
          <p className="tw-text-neutral-300">
            Scaled platform to 2000+ users. Optimized performance achieving 20%
            faster load times.
          </p>
          <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              Next.js
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              AWS
            </span>
            <span className="tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9]">
              Express.js
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export const Timeline = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="vertical_timeline tw-w-full tw-bg-transparent tw-rounded-lg tw-font-sans md:tw-px-6"
      ref={containerRef}
    >
      <div className="tw-max-w-7xl lg:tw-mx-32 tw-py-2 tw-px-4 md:tw-px-8 lg:tw-px-10 tw-flex tw-flex-col tw-items-center">
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
          <h2 className="tw-text-4xl sm:tw-text-5xl tw-font-bold tw-mb-2 tw-text-center tw-text-white tw-max-w-4xl">
            Journey Through Code
          </h2>
          <p className="tw-text-xl sm:tw-text-2xl tw-text-gray-400 tw-mt-3 tw-max-w-sm tw-text-center">
            Building MVPs, scaling products, and crafting experiences that
            matter.
          </p>
        </div>
      </div>
      <div ref={ref} className="tw-relative tw-max-w-7xl tw-pb-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="tw-flex tw-justify-start tw-pt-10 md:tw-pt-20 md:tw-gap-10"
          >
            <div className="tw-sticky tw-flex tw-flex-col md:tw-flex-row tw-z-40 tw-items-center tw-top-40 tw-self-start tw-max-w-xs lg:tw-max-w-sm md:tw-w-full">
              <div className="tw-h-10 tw-absolute tw-left-3 md:tw-left-3 tw-w-10 tw-rounded-full tw-bg-inherit dark:tw-bg-inherit tw-flex tw-items-center tw-justify-center">
                <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-[#4fbdb9] tw-opacity-70" />
              </div>
              <h3
                className={`tw-hidden md:tw-block tw-text-xl md:tw-pl-20 ${
                  index === 0
                    ? "md:tw-text-6xl tw-font-extrabold"
                    : "md:tw-text-5xl tw-font-bold"
                } tw-text-[#4fbdb9]`}
              >
                {item.title}
              </h3>
            </div>
            <div className="tw-relative tw-pl-20 tw-pr-4 md:tw-pl-4 tw-w-full">
              <h3
                className={`md:tw-hidden tw-block tw-mb-4 tw-text-left tw-text-[#4fbdb9] ${
                  index === 0
                    ? "tw-text-3xl tw-font-extrabold"
                    : "tw-text-2xl tw-font-bold"
                }`}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="tw-absolute md:tw-left-8 tw-left-8 tw-top-0 tw-overflow-hidden tw-w-[1px] tw-bg-neutral-800/70"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="tw-absolute tw-inset-x-0 tw-top-0 tw-w-[1px] tw-bg-[#4fbdb9] tw-rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
