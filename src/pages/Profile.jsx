import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const calculateAge = (birthdate) => {
  if (!birthdate) return null;
  const birthday = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
};

export function Profile() {
  // --- GET AUTH STATE FROM CONTEXT ---
  const { user, isLoggedIn, loading } = useAuth();

  // Show loading state while context is checking auth
  if (loading) {
    return (
      <div className="min-h-screen dark:bg-dark-bg flex items-center justify-center">
        <Typography className="dark:text-white">Loading...</Typography>
      </div>
    );
  }

  // Fallback to login if no user data
  if (!isLoggedIn || !user) {
    return <Navigate to="/login" replace />;
  }
  const userAge = calculateAge(user.birthday);

  return (
    <div className="min-h-screen bg-gray-100 p-4 dark:bg-dark-bg">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="relative dark:bg-dark-surface">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none h-52"
          >
            <img
              src={user.coverPhoto}
              alt="Cover Photo"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="p-4 text-center">
            <div className="relative -mt-24 mb-2">
              <img
                src={user.profilePicture}
                alt="User Avatar"
                className="h-32 w-32 rounded-full mx-auto border-4 border-white object-cover dark:border-dark-surface"
              />
            </div>
            <Typography
              variant="h6"
              className="font-bbh-sans-bartle font-bold text-brand-blue dark:text-white"
            >
              {user.firstName} {user.lastName}
            </Typography>
            <Typography className="font-open-sans text-brand-gray mt-1 dark:text-dark-text">
              {user.email}
            </Typography>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card className="md:col-span-2 p-6 dark:bg-dark-surface">
            <Typography
              variant="h6"
              className="font-bbh-sans-bartle text-brand-blue mb-4 dark:text-white"
            >
              Player Stats
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="bg-gray-200 p-2 rounded-full dark:bg-dark-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-brand-blue dark:text-dark-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <Typography className="font-open-sans text-sm text-brand-gray dark:text-dark-text">
                    Favored Position
                  </Typography>
                  <Typography className="font-open-sans font-semibold text-black dark:text-white">
                    {user.favouritePosition}
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-gray-200 p-2 rounded-full dark:bg-dark-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-brand-blue dark:text-dark-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </span>
                <div>
                  <Typography className="font-open-sans text-sm text-brand-gray dark:text-dark-text">
                    Preferred Foot
                  </Typography>
                  <Typography className="font-open-sans font-semibold text-black dark:text-white">
                    {user.preferredFoot}
                  </Typography>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 dark:bg-dark-surface">
            <Typography
              variant="h6"
              className="font-bbh-sans-bartle text-brand-blue mb-4 dark:text-white"
            >
              Info
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="bg-gray-200 p-2 rounded-full dark:bg-dark-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-brand-blue dark:text-dark-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <Typography className="font-open-sans text-sm text-brand-gray dark:text-dark-text">
                    Age
                  </Typography>
                  <Typography className="font-open-sans font-semibold text-black dark:text-white">
                    {userAge ? `${userAge} years old` : "Not set"}
                  </Typography>
                </div>
              </div>

              <div className="text-center bg-brand-green/10 p-4 rounded-lg dark:bg-dark-accent/10">
                <Typography
                  variant="h4"
                  className="font-bbh-sans-bartle text-brand-green dark:text-dark-accent"
                >
                  {user.matchesPlayed}
                </Typography>
                <Typography className="font-open-sans text-sm text-brand-green dark:text-dark-accent">
                  Matches Played
                </Typography>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-6">
          <Link to="/profile/edit">
            <Button className="bg-brand-green dark:bg-dark-accent">
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
