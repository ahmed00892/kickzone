import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 1. Create the Context
const AuthContext = createContext(null);

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // For checking auth on load
  const navigate = useNavigate();

  // Initialize state from localStorage on first load
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("kickzoneToken");
      const storedUser = localStorage.getItem("kickzoneUser");

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem("kickzoneUser");
      localStorage.removeItem("kickzoneToken");
    } finally {
      setLoading(false); // Done checking auth
    }
  }, []);

  //SAVE data from API
  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem("kickzoneUser", JSON.stringify(userData));
    localStorage.setItem("kickzoneToken", userToken);
    // Note: let the page (SignUp/Login) handle navigation
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("kickzoneUser");
    localStorage.removeItem("kickzoneToken");
    navigate("/login");
  };

  const updateUser = (newUserData) => {
    try {
      // This merges new data with old data
      const updatedUser = { ...user, ...newUserData };
      setUser(updatedUser);
      localStorage.setItem("kickzoneUser", JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error("Failed to update user:", error);
      return false;
    }
  };

  // 3. The value object
  const value = {
    user,
    token, // Provide the token
    isLoggedIn: !!user, 
    loading, // Provide loading state
    login,
    logout,
    updateUser,
  };

  // 4. Return Provider (wait for auth check to finish)
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 5. Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};