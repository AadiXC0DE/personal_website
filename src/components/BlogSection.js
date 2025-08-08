import React from "react";
import { motion } from "framer-motion";
import { FaPenNib } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    title: "From Intern to Frontend Developer to Selling a Company in College",
    excerpt:
      "Aaditya Chowdhury shares his journey from an intern to a successful frontend developer and entrepreneur while in college.",
    date: "October 16, 2024",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    link: "https://dev.to/aadixc0de/from-intern-to-frontend-developer-to-selling-a-company-in-college-16if",
    external: true,
    tags: ["webdev", "chatgpt", "career", "react"],
  },
  {
    id: 2,
    title: "Understanding the Event Loop in JavaScript — Made Simple!",
    excerpt:
      "A simple explanation of the event loop in JavaScript, making it easy to understand for beginners.",
    date: "October 16, 2024",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://dev.to/aadixc0de/understanding-the-event-loop-in-javascript-made-simple-512b",
    external: true,
    tags: ["webdev", "javascript", "programming", "tutorial"],
  },
  {
    id: 3,
    title: "Coming Soon",
    excerpt:
      "Stay tuned for my upcoming article on optimizing large language models for production environments.",
    date: "TBA",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://dev.to/aadixc0de/coming-soon-1625",
    external: true,
    tags: ["AI", "LLMs"],
  },
];

const BlogSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
      className="blog_section tw-flex tw-flex-col tw-items-start tw-bg-gray-900 tw-rounded-xl tw-shadow-lg tw-p-6 sm:tw-p-8 tw-w-full md:tw-w-full lg:tw-w-full tw-mt-10 tw-mb-10"
    >
      <div className="section_header tw-flex tw-items-center tw-space-x-3 tw-mb-6">
        <FaPenNib className="tw-text-3xl tw-text-teal-500 tw-transition-transform hover:tw-scale-110" />
        <h2 className="tw-text-3xl tw-font-semibold">My Writings</h2>
      </div>

      <motion.p
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="tw-mt-2 tw-mb-8 tw-text-gray-300"
      >
        Thoughts, experiences, and technical insights from my journey in
        software engineering
      </motion.p>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 tw-mt-4 tw-w-full">
        {blogData.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
            className="tw-group tw-h-full"
          >
            <a
              href={blog.link}
              target={blog.external ? "_blank" : "_self"}
              rel={blog.external ? "noopener noreferrer" : ""}
              className="tw-block tw-h-full tw-no-underline"
            >
              <div className="tw-bg-inherit tw-overflow-hidden tw-rounded-xl tw-border tw-border-neutral-800 tw-h-full tw-flex tw-flex-col tw-transition-all tw-duration-300 hover:tw-shadow-[0_0_15px_rgba(79,189,185,0.3)] hover:tw-border-[#4fbdb9]/50 tw-group-hover:tw-transform tw-group-hover:tw-scale-[1.02]">
                {/* Image at the top with smaller height */}
                <div className="tw-h-40 tw-overflow-hidden tw-rounded-t-xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 tw-group-hover:tw-scale-110"
                  />
                </div>

                <div className="tw-flex tw-p-5 tw-flex-col tw-flex-grow">
                  {/* Date */}
                  <span className="tw-text-sm tw-text-[#4fbdb9] tw-mb-2">
                    {blog.date}
                  </span>

                  {/* Heading */}
                  <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-3 tw-group-hover:tw-text-[#4fbdb9] tw-transition-colors">
                    {blog.title}
                  </h3>

                  {/* Blog excerpt */}
                  <p className="tw-text-neutral-400 tw-text-sm tw-mb-4 tw-flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Tags section */}
                  <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mb-4">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-rounded-md tw-bg-[#4fbdb9]/10 tw-text-[#4fbdb9] tw-border tw-border-[#4fbdb9]/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more link at the bottom */}
                  <div className="tw-flex tw-items-center tw-text-sm tw-text-[#4fbdb9] tw-font-medium">
                    {blog.external
                      ? "Read on " +
                        new URL(blog.link).hostname.replace("www.", "")
                      : "Read more"}
                    <svg
                      className="tw-ml-1 tw-w-4 tw-h-4 tw-transition-transform tw-group-hover:tw-translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogSection;
