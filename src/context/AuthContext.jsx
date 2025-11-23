import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const API_URL = "https://kickzonebe.vercel.app/api/v1"; // Your backend URL

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("kickzoneToken")); // Load token immediately
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Define the function to fetch user data
    const fetchUser = async () => {
      // If no token, stop loading and return
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // Call your new /users/me endpoint
        const response = await fetch(`${API_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Success! Set the user data from the DB
          setUser(data.user); 
        } else {
          // If token is invalid/expired (401), clear it
          console.error("Token invalid, logging out");
          logout();
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]); // Re-run this whenever 'token' changes

  const login = (userData, userToken) => {
    // 1. Save token to state and LocalStorage
    setToken(userToken);
    localStorage.setItem("kickzoneToken", userToken);
    
    // 2. Save user to state ONLY
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("kickzoneToken");
    navigate("/login");
  };

  const updateUser = (newUserData) => {
    // Update the local state so the UI changes immediately
    setUser(newUserData);
  };

  const value = {
    user,
    token,
    isLoggedIn: !!user,
    loading,
    login,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};