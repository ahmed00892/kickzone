import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
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

//  email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    favoredPosition: "",
    agreedToTerms: false,
  });

  // State for error messages and loading state
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // --- GET THE LOGIN FUNCTION FROM CONTEXT ---
  const { login } = useAuth();

  // State for password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle handlers for password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  // handler for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Specific handler for Material Tailwind Select
  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      favoredPosition: value,
    }));
  };

  // Specific handler for Checkbox
  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      agreedToTerms: e.target.checked,
    }));
  };

  // Helper function to calculate age
  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Form validation logic
  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      birthdate,
      favoredPosition,
      agreedToTerms,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !birthdate ||
      !favoredPosition
    ) {
      return "Please fill out all fields.";
    }

    if (firstName.length < 3 || lastName.length < 3) {
      return "First and last name must be at least 3 characters long.";
    }

    if (!EMAIL_REGEX.test(email)) {
      return "Please enter a valid email address.";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    // Age check
    if (!birthdate) {
      return "Please enter your birthdate.";
    }
    const age = calculateAge(birthdate);
    if (isNaN(age)) {
      return "Please enter a valid birthdate.";
    }
    if (age < 16) {
      return "You must be at least 16 years old to register.";
    }

    if (!agreedToTerms) {
      return "You must agree to the Terms and Conditions.";
    }
    return null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // 1. Frontend Validation
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    // 2. Prepare Data for Backend
    const backendData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email.toLowerCase(),
      password: formData.password,
      favouritePosition: formData.favoredPosition,
      birthday: formData.birthdate, 
    };

    try {
      // 3. Send Data to Backend
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backendData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle errors from the server (like "User already exists")
        throw new Error(data.message || "Failed to sign up");
      }

      // Use the context's login function to save the new session
      login(data.user, data.token);

      // Navigate to the home page (or profile)
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
        className="p-8 w-full max-w-lg dark:bg-dark-surface"
      >
        <div className="text-center">
          <Typography
            variant="h3"
            className="font-bbh-sans-bartle font-bold text-brand-blue dark:text-white"
          >
            Create Your Player Profile
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-open-sans font-normal text-brand-gray dark:text-dark-text"
          >
            Join Kickzone and get on the pitch.
          </Typography>
        </div>
        <form className="mt-8 mb-2" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                size="lg"
                label="First Name"
                name="firstName"
                color="blue"
                value={formData.firstName}
                onChange={handleChange}
                className="dark:text-white"
                labelProps={{
                  className: "dark:text-dark-text",
                }}
              />
              <Input
                size="lg"
                label="Last Name"
                name="lastName"
                color="blue"
                value={formData.lastName}
                onChange={handleChange}
                className="dark:text-white"
                labelProps={{
                  className: "dark:text-dark-text",
                }}
              />
            </div>

            <Input
              type="email"
              size="lg"
              label="Email"
              name="email"
              color="blue"
              value={formData.email}
              onChange={handleChange}
              className="dark:text-white"
              labelProps={{
                className: "dark:text-dark-text",
              }}
            />
            <Input
              type={showPassword ? "text" : "password"}
              size="lg"
              label="Password"
              name="password"
              color="blue"
              value={formData.password}
              onChange={handleChange}
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
            <Input
              type={showConfirmPassword ? "text" : "password"}
              size="lg"
              label="Confirm Password"
              name="confirmPassword"
              color="blue"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="dark:text-white"
              labelProps={{
                className: "dark:text-dark-text",
              }}
              icon={
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="p-1"
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500 dark:text-dark-text" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500 dark:text-dark-text" />
                  )}
                </button>
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="date"
                size="lg"
                label="Birthdate"
                name="birthdate"
                color="blue"
                value={formData.birthdate}
                onChange={handleChange}
                className="dark:text-white"
                labelProps={{
                  className: "dark:text-dark-text",
                }}
              />
              <Select
                label="Favored Position"
                color="blue"
                value={formData.favoredPosition}
                onChange={handleSelectChange}
                className="dark:text-white"
                labelProps={{
                  className: "dark:text-dark-text",
                }}
                menuProps={{
                  className: "dark:bg-dark-surface dark:border-dark-text/30",
                }}
              >
                <Option
                  value="Goalkeeper"
                  className="dark:text-dark-text dark:hover:bg-dark-bg"
                >
                  Goalkeeper
                </Option>
                <Option
                  value="Defender"
                  className="dark:text-dark-text dark:hover:bg-dark-bg"
                >
                  Defender
                </Option>
                <Option
                  value="Midfielder"
                  className="dark:text-dark-text dark:hover:bg-dark-bg"
                >
                  Midfielder
                </Option>
                <Option
                  value="Forward"
                  className="dark:text-dark-text dark:hover:bg-dark-bg"
                >
                  Forward
                </Option>
                <Option
                  value="Any"
                  className="dark:text-dark-text dark:hover:bg-dark-bg"
                >
                  Any
                </Option>
              </Select>
            </div>
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
                I agree to the&nbsp;
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-brand-green dark:text-dark-accent"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            checked={formData.agreedToTerms}
            onChange={handleCheckboxChange} // Special handler
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
            loading={isLoading} // Material Tailwind loading prop
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-open-sans font-normal text-brand-gray dark:text-dark-text"
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-brand-green hover:underline dark:text-dark-accent"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </section>
  );
}

export default SignUp;
