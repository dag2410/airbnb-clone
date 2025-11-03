import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ListItems = ({ data, fav = false }) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="w-52 relative cursor-pointer transition-transform duration-500 hover:scale-105 select-none">
      <NavLink to={`/rooms/${data.slug}`}>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-52 rounded-3xl object-cover object-center z-0"
        />
        <h3 className="py-1 text-base font-medium font-montserrat ">
          {data.title}
        </h3>
      </NavLink>
      <div className="flex gap-5 cursor-text">
        <span className="text-gray-600 text-sm">{data.price}</span>
        <div className="flex items-center gap-1">
          <FaStar className="text-gray-600" />
          <span className="text-gray-600 text-sm">{data.rate}</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <FaHeart
          className={`
     cursor-pointer w-5 h-5 transition-all duration-300 ease-in-out 
    ${
      isLike || fav
        ? "text-brandPrimary-1  drop-shadow-[0_0_6px_#F6475F]"
        : "text-gray-700 hover:drop-shadow-[0_0_6px_#F6475F]"
    }
  `}
          onClick={() => setIsLike((prev) => !prev)}
        />
      </div>
      <div className="absolute inline-flex top-4 left-4 rounded-2xl bg-gray-100 opacity-80 px-3 py-1 cursor-pointer shadow-lg outline outline-white z-10">
        <span className="w-24 text-xs font-semibold">Được khách yêu thích</span>
      </div>
    </div>
  );
};
export default ListItems;
