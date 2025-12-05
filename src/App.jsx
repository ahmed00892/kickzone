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
import Cart from "./pages/Cart.jsx";
import AddStadium from "./pages/stadiums/Addstadium.jsx";

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

  // Don't show Header/Footer for admin routes
  if (location.pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
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
          {/* ADMIN ROUTES - Without Header/Footer (handled by LayoutWrapper) */}
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
                <div className="p-8">
                  <h1 className="text-3xl font-bold">Bookings Management</h1>
                  <p>Bookings page content will go here.</p>
                </div>
              }
            />
            <Route
              path="users"
              element={
                <div className="p-8">
                  <h1 className="text-3xl font-bold">Users Management</h1>
                  <p>Users page content will go here.</p>
                </div>
              }
            />
            <Route
              path="reports"
              element={
                <div className="p-8">
                  <h1 className="text-3xl font-bold">Reports & Analytics</h1>
                  <p>Reports page content will go here.</p>
                </div>
              }
            />
            <Route
              path="settings"
              element={
                <div className="p-8">
                  <h1 className="text-3xl font-bold">Settings</h1>
                  <p>Settings page content will go here.</p>
                </div>
              }
            />
          </Route>

          {/* PUBLIC ROUTES - With Header/Footer (handled by LayoutWrapper) */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/stadiums" element={<Stadium />} />
          <Route path="/stadiums/:id" element={<StadiumDetails />} />

          {/* PROTECTED ROUTES */}
          <Route
            path="/addstadium"
            element={
              <AdminProtectedRoute>
                <AddStadium />
              </AdminProtectedRoute>
            }
          />

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

          {/* TEST ROUTE - Remove this after testing */}
          <Route
            path="/test-admin"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Test Route Working!</h1>
                <p className="mb-6">If you can see this, routes are working.</p>
                <div className="space-x-4">
                  <a
                    href="/admin"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                  >
                    Go to Admin Dashboard
                  </a>
                  <a
                    href="/"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                  >
                    Go to Home
                  </a>
                </div>
              </div>
            }
          />

          {/* Test simple admin route without layout */}
          <Route
            path="/admin-test"
            element={
              <div className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold mb-4">
                  Test Admin Dashboard
                </h1>
                <p>
                  This is a test dashboard. If you see this, admin routing
                  works!
                </p>
                <a
                  href="/"
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  ← Back to Home
                </a>
              </div>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutWrapper>
    </>
  );
}

export default App;
