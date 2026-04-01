import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";

function LangDialog({ open, setOpen }) {
  const [language, setLanguage] = useState("vi");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsLangDialogOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent disableScrollLock className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Chọn Ngôn Ngữ</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-2 p-2">
            <button
              onClick={() => handleLanguageChange("vi")}
              className={`w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 ${
                language === "vi" ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              🇻🇳 Tiếng Việt
            </button>

            <button
              onClick={() => handleLanguageChange("en")}
              className={`w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 ${
                language === "en" ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              🇺🇸 English
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LangDialog;
