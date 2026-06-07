import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ListItems = ({ data, fav = false }) => {
  const [isLike, setIsLike] = useState(fav);

  return (
    <div className="w-56 px-2 relative cursor-pointer transition-transform duration-300 hover:scale-105 select-none will-change-transform transform-gpu">
      <NavLink to={`/rooms/${data.slug}`}>
        <img
          loading="lazy"
          decoding="async"
          src={data?.images[0].url}
          alt={data.title}
          className="w-full h-52 rounded-3xl object-cover object-center z-0"
        />
        <h3 className="py-1 text-base font-medium font-montserrat ">
          {data.title}
        </h3>
        <p className="text-sm text-gray-600">
          {" "}
          {data.room_district}, {data.room_city}
        </p>
        <div className="flex gap-5 cursor-text mt-1">
          <div>
            <span className="text-lg font-semibold font-montserrat">
              {Math.round(data.price_per_night).toLocaleString()}đ
            </span>
            <span className="ml-1 text-sm text-gray-600">/ đêm</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-sm text-yellow-500" />
            <span className="text-sm font-medium">{data.rating}</span>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsLike((prev) => !prev);
          }}
          className="
            absolute
            top-4
            right-4
            z-20
            rounded-full
            bg-white/80
            p-2
            backdrop-blur-md
            shadow-md
          "
        >
          <FaHeart
            className={`
              text-lg
              transition-all
              duration-300
              ${
                isLike
                  ? "text-red-500 scale-110"
                  : "text-gray-400 hover:text-red-400"
              }
            `}
          />
        </button>
        <div className="absolute inline-flex top-4 left-4 rounded-2xl bg-gray-100 opacity-80 px-3 py-1 cursor-pointer shadow-lg outline outline-white">
          <span className="w-24 text-xs font-semibold">
            Được khách yêu thích
          </span>
        </div>
      </NavLink>
    </div>
  );
};
export default ListItems;
