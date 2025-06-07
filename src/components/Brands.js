// src/components/Brands.jsx

import React from 'react';
import { motion } from 'framer-motion';
import gastrogateLogo from '../assets/Gastrogate.png';
import heroLogo       from '../assets/Hero.png';
import ownpathLogo    from '../assets/Ownpath.svg';
import philipsLogo    from '../assets/Philips.png';

const brands = [
  { name: 'Symmulate Labs',   description: 'IIT Mandi',      isText: true },
  { name: 'Gastrogate AB',     description: 'Sweden',        logo: gastrogateLogo },
  { name: 'Ownpath',           description: '',              logo: ownpathLogo, showColon: true },
  { name: 'Philips',           description: 'via Ownpath',  logo: philipsLogo },
  { name: 'Hero MotoCorp',     description: 'via Ownpath',  logo: heroLogo }
];

const onBrandClick = () => {
  window.location.href = '/experience';
};

const Brands = () => {
  const brandVariants = {
    rest:  { scale: 1 },
    hover: { scale: 1.05 },
  };
  const tooltipVariants = {
    rest:  { opacity: 0, y: 5,  transition: { duration: 0.2, ease: 'easeOut' } },
    hover: { opacity: 1, y: 0,  transition: { duration: 0.2, ease: 'easeIn', delay: 0.1 } },
  };

  return (
    <div className="tw-py-0 tw-bg-black tw-pb-1">
      <div className="">
        <div className="tw-flex tw-flex-col tw-w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="
              tw-w-full
              tw-text-lg
              tw-font-bold
              tw-text-white
              tw-mb-3
              tw-whitespace-nowrap
              tw-text-left
            "
          >
            Brands I've Contributed To
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onClick={onBrandClick}
            className="
              tw-flex
              tw-flex-wrap
              tw-items-left
              tw-gap-x-6 tw-gap-y-4
              tw-justify-left
              tw-w-full

              2xl:tw-max-w-[48rem]
              2xl:tw-mx-auto
              2xl:tw-justify-left
              tw-cursor-pointer
            "
          >
            {brands.map((brand, index) => {
              const isGastro = brand.name === 'Gastrogate AB';

              return (
                <motion.div
                  key={index}
                  variants={brandVariants}
                  initial="rest"
                  whileHover="hover"
                  className="tw-relative"
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`
                      tw-flex tw-items-center tw-justify-center
                      tw-border tw-border-gray-700

                      ${brand.isText
                        ? /* Symmulate Labs: auto width + no wrap */
                          'tw-w-auto  tw-whitespace-nowrap tw-pt-1'
                        : /* all other logos: exactly as before */
                          `
                          tw-w-20 tw-h-4
                          sm:tw-w-20 sm:tw-h-4
                          ${isGastro
                            ? 'md:tw-w-32 md:tw-h-8 tw-pb-1 tw-h-8 tw-w-32'
                            : 'md:tw-w-24 md:tw-h-6'
                          }
                          `
                      }
                    `}
                  >
                    {brand.isText ? (
                      <span className="tw-text-white tw-font-semibold">
                        {brand.name}
                      </span>
                    ) : brand.logo ? (
                      <div className="tw-flex tw-items-center tw-gap-2">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="tw-max-w-full tw-max-h-full tw-object-contain"
                        />
                        {brand.showColon && (
                          <span className="tw-text-white tw-text-xl tw-font-bold md:tw-text-2xl">
                            :
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="tw-text-gray-500">Logo</span>
                    )}
                  </div>

                  <motion.div
                    variants={tooltipVariants}
                    className="tw-absolute tw-bottom-full tw-mb-2 tw-left-1/2 -tw-translate-x-1/2 tw-z-10"
                    style={{ pointerEvents: 'none' }}
                  >
                    <div className="tw-bg-[#1c1c1c] tw-text-white tw-text-center tw-px-3 tw-py-2 tw-rounded-md tw-shadow-lg tw-whitespace-nowrap">
                      <p className="tw-font-bold tw-text-sm">{brand.name}</p>
                      {brand.description && (
                        <p className="tw-text-gray-400 tw-text-xs">{brand.description}</p>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
