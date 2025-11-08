import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithSitemap() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkHover = {
    hover: {
      color: "#94c840", // brand-green
      x: 4,
      transition: { duration: 0.01 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: i * 0.001 },
    }),
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300, damping: 12 },
    },
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="mx-auto w-full max-w-7xl px-8">
        {/* Sitemap Links */}
        <motion.div
          className="mx-auto grid w-full grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SITEMAP.map(({ title, links }, key) => (
            <motion.div key={key} variants={itemVariants}>
              <Typography
                variant="small"
                className="mb-6 font-bold uppercase text-light-brand-blue text-lg border-b-2 border-brand-green pb-2 font-bbh-sans-bartle"
              >
                {title}
              </Typography>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    variants={linkHover}
                    whileHover="hover"
                    className="text-brand-gray font-normal transition-all duration-300 cursor-pointer hover:font-semibold"
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col items-center justify-center border-t border-gray-300 py-8 md:flex-row md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Copyright */}
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-brand-gray md:mb-0"
          >
            &copy; {currentYear}{" "}
            <motion.a
              href="#"
              className="font-semibold text-brand-blue hover:text-brand-green transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Kickzone
            </motion.a>
            . All Rights Reserved.
          </Typography>

          {/* Social Icons */}
          <motion.div
            className="flex gap-6 text-brand-blue sm:justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Facebook */}
            <motion.a
              href="#"
              custom={0}
              variants={iconVariants}
              whileHover="hover"
              className="opacity-80 hover:opacity-100 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300"
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
              href="#"
              custom={1}
              variants={iconVariants}
              whileHover="hover"
              className="opacity-80 hover:opacity-100 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300"
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
              href="#"
              custom={2}
              variants={iconVariants}
              whileHover="hover"
              className="opacity-80 hover:opacity-100 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300"
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
              variants={iconVariants}
              whileHover="hover"
              className="opacity-80 hover:opacity-100 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300"
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
