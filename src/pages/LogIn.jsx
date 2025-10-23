import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";

// Receives onLogin prop from App.jsx
export function LogIn({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      // Call the login function passed down from App.jsx

      const loginSuccess = onLogin(email, password);

      if (!loginSuccess) {
        setError("Invalid email or password. Please try again.");
      }
      // On success, the useAuth hook handles navigation
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card color="white" shadow={true} className="p-8 w-full max-w-md">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-brand-green"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V5a1 1 0 00-1.447-.894l-4 2A1 1 0 0011 7v10zM4 17a1 1 0 01-1.447.894l-2-1A1 1 0 010 16V6a1 1 0 01.553-.894l2-1A1 1 0 014 5v12z" />
            </svg>
            <Typography
              variant="h2"
              className="font-bbh-sans-bartle font-bold text-brand-blue"
            >
              Log In
            </Typography>
          </div>
          <Typography
            color="gray"
            className="mt-1 font-open-sans font-normal text-brand-gray"
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
            />
            <Input
              type={showPassword ? "text" : "password"}
              size="lg"
              label="Password"
              color="blue"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="p-1"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              }
            />
          </div>

          {/* Error Display */}
          {error && (
            <div className="flex items-center gap-2 p-3 my-4 text-sm text-red-700 bg-red-100 rounded-lg">
              <ExclamationCircleIcon className="w-5 h-5" />
              <Typography color="red" className="font-open-sans font-medium">
                {error}
              </Typography>
            </div>
          )}

          <Checkbox
            label={
              <Typography
                variant="small"
                className="font-open-sans flex items-center font-normal text-brand-gray"
              >
                Remember me
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            type="submit"
            className="mt-6 bg-brand-green"
            fullWidth
            loading={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-open-sans font-normal text-brand-gray"
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-brand-green hover:underline"
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
