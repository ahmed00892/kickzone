import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SITEMAP = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Our Team", path: "/team" },
      { name: "Projects", path: "/projects" },
    ],
  },
  {
    title: "Help Center",
    links: [
      {
        name: "Discord",
        path: "https://discord.gg/your-discord",
        external: true,
      },
      {
        name: "Twitter",
        path: "https://twitter.com/your-twitter",
        external: true,
      },
      {
        name: "GitHub",
        path: "https://github.com/ahmed00892/kickzone",
        external: true,
      },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "Profile", path: "/profile" },
      { name: "Log in", path: "/login" },
      { name: "Sign up", path: "/signup" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithSitemap() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const linkHover = {
    hover: {
      color: "#94c840",
      x: 6,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.9,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
        ease: "backOut",
      },
    }),
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, 0],
      transition: {
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 15,
        },
        rotate: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
  };

  // Function to render links appropriately
  const renderLink = (link, index) => {
    if (link.external) {
      return (
        <motion.a
          key={index}
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          variants={linkHover}
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          className="
            text-brand-gray font-normal transition-all duration-200
            cursor-pointer hover:font-semibold hover:text-brand-green
            dark:text-dark-text dark:hover:text-brand-green
            block relative
          "
        >
          <span className="relative">
            {link.name}
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </span>
        </motion.a>
      );
    }

    return (
      <motion.div
        key={index}
        variants={linkHover}
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
      >
        <Link
          to={link.path}
          className="
            text-brand-gray font-normal transition-all duration-200
            cursor-pointer hover:font-semibold hover:text-brand-green
            dark:text-dark-text dark:hover:text-brand-green
            block relative
          "
        >
          <span className="relative">
            {link.name}
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </span>
        </Link>
      </motion.div>
    );
  };

  return (
    <footer
      className="
      relative w-full 
      bg-gradient-to-b from-gray-50 to-gray-100 
      border-t border-gray-200
      dark:from-dark-bg dark:to-dark-surface 
      dark:border-dark-accent
      overflow-hidden
    "
    >
      {/* Background decorative element */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-brand-green/5 to-brand-blue/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="mx-auto w-full max-w-7xl px-8 relative z-10">
        {/* Sitemap */}
        <motion.div
          className="
            mx-auto grid w-full grid-cols-1 gap-10 py-12 
            md:grid-cols-2 lg:grid-cols-4
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SITEMAP.map(({ title, links }, key) => (
            <motion.div key={key} variants={itemVariants}>
              <Typography
                variant="small"
                className="
                  mb-6 font-bold uppercase text-brand-blue text-lg 
                  border-b-2 border-brand-green pb-2 font-bbh-sans-bartle
                  dark:text-brand-blue
                  relative
                "
              >
                <motion.span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-green"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                {title}
              </Typography>

              <ul className="space-y-4">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.05,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {renderLink(link, index)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="
            flex flex-col items-center justify-center 
            border-t border-gray-300 py-8 
            md:flex-row md:justify-between
            dark:border-dark-accent
            relative
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Copyright */}
          <Typography
            variant="small"
            className="
              mb-4 text-center font-normal text-brand-gray 
              md:mb-0
              dark:text-dark-text
            "
          >
            &copy; {currentYear}{" "}
            <motion.a
              href="/"
              className="
                font-semibold text-brand-blue hover:text-brand-green
                transition-all duration-300
                dark:text-brand-blue dark:hover:text-brand-green
                relative
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative">
                Kickzone
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </span>
            </motion.a>{" "}
            . All Rights Reserved.
          </Typography>

          {/* Social Icons */}
          <motion.div
            className="
              flex gap-6 sm:justify-center
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Facebook */}
            <motion.a
              href="https://facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              custom={0}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="
                p-2.5 rounded-full 
                bg-white shadow-sm hover:shadow-lg hover:text-brand-green
                transition-all duration-300
                dark:bg-dark-surface text-brand-blue dark:hover:text-brand-green
                backdrop-blur-sm
              "
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 
                  9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 
                  1.492-3.89 3.777-3.89 1.094 0 2.238.195 
                  2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 
                  1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 
                  21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              custom={1}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="
                p-2.5 rounded-full 
                bg-white shadow-sm hover:shadow-lg hover:text-brand-green
                transition-all duration-300
                dark:bg-dark-surface text-brand-blue dark:hover:text-brand-green
                backdrop-blur-sm
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              custom={2}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="
                p-2.5 rounded-full 
                bg-white shadow-sm hover:shadow-lg hover:text-brand-green
                transition-all duration-300
                dark:bg-dark-surface text-brand-blue dark:hover:text-brand-green
                backdrop-blur-sm
              "
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 
                11.675-11.675 0-.178 0-.355-.012-.53A8.348 
                8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 
                4.118 4.118 0 001.804-2.27 8.224 
                8.224 0 01-2.605.996 4.107 4.107 0 
                00-6.993 3.743A11.65 11.65 0 
                013.15 4.897a4.106 4.106 0 001.27 
                5.477 4.073 4.073 0 01-1.86-.513v.052a4.108 
                4.108 0 003.292 4.027 4.095 4.095 0 
                01-1.853.07 4.108 4.108 0 003.834 
                2.85A8.233 8.233 0 012 18.407a11.616 
                11.616 0 006.29 1.84"
                />
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/ahmed00892/kickzone"
              custom={3}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="
                p-2.5 rounded-full 
                bg-white shadow-sm hover:shadow-lg hover:text-brand-green
                transition-all duration-300
                dark:bg-dark-surface text-brand-blue dark:hover:text-brand-green
                backdrop-blur-sm
              "
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 
                  4.418 2.865 8.166 6.839 9.504.5.092.682-.217.682-.482 
                  0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.909-.62.069-.608.069-.608 
                  1.004.07 1.532 1.032 1.532 1.032.892 
                  1.529 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.943 
                  0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 
                  0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 
                  6.844a9.56 9.56 0 012.5.336c1.909-1.296 
                  2.748-1.026 2.748-1.026.546 1.378.202 
                  2.397.1 2.65.64.698 1.028 1.591 1.028 
                  2.682 0 3.841-2.338 4.687-4.566 
                  4.935.359.309.678.92.678 1.855 0 1.338-.012 
                  2.419-.012 2.748 0 .268.18.578.688.48A10.019 
                  10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

const Footer = () => (
  <footer>
    <FooterWithSitemap />
  </footer>
);

export default Footer;
