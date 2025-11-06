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

    // New Validation: Age check
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
    return null; // No errors
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

    // 2. Prepare Data for Backend (camelCase -> lowercase)
    const backendData = {
      firstname: formData.firstName, 
      lastname: formData.lastName, 
      email: formData.email.toLowerCase(),
      password: formData.password,
      birthdate: formData.birthdate,
      favoredposition: formData.favoredPosition,
    };

    // 3. Send Data to Backend (MOCK API OR DB CALL)
    setTimeout(() => {
      console.log("User registered:", backendData);
      setIsLoading(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card color="white" shadow={true} className="p-8 w-full max-w-lg">
        <div className="text-center">
          <Typography
            variant="h3"
            className="font-bbh-sans-bartle font-bold text-brand-blue"
          >
            Create Your Player Profile
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-open-sans font-normal text-brand-gray"
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
              />
              <Input
                size="lg"
                label="Last Name"
                name="lastName"
                color="blue"
                value={formData.lastName}
                onChange={handleChange}
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
            />
            <Input
              type={showPassword ? "text" : "password"}
              size="lg"
              label="Password"
              name="password"
              color="blue"
              value={formData.password}
              onChange={handleChange}
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
            <Input
              type={showConfirmPassword ? "text" : "password"}
              size="lg"
              label="Confirm Password"
              name="confirmPassword"
              color="blue"
              value={formData.confirmPassword}
              onChange={handleChange}
              icon={
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="p-1"
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
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
              />
              <Select
                label="Favored Position"
                color="blue"
                value={formData.favoredPosition} 
                onChange={handleSelectChange} 
              >
                <Option value="Goalkeeper">Goalkeeper</Option>
                <Option value="Defender">Defender</Option>
                <Option value="Midfielder">Midfielder</Option>
                <Option value="Forward">Forward</Option>
                <Option value="Any">Any</Option>
              </Select>
            </div>
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
                I agree to the&nbsp;
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-brand-green"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            checked={formData.agreedToTerms}
            onChange={handleCheckboxChange} // Special handler
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            type="submit"
            className="mt-6 bg-brand-green"
            fullWidth
            loading={isLoading} // Material Tailwind loading prop
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-open-sans font-normal text-brand-gray"
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-brand-green hover:underline"
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

