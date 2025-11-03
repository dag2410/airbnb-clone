import React, { useState } from "react"; 
import UserMenu from "@/layouts/DefaultLayout/components/Header/UserMenu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const UserNavigation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const baseClasses =
    "hover:bg-gray-200 rounded-full transition-all duration-300 ease-in-out active:scale-95";

  const handleLanguageChange = (lang) => {
    console.log(`Ngôn ngữ đã chọn: ${lang}`);
    setIsDialogOpen(false);
  };

  return (
    <div className={`relative flex items-center gap-2 self-stretch	flex-1`}>
      <Button
        variant="ghost"
        className={`bg-transparent ${baseClasses} font-montserrat font-semibold text-sm`}
      >
        Trở thành host
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button className={`px-4 py-3 bg-gray-100 ${baseClasses}`}>
            <i className="fa-solid fa-globe"></i>
          </button>
        </DialogTrigger>

        <DialogContent disableScrollLock className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Chọn Ngôn Ngữ</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-2 p-2">
            <button
              onClick={() => handleLanguageChange("vi")}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Tiếng Việt
            </button>

            <button
              onClick={() => handleLanguageChange("en")}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              English
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <UserMenu className="absolute" />
    </div>
  );
};

export default UserNavigation;
