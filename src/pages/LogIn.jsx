import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";
// ---LIVE API URL ---
const API_URL = "https://kickzonebe.vercel.app/api/v1";
export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // --- GET THE LOGIN FUNCTION FROM CONTEXT ---
  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Send Data to Backend
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.toLowerCase(),
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle errors from the server (like "Invalid email or password")
        throw new Error(data.message || "Failed to sign in");
      }
      // Use the context's login function to save the new session
      login(data.user, data.token);

      // Navigate to the home page
      navigate("/");

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4 dark:bg-dark-bg">
      <Card
        color="white"
        shadow={true}
        className="p-8 w-full max-w-md dark:bg-dark-surface"
      >
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-brand-green dark:text-dark-accent"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V5a1 1 0 00-1.447-.894l-4 2A1 1 0 0011 7v10zM4 17a1 1 0 01-1.447.894l-2-1A1 1 0 010 16V6a1 1 0 01.553-.894l2-1A1 1 0 014 5v12z" />
            </svg>
            <Typography
              variant="h2"
              className="font-bbh-sans-bartle font-bold text-brand-blue dark:text-white"
            >
              Log In
            </Typography>
          </div>
          <Typography
            color="gray"
            className="mt-1 font-open-sans font-normal text-brand-gray dark:text-dark-text"
          >
            Welcome back to Kickzone.
          </Typography>
        </div>
        <form className="mt-8 mb-2" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              color="blue"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="dark:text-white"
              labelProps={{
                className: "dark:text-dark-text",
              }}
            />
            <Input
              type={showPassword ? "text" : "password"}
              size="lg"
              label="Password"
              color="blue"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="dark:text-white"
              labelProps={{
                className: "dark:text-dark-text",
              }}
              icon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="p-1"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500 dark:text-dark-text" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500 dark:text-dark-text" />
                  )}
                </button>
              }
            />
          </div>

          {/* Error Display */}
          {error && (
            <div className="flex items-center gap-2 p-3 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-500/10">
              <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
              <Typography
                color="red"
                className="font-open-sans font-medium dark:text-red-400"
              >
                {error}
              </Typography>
            </div>
          )}

          <Checkbox
            label={
              <Typography
                variant="small"
                className="font-open-sans flex items-center font-normal text-brand-gray dark:text-dark-text"
              >
                Remember me
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            className="dark:border-dark-text"
            labelProps={{
              className: "dark:text-dark-text",
            }}
          />
          <Button
            type="submit"
            className="mt-6 bg-brand-green dark:bg-dark-accent"
            fullWidth
            loading={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-open-sans font-normal text-brand-gray dark:text-dark-text"
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-brand-green hover:underline dark:text-dark-accent"
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </section>
  );
}

export default LogIn;