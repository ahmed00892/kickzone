import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import Contact from "./pages/Contact.jsx";

import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth.js";

function App() {
  // Call the hook to get all auth state and functions
  const { user, isLoggedIn, login, logout, updateUser } = useAuth();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} user={user} onLogout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
       

        <Route
          path="/userprofile/1"
          element={
            isLoggedIn ? (
              <Profile user={user} /> // Pass user data to Profile
            ) : (
              <Navigate to="/login" replace /> // Redirect if not logged in
            )
          }
        />
        <Route
          path="/userprofile/1/edit"
          element={
            isLoggedIn ? (
              <EditProfile user={user} onUpdateUser={updateUser} /> // Pass user data to EditProfile
            ) : (
              <Navigate to="/login" replace /> // Redirect if not logged in
            )
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
