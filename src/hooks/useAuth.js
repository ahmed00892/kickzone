import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// MOCK USER DATA
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

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // On initial app load, check localStorage for a saved user session
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("kickzoneUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem("kickzoneUser"); // Clear corrupted data
    }
  }, []);

  // Function to be passed to the Login page
  const login = (email, password) => {
    if (
      email.toLowerCase() === MOCK_USER_DATA.email.toLowerCase() &&
      password === MOCK_USER_DATA.password
    ) {
      localStorage.setItem("kickzoneUser", JSON.stringify(MOCK_USER_DATA));
      setUser(MOCK_USER_DATA);
      setIsLoggedIn(true);
      navigate("/");
      return true;
    }
    return false;
  };

  // Function to be passed to the Header's ProfileMenu
  const logout = () => {
    localStorage.removeItem("kickzoneUser");
    setUser(null);
    setIsLoggedIn(false);
    navigate("/login"); 
  };
  // This function will be called by the EditProfile page
  const updateUser = (newUserData) => {
    
    try {
      // Get the currently stored user to merge
      const storedUser = JSON.parse(localStorage.getItem("kickzoneUser")) || {};
      // Merge the old user data with the new form data
      const updatedUser = { ...storedUser, ...newUserData };
      
      // Save the updated user to state and localStorage
      setUser(updatedUser);
      localStorage.setItem("kickzoneUser", JSON.stringify(updatedUser));
      
      return true; 
    } catch (error) {
      console.error("Failed to update user:", error);
      return false; 
    }
  };
  return { user, isLoggedIn, login, logout, updateUser};
};
