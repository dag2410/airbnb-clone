import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import React from "react";

function PhotosInfo({
  photos,

  setFormData,
}) {
  const handlePhotoAdd = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          setFormData((prev) => ({
            ...prev,
            photos: [...prev.photos, result],
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoRemove = (index) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      <Label className="block">Hình ảnh phòng</Label>
      <div className="space-y-3">
        <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center hover:border-primary transition-colors">
          <Upload className="mx-auto mb-2 text-muted-foreground" />
          <Label htmlFor="photo-input" className="cursor-pointer">
            <span className="text-primary hover:underline">
              Nhấp để tải lên
            </span>{" "}
            hoặc kéo thả hình ảnh
          </Label>
          <input
            id="photo-input"
            type="file"
            accept="image/*"
            onChange={handlePhotoAdd}
            className="hidden"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Hỗ trợ JPG, PNG. Tối đa 5MB
          </p>
        </div>
        {photos.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">
              Đã tải: {photos.length} hình ảnh
            </p>
            <div className="grid grid-cols-3 gap-3">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden border border-muted"
                >
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handlePhotoRemove(index)}
                    className="absolute top-1 right-1 bg-destructive text-destructive-foreground p-1 rounded-full hover:bg-destructive/90"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PhotosInfo;
