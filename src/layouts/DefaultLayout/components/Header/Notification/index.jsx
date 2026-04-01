import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, X } from "lucide-react";
import { useState } from "react";

const mockNotifications = [
  {
    id: 1,
    title: "Xác nhận đặt phòng",
    message: "Phòng tại Ba Đình đã được xác nhận",
    time: "5 phút trước",
    read: false,
  },
  {
    id: 2,
    title: "Tin nhắn mới",
    message: "Bạn có tin nhắn từ chủ nhà Nguyễn Minh",
    time: "1 giờ trước",
    read: false,
  },
  {
    id: 3,
    title: "Đánh giá mới",
    message: "Khách đã để lại đánh giá 5 sao cho bạn",
    time: "Hôm qua",
    read: true,
  },
  {
    id: 4,
    title: "Thanh toán thành công",
    message: "Bạn đã nhận ₫3,650,000",
    time: "2 ngày trước",
    read: true,
  },
];

function Notification() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative p-6 rounded-full bg-gray-100 hover:bg-gray-300"
        >
          <Bell />
          {unreadCount > 0 && (
            <span className="absolute top-[-1px] right-[-2px] w-5 rounded-full bg-red-600 text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="w-80 p-0 rounded-xl shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
          <h3 className="font-semibold text-gray-800">Thông báo</h3>
          {unreadCount > 0 && (
            <button
              className="text-xs text-blue-600 hover:underline"
              onClick={() =>
                setNotifications((prev) =>
                  prev.map((n) => ({ ...n, read: true }))
                )
              }
            >
              Đánh dấu tất cả đã đọc
            </button>
          )}
        </div>

        {/* Danh sách */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="px-4 py-10 text-center text-gray-500">
              Không có thông báo
            </div>
          ) : (
            notifications.map((n) => (
              <DropdownMenuItem
                key={n.id}
                className={`flex flex-col items-start px-4 py-3 gap-1 border-b cursor-pointer ${
                  !n.read
                    ? "bg-rose-100 hover:bg-rose-200"
                    : "bg-white hover:bg-gray-50"
                }  transition-all duration-300 ease-in-out`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMarkAsRead(n.id);
                }}
              >
                <div className="w-full flex justify-between items-center">
                  <span className="font-semibold text-gray-800 text-sm">
                    {n.title}
                  </span>
                  <span className="text-xs text-gray-500">{n.time}</span>
                </div>
                <div className=" w-full flex justify-between items-center">
                  <p className="text-sm text-gray-600">{n.message}</p>
                  <button
                    className="p-1 hover:bg-gray-100 rounded-full"
                    onClick={(e) => {
                      handleDelete(n.id);
                    }}
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </DropdownMenuItem>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Notification;
