import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import React from "react";

const mockHighlights = [
  { id: 1, name: "Tầm nhìn toàn thành phố", icon: "city" },
  { id: 2, name: "Gần bãi biển", icon: "beach" },
  { id: 3, name: "Bể bơi riêng", icon: "pool" },
  { id: 4, name: "Thiết kế độc đáo", icon: "design" },
  { id: 5, name: "Phù hợp cho gia đình", icon: "family" },
  { id: 6, name: "Chỗ đậu xe miễn phí", icon: "parking" },
  { id: 7, name: "Bếp đầy đủ tiện nghi", icon: "kitchen" },
  { id: 8, name: "Gần khu phố ăn uống", icon: "food" },
  { id: 9, name: "Yên tĩnh và riêng tư", icon: "quiet" },
  { id: 10, name: "Internet tốc độ cao", icon: "wifi" },
];

function RoomInfo({ handleInputChange, roomDetails, highlights, setFormData }) {
  const handleHighlightToggle = (highlightName) => {
    setFormData((prev) => {
      const currentHighlights = prev.highlights;

      if (currentHighlights.includes(highlightName)) {
        return {
          ...prev,
          highlights: currentHighlights.filter((h) => h !== highlightName),
        };
      } else if (currentHighlights.length < 5) {
        return {
          ...prev,
          highlights: [...currentHighlights, highlightName],
        };
      } else {
        return prev;
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Chi tiết phòng (Giữ nguyên) */}
      <div>
        <h3 className="font-semibold mb-4">Chi tiết phòng</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* ... (Các input guests, bedrooms, beds, baths giữ nguyên) ... */}
          <div>
            <Label htmlFor="guests" className="mb-2 block">
              Số khách
            </Label>
            <Input
              id="guests"
              type="number"
              name="roomDetails.guests"
              min="1"
              value={roomDetails.guests}
              onChange={handleInputChange}
              className="h-10"
            />
          </div>
          <div>
            <Label htmlFor="bedrooms" className="mb-2 block">
              Số phòng ngủ
            </Label>
            <Input
              id="bedrooms"
              type="number"
              name="roomDetails.bedrooms"
              min="1"
              value={roomDetails.bedrooms}
              onChange={handleInputChange}
              className="h-10"
            />
          </div>
          <div>
            <Label htmlFor="beds" className="mb-2 block">
              Số giường
            </Label>
            <Input
              id="beds"
              type="number"
              name="roomDetails.beds"
              min="1"
              value={roomDetails.beds}
              onChange={handleInputChange}
              className="h-10"
            />
          </div>
          <div>
            <Label htmlFor="baths" className="mb-2 block">
              Số phòng tắm
            </Label>
            <Input
              id="baths"
              type="number"
              name="roomDetails.baths"
              min="1"
              value={roomDetails.baths}
              onChange={handleInputChange}
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* PHẦN ĐIỂM NỔI BẬT ĐÃ CHUYỂN SANG SELECT */}
      <div>
        <h3 className="font-semibold mb-4">Điểm nổi bật</h3>

        {/* Select Dropdown để chọn Highlights */}
        <Select
          // Giá trị select không quan trọng vì ta quản lý bằng handleHighlightToggle
          onValueChange={(value) => handleHighlightToggle(value)}
          disabled={highlights.length >= 5}
        >
          <SelectTrigger className="w-full h-10">
            <SelectValue
              placeholder={
                highlights.length >= 5
                  ? "Đã đạt tối đa 5 điểm nổi bật"
                  : "Chọn điểm nổi bật"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {mockHighlights.map(
              (h) =>
                // Chỉ hiển thị các mục chưa được chọn
                !highlights.includes(h.name) && (
                  <SelectItem key={h.id} value={h.name}>
                    {h.name}
                  </SelectItem>
                )
            )}
          </SelectContent>
        </Select>

        {/* Hiển thị các Highlights đã chọn dưới dạng Tags */}
        <div className="mt-4 flex flex-wrap gap-2 min-h-[36px]">
          {highlights.length > 0 ? (
            highlights.map((highlight, index) => (
              <div
                key={index}
                className="inline-flex items-center rounded-full bg-brandPrimary-1/10 px-3 py-1 text-sm font-medium text-brandPrimary-1 border border-brandPrimary-1"
              >
                <span>{highlight}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="ml-2 h-4 w-4 text-brandPrimary-1 hover:text-red-600 hover:bg-transparent p-0"
                  onClick={() => handleHighlightToggle(highlight)} // Dùng toggle để loại bỏ
                >
                  <X size={14} />
                </Button>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground italic">
              Chưa có điểm nổi bật nào được chọn.
            </p>
          )}
        </div>
        {highlights.length > 0 && highlights.length < 5 && (
          <p className="text-xs text-muted-foreground mt-2">
            Đã chọn {highlights.length} / 5 điểm nổi bật.
          </p>
        )}
      </div>
    </div>
  );
}

export default RoomInfo;
