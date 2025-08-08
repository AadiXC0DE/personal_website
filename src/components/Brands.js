// src/components/Brands.jsx

import React from "react";
import { motion } from "framer-motion";
import gastrogateLogo from "../assets/Gastrogate.png";
import heroLogo from "../assets/Hero.png";
import ownpathLogo from "../assets/Ownpath.svg";
import philipsLogo from "../assets/Philips.png";

const brands = [
  { name: "Symmulate Labs", description: "IIT Mandi", isText: true },
  { name: "Gastrogate AB", description: "Sweden", isText: true },
  { name: "Ownpath", description: "", logo: ownpathLogo, showColon: true },
  { name: "Philips", description: "via Ownpath", logo: philipsLogo },
  { name: "Hero MotoCorp", description: "via Ownpath", logo: heroLogo },
];

const onBrandClick = () => {
  window.location.href = "/experience";
};

const Brands = () => {
  const brandVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03 },
  };
  const tooltipVariants = {
    rest: { opacity: 0, y: 5, transition: { duration: 0.2, ease: "easeOut" } },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeIn", delay: 0.1 },
    },
  };

  return (
    <div className="tw-bg-inherit">
      {/* Inherit left alignment from parent container; avoid internal centering */}
      <div className="tw-flex tw-flex-col tw-w-full">
        <div className="tw-overflow-visible">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="tw-text-[11px] tw-tracking-wider tw-uppercase tw-text-gray-500 tw-mb-2"
          >
            Worked with
          </motion.h2>
        </div>

        <div className="tw-overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            onClick={onBrandClick}
            className="tw-flex tw-flex-wrap tw-items-center tw-gap-x-8 tw-gap-y-6 tw-w-full tw-cursor-pointer"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                variants={brandVariants}
                initial="rest"
                whileHover="hover"
                className="tw-relative tw-pr-2 tw-border-r tw-border-white/10 last:tw-border-none last:tw-pr-0 last:tw-mr-0"
                transition={{ duration: 0.2 }}
              >
                <div className="tw-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-transparent">
                  {brand.isText ? (
                    <span className="tw-text-white tw-font-bold tw-text-md">
                      {brand.name}
                    </span>
                  ) : brand.logo ? (
                    <div className="tw-flex tw-items-center tw-gap-2">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="tw-h-8 md:tw-h-7 tw-w-auto tw-object-contain tw-opacity-100 tw-transition"
                        style={{
                          filter:
                            "saturate(0) brightness(0) invert(1) contrast(2)",
                        }}
                      />
                      {brand.showColon && (
                        <span className="tw-text-white tw-opacity-70 tw-text-xl tw-font-bold md:tw-text-2xl">
                          :
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="tw-text-gray-500">Logo</span>
                  )}
                </div>

                {/* Tooltip */}
                <motion.div
                  variants={tooltipVariants}
                  className="tw-absolute tw-bottom-full tw-mb-2 tw-left-1/2 -tw-translate-x-1/2 tw-z-10"
                  style={{ pointerEvents: "none" }}
                >
                  <div className="tw-bg-black/70 tw-backdrop-blur-sm tw-border tw-border-teal-500/20 tw-text-white tw-text-center tw-px-3 tw-py-2 tw-rounded-md tw-shadow-[0_6px_20px_rgba(0,0,0,0.35)] tw-whitespace-nowrap">
                    <p className="tw-font-semibold tw-text-sm">{brand.name}</p>
                    {brand.description && (
                      <p className="tw-text-gray-300 tw-text-xs">
                        {brand.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
