import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function BasicInfo({
  title,
  description,
  introduce,
  propertyType,
  handleInputChange,
}) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title" className="mb-2 block">
          Tiêu đề phòng
        </Label>
        <Input
          id="title"
          name="title"
          placeholder="VD: Căn hộ ấm cúng tại Ba Đình"
          value={title}
          onChange={handleInputChange}
          className="h-10"
        />
      </div>

      <div>
        <Label htmlFor="description" className="mb-2 block">
          Mô tả ngắn
        </Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Mô tả tóm tắt về phòng của bạn (60-160 ký tự)"
          value={description || ""}
          onChange={handleInputChange}
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="introduce" className="mb-2 block">
          Mô tả chi tiết
        </Label>
        <Textarea
          id="introduce"
          name="introduce"
          placeholder="Mô tả chi tiết, quy trình nhận phòng, điểm nổi bật, cách sắp xếp nội thất..."
          value={introduce || ""}
          onChange={handleInputChange}
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="propertyType" className="mb-2 block">
          Loại bất động sản
        </Label>
        <Select
          value={propertyType}
          onValueChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              propertyType: value,
            }))
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">Nhà</SelectItem>
            <SelectItem value="apartment">Căn hộ</SelectItem>
            <SelectItem value="hotelRoom">Khách sạn</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default BasicInfo;
