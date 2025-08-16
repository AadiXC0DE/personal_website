import React from "react";
import { motion } from "framer-motion";

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
    readTime: "6 min read",
    tags: ["webdev", "chatgpt", "career", "react"],
  },
  {
    id: 2,
    title: "Understanding the Event Loop in JavaScript, Made Simple!",
    excerpt:
      "A simple explanation of the event loop in JavaScript, making it easy to understand for beginners.",
    date: "October 16, 2024",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://dev.to/aadixc0de/understanding-the-event-loop-in-javascript-made-simple-512b",
    external: true,
    readTime: "5 min read",
    tags: ["webdev", "javascript", "programming", "tutorial"],
  },
  {
    id: 3,
    title:
      "How I Ended Up Working as a Lead Dev for a Philips Project in College",
    excerpt:
      "Sharing my experience of working as a lead developer for a Philips Healthcare project in college.",
    date: "October 16, 2024",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://dev.to/aadixc0de/how-i-ended-up-working-as-a-lead-dev-for-a-philips-project-in-college-1j0d",
    external: true,
    tags: ["AI", "react", "healthcare"],
  },
];

const BlogSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
      className="blog_section tw-flex tw-flex-col tw-items-start tw-bg-black/30 tw-backdrop-blur-sm tw-border tw-border-white/10 tw-rounded-xl tw-shadow-none tw-transition-shadow tw-p-6 sm:tw-p-8 tw-w-full md:tw-w-full lg:tw-w-full tw-mt-10 tw-mb-10"
    >
      <div className="section_header tw-flex tw-items-center tw-space-x-3 tw-mb-6">
        <h2 className="tw-text-3xl tw-font-semibold">My Writings</h2>
      </div>

      <motion.p
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="tw-mt-2 tw-mb-8 tw-text-gray-300"
      >
        Check out my thoughts on JS, LLMs, and shipping fast software.
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
              href={blog.date === "TBA" ? "#" : blog.link}
              target={blog.external && blog.date !== "TBA" ? "_blank" : "_self"}
              rel={
                blog.external && blog.date !== "TBA"
                  ? "noopener noreferrer"
                  : ""
              }
              className={`tw-block tw-h-full tw-no-underline ${
                blog.date === "TBA" ? "tw-pointer-events-none" : ""
              }`}
            >
              <div className="tw-bg-black/20 tw-overflow-hidden tw-rounded-xl tw-border tw-border-white/10 tw-h-full tw-flex tw-flex-col tw-transition-all tw-duration-300 hover:tw-translate-y-[-4px] hover:tw-shadow-md hover:tw-shadow-black/40 hover:tw-border-white/20">
                {/* Image at the top with smaller height */}
                <div className="tw-h-40 tw-overflow-hidden tw-rounded-t-xl tw-relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={`tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 tw-group-hover:tw-scale-105 ${
                      blog.date === "TBA" ? "tw-opacity-60" : ""
                    }`}
                  />
                  {blog.date === "TBA" && (
                    <div className="tw-absolute tw-inset-0 tw-bg-black/40 tw-flex tw-items-center tw-justify-center">
                      <span className="tw-text-white tw-text-sm tw-font-semibold tw-tracking-wide">
                        Coming soon
                      </span>
                    </div>
                  )}
                </div>

                <div className="tw-flex tw-p-5 tw-flex-col tw-flex-grow">
                  {/* Date */}
                  <span className="tw-text-sm tw-text-[#4fbdb9] tw-mb-2">
                    {blog.date}
                    {blog.readTime && blog.date !== "TBA" && (
                      <span className="tw-text-gray-400">
                        {" "}
                        · {blog.readTime}
                      </span>
                    )}
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

                  {/* CTA button at the bottom */}
                  {blog.date !== "TBA" && (
                    <div>
                      <span className="tw-inline-flex tw-items-center tw-gap-2 tw-text-sm tw-font-medium tw-text-[#4fbdb9] tw-bg-[#4fbdb9]/10 tw-border tw-border-[#4fbdb9]/20 tw-rounded-md tw-px-3 tw-py-1.5">
                        {blog.external
                          ? `Read on ${new URL(blog.link).hostname.replace(
                              "www.",
                              "",
                            )}`
                          : "Read more"}
                        <svg
                          className="tw-w-4 tw-h-4"
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
                      </span>
                    </div>
                  )}
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
