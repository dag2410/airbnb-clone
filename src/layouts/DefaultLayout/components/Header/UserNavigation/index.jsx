import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import UserMenu from "@/layouts/DefaultLayout/components/Header/UserMenu";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Notification from "../Notification";
import { ModeToggle } from "../UserMenu/ModeToggle";

const UserNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCreateRoom = location.pathname == "/host/create-listing";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentUser = useUser();

  const baseClasses =
    "hover:bg-gray-200 rounded-full transition-all duration-300 ease-in-out active:scale-95";

  const handleLanguageChange = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className={`relative flex items-center gap-2 self-stretch	flex-1`}>
      {!isCreateRoom && (
        <Button
          variant="ghost"
          className={`bg-transparent ${baseClasses} font-montserrat font-semibold text-sm text-black`}
          onClick={() => navigate("/host/create-listing")}
        >
          Trở thành host
        </Button>
      )}

      {/* <ModeToggle /> */}

      <Notification />

      <UserMenu />
    </div>
  );
};

export default UserNavigation;
