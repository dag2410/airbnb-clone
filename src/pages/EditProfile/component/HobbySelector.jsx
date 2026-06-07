import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";

function HobbySelector({ label, description, currentHobbies = [], onSave }) {
  // Bổ sung thuộc tính icon đồng bộ với cấu trúc dữ liệu của trang About
  const allHobbies = [
    { id: 1, icon: "☕", name: "Cà phê" },
    { id: 2, icon: "🛍️", name: "Mua sắm" },
    { id: 3, icon: "📷", name: "Nhiếp ảnh" },
    { id: 4, icon: "🎵", name: "Nhạc sống" },
    { id: 5, icon: "🎮", name: "Thể thao trực tiếp" },
    { id: 6, icon: "🍜", name: "Đời sống ẩm thực" },
    { id: 7, icon: "⛺", name: "Hoạt động ngoài trời" },
    { id: 8, icon: "🎬", name: "Phim ảnh" },
    { id: 9, icon: "📚", name: "Đọc sách" },
    { id: 10, icon: "🎨", name: "Nghệ thuật" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(currentHobbies);

  const toggleHobby = (hobby) => {
    setSelected((prev) =>
      prev.some((h) => h.id === hobby.id)
        ? prev.filter((h) => h.id !== hobby.id)
        : [...prev, hobby],
    );
  };

  const handleSave = () => {
    onSave(selected);
    setIsOpen(false);
  };

  return (
    <div>
      {/* --- Danh sách sở thích hiển thị --- */}
      <div className="flex flex-col gap-4">
        <h2 className="font-montserrat text-xl font-bold text-gray-900">
          Sở thích của tôi
        </h2>

        {selected.length > 0 ? (
          // Thay đổi từ grid-cols-2 sang dạng flex-wrap để các tag co giãn tự nhiên theo chữ giống trang About
          <div className="flex flex-wrap gap-3">
            {selected.map((item) => (
              <div
                key={item.id}
                className="flex gap-2.5 items-center bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl shadow-sm"
              >
                <span className="text-xl">{item.icon || "✨"}</span>
                <span className="font-montserrat text-base font-medium text-gray-700">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 font-montserrat text-base italic">
            Bạn chưa chọn sở thích nào
          </p>
        )}
      </div>

      <Button
        variant="outline"
        size="lg"
        className="mt-6 rounded-xl border-gray-300 font-medium text-sm text-gray-700 hover:bg-gray-50 shadow-sm transition-all"
        onClick={() => setIsOpen(true)}
      >
        Chỉnh sửa sở thích
      </Button>

      {/* --- Dialog Chọn Sở Thích --- */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl rounded-3xl p-6 gap-6">
          <DialogHeader className="border-b border-gray-100 pb-4">
            <DialogTitle className="font-montserrat text-2xl font-bold text-gray-900 text-left">
              {label}
            </DialogTitle>
            {description && (
              <p className="text-left font-montserrat text-gray-500 text-sm mt-1.5 leading-relaxed">
                {description}
              </p>
            )}
          </DialogHeader>

          {/* Grid hiển thị danh sách chọn trong Dialog */}
          <div className="grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1 py-1">
            {allHobbies.map((item) => {
              const isSelected = selected.some((h) => h.id === item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleHobby(item)}
                  className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200 outline-none
                    ${
                      isSelected
                        ? "bg-gray-900 border-gray-900 text-white shadow-md font-semibold scale-[0.99]"
                        : "bg-white border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                >
                  <span
                    className={`text-2xl transition-transform ${isSelected ? "scale-110" : ""}`}
                  >
                    {item.icon}
                  </span>
                  <span className="font-montserrat text-base tracking-wide flex-1">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="mt-2 pt-4 border-t border-gray-100 flex justify-end gap-3">
            <Button
              variant="ghost"
              className="rounded-xl font-medium text-gray-500 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Hủy
            </Button>
            <Button
              className="rounded-xl px-6 font-semibold shadow-md transition-all"
              onClick={handleSave}
            >
              Lưu thay đổi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HobbySelector;
