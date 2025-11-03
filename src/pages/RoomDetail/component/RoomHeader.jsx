import React from "react";
import { FaRegStar, FaSave, FaShareSquare } from "react-icons/fa";

const RoomHeader = ({
  title,
  rating,
  reviews,
  location: { city, country, warp },
}) => {
  return (
    <div>
      <h1 className="text-3xl font-montserrat font-semibold ">{title}</h1>
      <div className="flex justify-between mt-3">
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            <FaRegStar className="text-red-500 text-sm" />
            <span>{rating}</span>
          </div>
          <span className="text-gray-900">&middot;</span>
          <div className="flex gap-1 items-center">
            <p className="font-montserrat">{reviews.length} đánh giá</p>
          </div>
          <span className="text-gray-900">&middot;</span>
          <div className="flex gap-1 items-center">
            <span className="underline underline-offset-1 font-montserrat">
              {city}, {country}
            </span>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg cursor-pointer select-none">
            <FaShareSquare className="rounded-full" />
            <span className="underline underline-offset-1 font-montserrat ">
              Chia sẻ
            </span>
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-50 p-2  rounded-lg cursor-pointer select-none">
            <FaSave className="rounded-full" />
            <span className="underline underline-offset-1 font-montserrat ">
              Lưu
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomHeader;
