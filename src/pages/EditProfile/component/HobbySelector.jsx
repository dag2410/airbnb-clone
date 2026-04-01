import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";

function HobbySelector({ label, description, currentHobbies = [], onSave }) {
  const allHobbies = [
    { id: 1, name: "Cà phê" },
    { id: 2, name: "Mua sắm" },
    { id: 3, name: "Nhiếp ảnh" },
    { id: 4, name: "Nhạc sống" },
    { id: 5, name: "Thể thao trực tiếp" },
    { id: 6, name: "Đời sống ẩm thực" },
    { id: 7, name: "Hoạt động ngoài trời" },
    { id: 8, name: "Phim ảnh" },
    { id: 9, name: "Đọc sách" },
    { id: 10, name: "Nghệ thuật" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState(currentHobbies);

  const toggleHobby = (hobby) => {
    setSelected((prev) =>
      prev.some((h) => h.id === hobby.id)
        ? prev.filter((h) => h.id !== hobby.id)
        : [...prev, hobby]
    );
  };

  const handleSave = () => {
    onSave(selected);
    setIsOpen(false);
  };

  return (
    <div>
      {/* --- Danh sách sở thích hiển thị --- */}
      <div className="flex flex-col gap-5">
        <h2 className="font-montserrat text-3xl font-semibold">
          Sở thích của tôi
        </h2>
        {selected.length > 0 ? (
          <div className="grid grid-cols-2 gap-5">
            {selected.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <span className="font-montserrat text-lg">{item.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg">Bạn chưa chọn sở thích nào</p>
        )}
      </div>

      <Button
        variant="ghost"
        size="lg"
        className="bg-gray-100 hover:bg-gray-200 text-base mt-5"
        onClick={() => setIsOpen(true)}
      >
        Chỉnh sửa sở thích
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="font-montserrat text-2xl text-left">
              {label}
            </DialogTitle>
            {description && (
              <p className="text-left font-montserrat text-gray-600 text-base mt-1">
                {description}
              </p>
            )}
          </DialogHeader>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {allHobbies.map((item) => {
              const isSelected = selected.some((h) => h.id === item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleHobby(item)}
                  className={`flex items-center gap-2 p-3 rounded-lg border transition-all duration-200
                    ${
                      isSelected
                        ? "bg-green-100 border-green-400"
                        : "bg-white border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-montserrat text-lg">{item.name}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Hủy
            </Button>
            <Button onClick={handleSave}>Lưu</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HobbySelector;
