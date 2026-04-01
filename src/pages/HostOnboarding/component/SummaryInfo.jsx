import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function SummaryInfo({
  location,
  title,
  slug,
  propertyType,
  roomDetails,
  pricePerNight,
  amenities,
  photos,
}) {
  return (
    <Card className="mt-8 bg-secondary/50">
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-4">Tóm tắt thông tin</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Tiêu đề:</span>
            <p className="font-medium">{title || "—"}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Slug:</span>
            <p className="font-medium text-xs break-all">{slug || "—"}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Địa điểm:</span>
            <p className="font-medium">
              {location.ward && `${location.ward}, `}
              {location.district && `${location.district}, `}
              {location.city || "—"}
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Loại:</span>
            <p className="font-medium">
              {propertyType === "house" && "Nhà"}
              {propertyType === "apartment" && "Căn hộ"}
              {propertyType === "hotelRoom" && "Khách sạn"}
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Chi tiết:</span>
            <p className="font-medium">
              {roomDetails.guests} khách • {roomDetails.bedrooms} phòng
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Giá:</span>
            <p className="font-medium">
              {pricePerNight
                ? `${Number(pricePerNight).toLocaleString()} VND`
                : "—"}
            </p>
          </div>
          <div className="col-span-2">
            <span className="text-muted-foreground">Tiện nghi:</span>
            <p className="font-medium">
              {amenities.length} tiện nghi được chọn
            </p>
          </div>
          <div className="col-span-2">
            <span className="text-muted-foreground">Hình ảnh:</span>
            <p className="font-medium">{photos.length} hình ảnh</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SummaryInfo;
