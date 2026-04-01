import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as Slider from "@radix-ui/react-slider";

import { useEffect, useState } from "react";

function FilterDialog({ open, onOpenChange, onApply }) {
  const defaultFilters = {
    priceRange: [0, 5000000],
    location: "",
    guests: "",
    amenities: [],
    sortBy: "",
    beds: 1,
    propertyType: "",
  };
  const [filters, setFilters] = useState(defaultFilters);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/p/")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((p) =>
          p.name.replace("Tỉnh ", "").replace("Thành phố ", "")
        );
        setCities(formatted);
      })
      .catch((err) => console.error("Error loading provinces:", err));
  }, []);

  const handleAmenityChange = (amenity) => {
    setFilters((prev) => {
      const newAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: newAmenities };
    });
  };

  const handleApply = () => {
    onApply(filters);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-montserrat text-xl font-semibold text-center">
            Bộ lọc tìm kiếm
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <Label className="font-montserrat font-medium text-gray-700 mb-2 block">
              Khoảng giá (VNĐ)
            </Label>

            <div className="flex justify-between text-sm text-gray-600 font-montserrat mb-1">
              <span>{filters.priceRange[0].toLocaleString("vi-VN")} đ</span>
              <span>{filters.priceRange[1].toLocaleString("vi-VN")} đ</span>
            </div>

            <Slider.Root
              className="relative flex w-full touch-none select-none items-center h-5"
              value={filters.priceRange}
              min={0}
              max={20000000}
              step={50000}
              minStepsBetweenThumbs={1}
              onValueChange={(value) =>
                setFilters({ ...filters, priceRange: value })
              }
            >
              <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
                <Slider.Range className="absolute h-full bg-brandPrimary-1 cursor-pointer" />
              </Slider.Track>
              <Slider.Thumb className="block h-5 w-5 rounded-full bg-white border shadow-md cursor-pointer" />
              <Slider.Thumb className="block h-5 w-5 rounded-full bg-white border shadow-md cursor-pointer" />
            </Slider.Root>

            <div className="text-center text-xs text-gray-500 font-montserrat mt-2">
              Từ {filters.priceRange[0].toLocaleString("vi-VN")} đ đến
              {filters.priceRange[1].toLocaleString("vi-VN")} đ / đêm
            </div>
          </div>

          {/* địa điểm   */}
          <div>
            <Label className="font-montserrat font-medium text-gray-700 mb-2 block">
              Địa điểm
            </Label>
            <Select
              value={filters.location}
              onValueChange={(value) =>
                setFilters({ ...filters, location: value })
              }
            >
              <SelectTrigger className="w-full font-montserrat">
                <SelectValue placeholder="Chọn tỉnh/thành phố" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Sắp xếp */}
          <div>
            <Label className="font-montserrat font-medium text-gray-700 mb-2 block">
              Sắp xếp theo
            </Label>
            <Select
              value={filters.sortBy}
              onValueChange={(value) =>
                setFilters({ ...filters, sortBy: value })
              }
            >
              <SelectTrigger className="w-full font-montserrat">
                <SelectValue placeholder="Chọn tiêu chí sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceHighLow">Cao đến thấp</SelectItem>
                <SelectItem value="priceLowHigh">Thấp đến cao</SelectItem>
                <SelectItem value="topRated">Được đánh giá cao nhất</SelectItem>
                <SelectItem value="popular">Phổ biến nhất</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Số khách */}
        <div>
          <Label className="font-montserrat font-medium text-gray-700 mb-2 block">
            Số khách
          </Label>
          <Select
            value={filters.guests}
            onValueChange={(value) => setFilters({ ...filters, guests: value })}
          >
            <SelectTrigger className="w-full font-montserrat">
              <SelectValue placeholder="Chọn số lượng khách" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} khách
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="font-montserrat font-medium text-gray-700 mb-2 block">
            Loại phòng
          </Label>
          <Select
            value={filters.propertyType}
            onValueChange={(value) =>
              setFilters({ ...filters, propertyType: value })
            }
          >
            <SelectTrigger className="w-full font-montserrat">
              <SelectValue placeholder="Chọn loại phòng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">Nhà</SelectItem>
              <SelectItem value="apartment">Căn hộ</SelectItem>
              <SelectItem value="hotelRoom">Khách sạn</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Số giường */}
        <div>
          <Label className="font-montserrat font-medium text-gray-700 mb-2 block">
            Số giường
          </Label>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              disabled={filters.beds <= 1}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  beds: Math.max(1, prev.beds - 1),
                }))
              }
              className="h-8 w-8 select-none"
            >
              −
            </Button>

            <span className="font-montserrat text-lg">{filters.beds}</span>

            <Button
              variant="outline"
              size="icon"
              disabled={filters.beds >= 5}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  beds: Math.min(5, prev.beds + 1),
                }))
              }
              className="h-8 w-8 select-none"
            >
              +
            </Button>
          </div>
        </div>

        {/* Tiện nghi */}
        <div>
          <Label className="font-montserrat font-medium text-gray-700 mb-2 block">
            Tiện nghi
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Wi-Fi",
              "Hồ bơi",
              "Bếp",
              "Điều hòa",
              "Bãi đỗ xe",
              "Máy giặt",
            ].map((amenity) => (
              <label key={amenity} className="flex items-center gap-2">
                <Checkbox
                  checked={filters.amenities.includes(amenity)}
                  onCheckedChange={() => handleAmenityChange(amenity)}
                />
                <span className="font-montserrat text-gray-700 text-sm">
                  {amenity}
                </span>
              </label>
            ))}
          </div>
        </div>

        <DialogFooter className="mt-6 ">
          <div className="flex gap-36">
            <div>
              <Button
                variant="outline"
                onClick={() => setFilters(defaultFilters)}
                className="font-montserrat"
              >
                Xóa tất cả
              </Button>
            </div>
            <div className="flex gap-5">
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="font-montserrat"
              >
                Hủy
              </Button>
              <Button
                onClick={handleApply}
                className="bg-red-500 hover:bg-red-600 text-white font-montserrat"
              >
                Áp dụng
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FilterDialog;
