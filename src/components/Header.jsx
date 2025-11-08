import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";
import { Badge } from "@material-tailwind/react";
import {
  ShoppingCartIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export function StickyNavbar({ isLoggedIn, user, onLogout }) {
  const { theme, toggleTheme } = useTheme();
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Stadiums", path: "/" },
    { label: "About us", path: "/" },
  ];

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      {navItems.map((item, index) => (
        <motion.li
          key={item.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Typography
            as="div"
            variant="small"
            className="p-1 font-open-sans text-black hover:text-brand-blue dark:text-dark-text dark:hover:text-white transition-colors"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to={item.path}
                className="flex items-center relative group z-10"
              >
                {item.label}
              </Link>
            </motion.div>
          </Typography>
        </motion.li>
      ))}
    </ul>
  );

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [-1, 1, -1, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  const mobileNavVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const navItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  // --- Login/Signup buttons for mobile nav ---
  const mobileAuthButtons = (
    <motion.div
      className="flex flex-col gap-3 py-4 border-t border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Link
        to="/login"
        className="w-full"
        onClick={() => setOpenNav(false)}
      >
        <Button
          fullWidth
          variant="text"
          size="sm"
          className="text-brand-blue font-open-sans border border-white/20 hover:border-white/40 transition-colors"
        >
          Log In
        </Button>
      </Link>
      <Link
        to="/signup"
        className="w-full"
        onClick={() => setOpenNav(false)}
      >
        <Button
          fullWidth
          variant="gradient"
          size="sm"
          className="bg-white text-brand-green hover:bg-gray-100 font-semibold shadow-lg"
        >
          Sign Up
        </Button>
      </Link>
    </motion.div>
  );

  return (
    <div className="w-full">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar
          className={`sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-3 lg:px-8 lg:py-4 bg-brand-green text-white shadow-2xl font-bbh-sans-bartle backdrop-blur-sm border-none transition-all duration-300 ${
            scrolled ? "bg-brand-green/95 shadow-xl" : "bg-brand-green"
          }
          // --- HERE IS THE CHANGE ---
          dark:bg-dark-bg dark:shadow-dark-surface/50
          `}
        >
          <div className="flex items-center justify-between">
            <motion.div variants={logoVariants} whileHover="hover">
              <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 font-bold text-xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-brand-blue dark:text-brand-blue font-bbh-sans-bartle"
              >
                Kick Zone
              </Typography>
            </motion.div>

            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-3">
                {isLoggedIn ? (
                  // If logged in, show the ProfileMenu
                  <ProfileMenu user={user} onLogout={onLogout} />
                ) : (
                  // If not logged in, show Log In and Sign Up
                  <>
                    <motion.div
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Link to="/login">
                        <Button
                          variant="text"
                          size="sm"
                          className="hidden lg:inline-block text-brand-blue font-open-sans hover:text-gray-200 border border-white/20 hover:border-white/40 transition-colors"
                        >
                          <span>Log In</span>
                        </Button>
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Link to="/signup">
                        <Button
                          variant="gradient"
                          size="sm"
                          className="hidden lg:inline-block bg-white text-brand-green hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                          <span>Sign Up</span>
                        </Button>
                      </Link>
                    </motion.div>
                  </>
                )}
              </div>
              {/* === END CONDITIONAL AUTH RENDER === */}

              {/* === THEME TOGGLE BUTTON (Desktop) === */}
              <IconButton
                variant="text"
                color="white"
                onClick={toggleTheme}
                className="text-white dark:text-dark-text"
              >
                {theme === "light" ? (
                  <MoonIcon className="h-6 w-6" />
                ) : (
                  <SunIcon className="h-6 w-6" />
                )}
              </IconButton>
              {/* === END THEME TOGGLE BUTTON === */}

              {/* === CART ICON === */}
              <Link to="/cart">
                <Badge content={cart?.length || 0} color="green">
                  <IconButton variant="text" color="white">
                    <ShoppingCartIcon className="h-6 w-6 text-white" />
                  </IconButton>
                </Badge>
              </Link>
              {/* === END CART ICON === */}

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  variant="text"
                  className="ml-auto h-8 w-8 text-inherit hover:bg-white/10 focus:bg-white/10 active:bg-white/10 lg:hidden transition-colors"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {openNav && (
              <motion.div
                variants={mobileNavVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden overflow-hidden dark:bg-dark-surface rounded-lg"
              >
                <div className="container mx-auto">
                  <motion.ul className="flex flex-col gap-2 py-4">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.label}
                        custom={index}
                        variants={navItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Typography
                          as="div"
                          variant="small"
                          className="font-open-sans p-2 block text-black hover:text-brand-blue rounded-lg transition-colors dark:text-dark-text dark:hover:text-white"
                        >
                          <Link
                            to={item.path}
                            onClick={() => setOpenNav(false)}
                          >
                            {item.label}
                          </Link>
                        </Typography>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div
                    className="flex flex-col gap-3 py-4 border-t border-white/20 dark:border-dark-surface/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {isLoggedIn ? (
                      // If logged in, show Profile and Sign Out
                      <>
                        <Link
                          to="/profile"
                          className="w-full"
                          onClick={() => setOpenNav(false)}
                        >
                          <Button
                            fullWidth
                            variant="text"
                            size="sm"
                            className="text-brand-blue font-open-sans border border-white/20 hover:border-white/40 transition-colors dark:text-dark-text dark:border-dark-text/30"
                          >
                            My Profile
                          </Button>
                        </Link>
                        <Button
                          fullWidth
                          variant="gradient"
                          size="sm"
                          className="bg-red-500 text-white hover:bg-red-600 font-semibold shadow-lg"
                          onClick={() => {
                            onLogout();
                            setOpenNav(false);
                          }}
                        >
                          Sign Out
                        </Button>
                      </>
                    ) : (
                      // If not logged in, show Log In and Sign Up
                      <>
                        <Link
                          to="/login"
                          className="w-full"
                          onClick={() => setOpenNav(false)}
                        >
                          <Button
                            fullWidth
                            variant="text"
                            size="sm"
                            className="text-brand-blue font-open-sans border border-white/20 hover:border-white/40 transition-colors dark:text-dark-text dark:border-dark-text/30"
                          >
                            Log In
                          </Button>
                        </Link>
                        <Link
                          to="/signup"
                          className="w-full"
                          onClick={() => setOpenNav(false)}
                        >
                          <Button
                            fullWidth
                            variant="gradient"
                            size="sm"
                            className="bg-white text-brand-green hover:bg-gray-100 font-semibold shadow-lg"
                          >
                            Sign Up
                          </Button>
                        </Link>
                      </>
                    )}

                    {/* === THEME TOGGLE BUTTON (Mobile) === */}
                    <Button
                      fullWidth
                      variant="text"
                      size="sm"
                      className="text-brand-blue font-open-sans border border-white/20 hover:border-white/40 transition-colors dark:text-dark-text dark:border-dark-text/30 flex items-center justify-center gap-2"
                      onClick={() => {
                        toggleTheme();
                        setOpenNav(false);
                      }}
                    >
                      {theme === "light" ? (
                        <MoonIcon className="h-5 w-5" />
                      ) : (
                        <SunIcon className="h-5 w-5" />
                      )}
                      {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </Button>
                    {/* === END THEME TOGGLE BUTTON === */}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Navbar>
      </motion.div>
    </div>
  );
}

const Header = ({ isLoggedIn, user, onLogout }) => (
  <header>
    <StickyNavbar isLoggedIn={isLoggedIn} user={user} onLogout={onLogout} />
  </header>
);

export default Header;