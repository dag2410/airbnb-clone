import React from "react";
import iconImage from "@/assets/images/icon-image.svg";

const ImageGallery = ({ mainPhoto, subPhotos }) => {
  return (
    <div>
      <figure className="grid grid-cols-4 grid-rows-3 gap-2 mt-3 cursor-pointer">
        <div className="col-span-2 row-span-3 ">
          <img
            src={mainPhoto}
            alt="cover image"
            className="w-full h-full rounded-s-2xl object-cover"
          />
        </div>

        <div className=" grid grid-cols-2 grid-rows-2 col-span-2 row-span-3 gap-2">
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
    </div>
  );
};

export default ImageGallery;
