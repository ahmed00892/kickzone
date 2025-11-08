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
import Stadium from "./pages/stadiums/Stadium";
import StadiumDetails from "./pages/stadiums/StadiumDetails";
import Cart from "./pages/Cart.jsx";
import ViewStadiums from "./pages/admin/ViewStadiums.jsx";
import AdminStadiumDetails from "./pages/admin/AdminStadiumDetails.jsx";
import AddStadium from "./pages/stadiums/Addstadium.jsx";

import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth.js";
import UserProtectedRoute from "./context/UserProtectedRoute.jsx";
import AdminProtectedRoute from "./context/AdminProtectedRoute.jsx";

function App() {
  const { user, isLoggedIn, login, logout, updateUser } = useAuth();

  return (
    <>
      <ScrollToTop />
      <Header isLoggedIn={isLoggedIn} user={user} onLogout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/stadiums" element={<Stadium />} />
        <Route path="/stadiums/:id" element={<StadiumDetails />} />
        <Route path="/addstadium" element={<AddStadium />} />

        <Route
          path="/profile"
          element={
            <UserProtectedRoute>
              <Profile user={user} />
            </UserProtectedRoute>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <UserProtectedRoute>
              <EditProfile user={user} onUpdateUser={updateUser} />
            </UserProtectedRoute>
          }
        />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/admin/view"
          element={
            <AdminProtectedRoute>
              <ViewStadiums />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/stadiums/:id"
          element={
            <AdminProtectedRoute>
              <AdminStadiumDetails />
            </AdminProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
