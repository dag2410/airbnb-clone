import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { X } from "lucide-react";

const ImageGallery = ({ mainPhoto, subPhotos }) => {
  const [open, setOpen] = useState(false);

  const photos = [mainPhoto, ...subPhotos];

  return (
    <div>
      <figure
        className="grid grid-cols-4 grid-rows-3 gap-2 mt-3 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Ảnh chính */}
        <div className="col-span-2 row-span-3 ">
          <img
            src={mainPhoto}
            alt="cover image"
            className="w-full h-full rounded-s-2xl object-cover"
          />
        </div>

        {/* Ảnh phụ */}
        <div className="grid grid-cols-2 grid-rows-2 col-span-2 row-span-3 gap-2">
          {subPhotos.slice(1, 5).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Thumbnail ${index + 1}`}
              className={`object-cover ${
                index === 1
                  ? "rounded-tr-2xl"
                  : index == 3
                  ? "rounded-br-2xl"
                  : ""
              }`}
            />
          ))}
        </div>
      </figure>

      {/* Drawer full màn hình */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="fixed inset-0 bg-white max-h-screen h-screen p-0 rounded-none">
          <DrawerHeader className="flex justify-between items-center p-4 border-b">
            <DrawerTitle className="font-montserrat text-lg font-semibold">
              Tất cả ảnh
            </DrawerTitle>
            <DrawerClose>
              <X className="cursor-pointer" />
            </DrawerClose>
          </DrawerHeader>

          <div className="p-6 grid grid-cols-4 gap-3 overflow-y-auto max-h-[calc(100vh-80px)]">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full rounded-lg object-cover"
              />
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ImageGallery;
