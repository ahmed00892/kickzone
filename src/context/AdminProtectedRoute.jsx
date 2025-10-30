import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AdminProtectedRoute = ({ children }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
