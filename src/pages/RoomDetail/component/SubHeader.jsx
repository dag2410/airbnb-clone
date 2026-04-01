import React from "react";

const SubHeader = ({ refs }) => {
  const sections = [
    { label: "Ảnh", ref: refs.galleryRef },
    { label: "Tiện ích", ref: refs.utilitiesRef },
    { label: "Đánh giá", ref: refs.reviewsRef },
    { label: "Vị trí", ref: refs.locationRef },
    { label: "Đặt phòng", ref: refs.bookingRef },
  ];

  return (
    <div className="fixed px-56 top-0 left-0 w-full py-3 flex gap-6 bg-white shadow-lg">
      {sections.map((item, index) => (
        <div
          key={index}
          className="relative p-3 font-montserrat text-sm font-semibold cursor-pointer group"
          onClick={() =>
            item.ref.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          {item.label}
          <span className="absolute w-0 h-[2px] left-0 bottom-0 bg-black  transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </div>
      ))}
    </div>
  );
};

export default SubHeader;
