import React, { useState } from "react"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegQuestionCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const UserMenu = () => {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  const handleAuthClick = () => {
    setIsAuthDialogOpen((prev) => !prev);
  };

  const menuItems = [
    { icon: <FaRegQuestionCircle />, label: "Trung tâm trợ giúp" },

    {
      label: "Đăng nhập hoặc đăng ký",
      handler: handleAuthClick,
      isPrimary: true,
    },
  ];

  return (
    <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
      <div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button
              className={`px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 ease-in-out active:scale-95`}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-60 px-2 py-2"
            align="end"
            sideOffset={15}
          >
            {menuItems.map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="text-base cursor-pointer px-3 py-2"
                  onClick={item.handler}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className={item.isPrimary ? "font-semibold" : ""}>
                      {item.label}
                    </span>
                  </div>
                </DropdownMenuItem>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-montserrat text-2xl">
            Đăng nhập hoặc Đăng ký
          </DialogTitle>
          <DialogDescription>
            Vui lòng nhập thông tin của bạn để tiếp tục.
          </DialogDescription>
        </DialogHeader>

        <div className="py-5">
          <p className="text-gray-700">Form đăng nhập/đăng ký sẽ ở đây...</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserMenu;
