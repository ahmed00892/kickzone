import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const UserProtectedRoute = ({ children }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserProtectedRoute;
