import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const AdminProtectedRoute = ({ children }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
