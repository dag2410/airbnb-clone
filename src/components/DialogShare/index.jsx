import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

import { FaCommentDots, FaCopy, FaEnvelope, FaFacebook } from "react-icons/fa";

function DialogShare({ open, onOpenChange, title }) {
  const currentUrl = window.location.href;
  const [message, setMessage] = useState("");

  const handleAction = (action) => {
    switch (action) {
      case "copy":
        navigator.clipboard.writeText(currentUrl);
        setMessage("Đã sao chép liên kết!");
        setTimeout(() => setMessage(""), 3000);
        break;
      case "email":
        window.location.href = `mailto:?body=${encodeURIComponent(currentUrl)}`;
        break;
      case "message":
        window.location.href = `sms:?body=${encodeURIComponent(currentUrl)}`;
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };
  const items = [
    { label: "Sao chép liên kết", icon: <FaCopy />, action: "copy" },
    {
      label: "Email",
      icon: <FaEnvelope className="text-red-500" />,
      action: "email",
    },
    {
      label: "Tin nhắn",
      icon: <FaCommentDots className="text-green-500" />,
      action: "message",
    },
    {
      label: "Facebook",
      icon: <FaFacebook className="text-blue-700" />,
      action: "facebook",
    },
  ];

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center font-montserrat text-2xl font-semibold">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-3 mt-5">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleAction(item.action)}
                className="flex px-5 py-3 border border-gray-400 cursor-pointer hover:bg-gray-100 rounded-lg items-center gap-3"
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="font-montserrat font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="h-1 mt-1 text-center text-sm transition-all duration-500">
            {message && <span className="text-green-600">{message}</span>}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogShare;
