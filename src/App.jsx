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
import Stadium from "./pages/stadiums/Stadium.jsx";
import StadiumDetails from "./pages/stadiums/StadiumDetails.jsx";
import AddStadium from "./pages/stadiums/Addstadium.jsx";
import EditStadium from "./pages/stadiums/EditStadium.jsx"; // New import
import DeleteStadium from "./pages/stadiums/DeleteStadium.jsx";
import Cart from "./pages/Cart.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";
import UserProtectedRoute from "./context/UserProtectedRoute.jsx";
import AdminProtectedRoute from "./context/AdminProtectedRoute.jsx";

// Import admin components from pages/admin/
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminViewStadiums from "./pages/admin/ViewStadiums.jsx";
import AdminStadiumDetails from "./pages/admin/AdminStadiumDetails.jsx";

// Component to conditionally show Header/Footer
function LayoutWrapper({ children }) {
  const location = useLocation();
  const { user, isLoggedIn, logout } = useAuth();

  // Don't show Header/Footer for admin routes
  if (location.pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} user={user} onLogout={logout} />
      {children}
      <Footer />
    </>
  );
}

function App() {
  const { user, isLoggedIn, login, logout, updateUser } = useAuth();

  return (
    <>
      <ScrollToTop />

      <LayoutWrapper>
        <Routes>
          {/* ADMIN ROUTES - Without Header/Footer */}
          <Route
            path="/admin/*"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="stadiums" element={<AdminViewStadiums />} />
            <Route path="stadiums/:id" element={<AdminStadiumDetails />} />
            <Route
              path="bookings"
              element={
                <div className="p-8 bg-light-bg dark:bg-dark-bg min-h-screen">
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-dark-text">
                    Bookings Management
                  </h1>
                  <p className="text-gray-600 dark:text-dark-text/70 mt-2">
                    Manage all stadium bookings and reservations
                  </p>
                  <div className="mt-6 bg-white dark:bg-dark-surface rounded-lg p-6 shadow">
                    <p className="text-gray-600 dark:text-dark-text/70">
                      Bookings management interface will be implemented here.
                    </p>
                  </div>
                </div>
              }
            />
            <Route
              path="users"
              element={
                <div className="p-8 bg-light-bg dark:bg-dark-bg min-h-screen">
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-dark-text">
                    Users Management
                  </h1>
                  <p className="text-gray-600 dark:text-dark-text/70 mt-2">
                    Manage user accounts and permissions
                  </p>
                  <div className="mt-6 bg-white dark:bg-dark-surface rounded-lg p-6 shadow">
                    <p className="text-gray-600 dark:text-dark-text/70">
                      Users management interface will be implemented here.
                    </p>
                  </div>
                </div>
              }
            />
            <Route
              path="reports"
              element={
                <div className="p-8 bg-light-bg dark:bg-dark-bg min-h-screen">
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-dark-text">
                    Reports & Analytics
                  </h1>
                  <p className="text-gray-600 dark:text-dark-text/70 mt-2">
                    View performance reports and analytics
                  </p>
                  <div className="mt-6 bg-white dark:bg-dark-surface rounded-lg p-6 shadow">
                    <p className="text-gray-600 dark:text-dark-text/70">
                      Reports and analytics dashboard will be implemented here.
                    </p>
                  </div>
                </div>
              }
            />
            <Route
              path="settings"
              element={
                <div className="p-8 bg-light-bg dark:bg-dark-bg min-h-screen">
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-dark-text">
                    Settings
                  </h1>
                  <p className="text-gray-600 dark:text-dark-text/70 mt-2">
                    Configure system settings and preferences
                  </p>
                  <div className="mt-6 bg-white dark:bg-dark-surface rounded-lg p-6 shadow">
                    <p className="text-gray-600 dark:text-dark-text/70">
                      System settings will be implemented here.
                    </p>
                  </div>
                </div>
              }
            />
          </Route>

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/stadiums" element={<Stadium />} />
          <Route path="/stadiums/:id" element={<StadiumDetails />} />

          {/* PROTECTED ROUTES - User only */}
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

          <Route
            path="/cart"
            element={
              <UserProtectedRoute>
                <Cart />
              </UserProtectedRoute>
            }
          />

          {/* PROTECTED ROUTES - Admin only */}
          <Route
            path="/addstadium"
            element={
              <AdminProtectedRoute>
                <AddStadium />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/editstadium/:id"
            element={
              <AdminProtectedRoute>
                <EditStadium />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/deletestadium"
            element={
              <AdminProtectedRoute>
                <DeleteStadium />
              </AdminProtectedRoute>
            }
          />

          {/* 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutWrapper>
    </>
  );
}

export default App;
