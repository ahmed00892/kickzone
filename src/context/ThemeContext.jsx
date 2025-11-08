
import { createContext, useContext, useEffect, useState } from "react";

// 1. Create the Context
const ThemeContext = createContext(null);

// 2. Create the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 3. Define the value to be shared
  const value = {
    theme,
    toggleTheme,
  };

  // 4. Return the Provider
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// 5. Create the custom hook for components to use
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};