import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 1. Create the Context
const AuthContext = createContext(null);

// MOCK USER DATA (Same as before)
const MOCK_USER_DATA = {
  name: "Abdelghafour KickZone",
  email: "Abdelghafour@kickzone.com",
  password: "12345678",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZJzRjI9omI7jwemCbNBMTtbjhNiFerpHGA&s",
  coverPhoto:
    "https://7bet.co.uk/blog/wp-content/uploads/2024/06/football-18.jpg",
  birthdate: "1998-07-15",
  position: "Forward",
  skillLevel: "Intermediate",
  preferredFoot: "Right",
  matchesPlayed: 78,
};

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isLoggedIn = !!user; 
  const navigate = useNavigate();

  // Initialize state from localStorage on first load
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("kickzoneUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem("kickzoneUser");
    }
  }, []);

  const login = (email, password) => {
    if (
      email.toLowerCase() === MOCK_USER_DATA.email.toLowerCase() &&
      password === MOCK_USER_DATA.password
    ) {
      const { password: mockPassword, ...safeUserData } = MOCK_USER_DATA;
      
      localStorage.setItem("kickzoneUser", JSON.stringify(safeUserData));
      setUser(safeUserData);
      navigate("/");
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("kickzoneUser");
    setUser(null);
    navigate("/login");
  };

  const updateUser = (newUserData) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("kickzoneUser")) || {};
      const updatedUser = { ...storedUser, ...newUserData };
      setUser(updatedUser);
      localStorage.setItem("kickzoneUser", JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error("Failed to update user:", error);
      return false;
    }
  };

  // 3. The value object that will be shared across the app
  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    updateUser,
  };

  // 4. Return the Provider wrapping children
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 5. Custom hook to use the context easily
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};