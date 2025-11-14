import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export function ProfileMenu() {
  const navigate = useNavigate();
  // --- GET DATA FROM CONTEXT ---
  const { user, logout } = useAuth();
  if (!user) return null; // Safety check

  return (
    <Menu>
      <MenuHandler>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Avatar
            variant="circular"
            alt={user.firstName || "User"}
            src={user.profilePicture}
            className="border-2 border-white/80 dark:border-dark-bg"
          />
        </motion.div>
      </MenuHandler>
      <MenuList className="dark:bg-dark-surface dark:border-dark-text/30">
        <MenuItem
          className="flex items-center gap-2 dark:text-dark-text dark:hover:bg-dark-bg"
          onClick={() => navigate("/profile")}
        >
          <UserCircleIcon strokeWidth={2} className="h-5 w-5" />
          <Typography variant="small" className="font-open-sans font-medium">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem
          className="flex items-center gap-2 text-red-500 hover:!bg-red-50 hover:!text-red-500 dark:hover:!bg-red-500/10 dark:hover:!text-red-500"
          // --- context's logout function ---
          onClick={logout}
        >
          <ArrowRightOnRectangleIcon strokeWidth={2} className="h-5 w-5" />
          <Typography variant="small" className="font-open-sans font-medium">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
