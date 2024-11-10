'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const timelineData = [
  {
    title: '2024',
    content: (
      <div className="tw-space-y-6">
        <div className="tw-relative tw-p-6 tw-bg-black/20 tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
          <h4 className="tw-text-lg tw-font-semibold tw-text-[#4fbdb9] tw-mb-2">
            SDE Intern @ Ownpath
          </h4>
          <p className="tw-text-neutral-300">
            Led Heartprint mobile app development for Philips Innovation. Built
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
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2023',
    content: (
      <div className="tw-space-y-6">
        <div className="tw-relative tw-p-6 tw-bg-black/20 tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
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

        <div className="tw-relative tw-p-6 tw-bg-black/20 tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
          <div className="tw-absolute tw-top-4 tw-right-4 tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-bg-[#4fbdb9]/20 tw-text-[#4fbdb9] tw-text-[clamp(0.75rem, 4vw, 1rem)] tw-max-w-full tw-whitespace-nowrap">
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
    title: '2022',
    content: (
      <div className="tw-space-y-6">
        <div className="tw-relative tw-p-6 tw-bg-black/20 tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-neutral-800">
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
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="tw-w-full tw-bg-black dark:tw-bg-neutral-950 tw-font-sans md:tw-px-8"
      ref={containerRef}
    >
      <div className="tw-max-w-7xl lg:tw-mx-32 tw-py-10 tw-px-4 md:tw-px-8 lg:tw-px-10">
        <h2 className="tw-text-xl md:tw-text-4xl tw-mb-4 tw-text-[#4fbdb9] tw-max-w-4xl">
          Journey Through Code
        </h2>
        <p className="tw-text-neutral-400 tw-text-sm md:tw-text-base tw-max-w-sm">
          Building MVPs, scaling products, and crafting experiences that matter.
        </p>
      </div>
      <div ref={ref} className="tw-relative tw-max-w-7xl lg:tw-mx-32 tw-pb-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="tw-flex tw-justify-start tw-pt-10 md:tw-pt-20 md:tw-gap-10"
          >
            <div className="tw-sticky tw-flex tw-flex-col md:tw-flex-row tw-z-40 tw-items-center tw-top-40 tw-self-start tw-max-w-xs lg:tw-max-w-sm md:tw-w-full">
              <div className="tw-h-10 tw-absolute tw-left-3 md:tw-left-3 tw-w-10 tw-rounded-full tw-bg-black dark:tw-bg-black tw-flex tw-items-center tw-justify-center">
                <div className="tw-h-4 tw-w-4 tw-rounded-full tw-bg-[#4fbdb9]/20 tw-border tw-border-[#4fbdb9] tw-p-2" />
              </div>
              <h3 className="tw-hidden md:tw-block tw-text-xl md:tw-pl-20 md:tw-text-5xl tw-font-bold tw-text-[#4fbdb9]">
                {item.title}
              </h3>
            </div>
            <div className="tw-relative tw-pl-20 tw-pr-4 md:tw-pl-4 tw-w-full">
              <h3 className="md:tw-hidden tw-block tw-text-2xl tw-mb-4 tw-text-left tw-font-bold tw-text-[#4fbdb9]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="tw-absolute md:tw-left-8 tw-left-8 tw-top-0 tw-overflow-hidden tw-w-[2px] tw-bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] tw-from-transparent tw-from-[0%] tw-via-neutral-800 tw-to-transparent tw-to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="tw-absolute tw-inset-x-0 tw-top-0 tw-w-[2px] tw-bg-gradient-to-t tw-from-[#4fbdb9] tw-via-[#4fbdb9] tw-to-transparent tw-from-[0%] tw-via-[10%] tw-rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
