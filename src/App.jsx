import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import EditStadium from "./pages/EditStadium.jsx";
import { Route, Routes } from "react-router-dom";
<pages />;

import Stadium from "./pages/stadiums/Stadium";
import StadiumDetails from "./pages/stadiums/StadiumDetails";
import Cart from "./pages/Cart.jsx";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth.js";
import AddStadium from "./pages/stadiums/Addstadium.jsx";
function App() {
  // Call the hook to get all auth state and functions
  const { user, isLoggedIn, login, logout, updateUser } = useAuth();

  return (
    <CartProvider>
      <ScrollToTop />
      <Header isLoggedIn={isLoggedIn} user={user} onLogout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
        <Route path="/Contact" element={<Contact />} />
=======
        <Route path="/contact" element={<Contact />} />
        <Route path="/stadiums" element={<Stadium />} />
        <Route path="/stadiums/:id" element={<StadiumDetails />} />
        <Route path="/addstadium" element={<AddStadium />} />
        <Route path="/cart" element={<Cart />} />
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

>>>>>>> b7c3a8cf53bb83cca1ad4119134d9c8b6930a33a
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/stadiums/edit/:id" element={<EditStadium />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
