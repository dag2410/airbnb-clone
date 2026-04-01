import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function PricePublish({ pricePerNight, handleInputChange, publishDate }) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="price" className="mb-2 block">
          Giá mỗi đêm (VND)
        </Label>
        <Input
          id="price"
          type="number"
          name="pricePerNight"
          placeholder="VD: 650000"
          value={pricePerNight}
          onChange={handleInputChange}
          className="h-10"
        />
      </div>
      <div>
        <Label htmlFor="publishDate" className="mb-2 block">
          Ngày công bố
        </Label>
        <Input
          id="publishDate"
          type="datetime-local"
          name="publishDate"
          value={publishDate}
          onChange={handleInputChange}
          className="h-10"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Phòng sẽ được công bố vào ngày này
        </p>
      </div>
    </div>
  );
}

export default PricePublish;
