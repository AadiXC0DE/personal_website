import React from "react";

const Error = () => {
  return (
    <section className="tw-flex tw-justify-center tw-items-center tw-h-screen tw-p-16 tw-bg-black tw-dark:bg-gray-800">
      <div className="tw-container tw-flex tw-flex-col tw-items-center ">
        <div className="tw-flex tw-flex-col tw-gap-6 tw-max-w-md tw-text-center">
          <h2 className="tw-font-extrabold tw-text-9xl tw-text-gray-600 tw-dark:text-gray-100">
            <span className="tw-sr-only tw-text-white">Error</span>404
          </h2>
          <p className="tw-text-2xl tw-md:text-3xl tw-text-white">
            something went wrong💀
          </p>
          <a
            href="/"
            className="tw-px-8 tw-py-4 tw-text-xl tw-font-semibold tw-rounded tw-bg-[#4fbdb9] tw-text-gray-50 tw-hover:text-gray-200"
          >
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Error;
