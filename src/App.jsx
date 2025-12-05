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
import DeleteStadium from "./pages/stadiums/DeleteStadium.jsx"; // New import
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
            path="/deletestadium"
            element={
              <AdminProtectedRoute>
                <DeleteStadium />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/editstadium/:id"
            element={
              <AdminProtectedRoute>
                <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-12 px-4">
                  <div className="max-w-2xl mx-auto bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-8">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-dark-text mb-8 text-center">
                      Edit Stadium
                    </h2>
                    <div className="text-center py-8">
                      <p className="text-gray-600 dark:text-dark-text/70 mb-6">
                        Edit stadium functionality coming soon!
                      </p>
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => window.history.back()}
                          className="bg-gray-300 dark:bg-dark-text/20 text-gray-800 dark:text-dark-text px-6 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-dark-text/30 transition-colors"
                        >
                          Go Back
                        </button>
                        <button
                          onClick={() => (window.location.href = "/stadiums")}
                          className="bg-brand-green dark:bg-dark-accent text-white px-6 py-2 rounded-lg hover:bg-brand-green/90 dark:hover:bg-dark-accent/90 transition-colors"
                        >
                          View Stadiums
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
