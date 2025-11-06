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

// Receives user and onLogout as props
export function ProfileMenu({ user, onLogout }) {
  const navigate = useNavigate();

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
            alt={user?.name || "User"}
            src={user?.avatar || "https://docs.material-tailwind.com/img/face-2.jpg"}
            className="border-2 border-white/80"
          />
        </motion.div>
      </MenuHandler>
      <MenuList>
        <MenuItem
          className="flex items-center gap-2"
          onClick={() => navigate("/userprofile/1")} 
        >
          <UserCircleIcon strokeWidth={2} className="h-5 w-5" />
          <Typography variant="small" className="font-open-sans font-medium">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem
          className="flex items-center gap-2 text-red-500 hover:!bg-red-50 hover:!text-red-500"
          onClick={onLogout} // Call the onLogout prop from useAuth
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