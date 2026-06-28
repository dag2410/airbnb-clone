import { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import { useToggleLikeMutation } from "@/queries/wishlist.query";

const ListItems = ({ data, fav }) => {
  const [liked, setLiked] = useState(fav);

  useEffect(() => {
    setLiked(fav);
  }, [fav]);

  const { mutate, isPending } = useToggleLikeMutation();

  const handleToggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isPending) return;

    // optimistic update
    setLiked((prev) => !prev);

    mutate(data.id, {
      onSuccess: () => {
        !liked
          ? toast.success("Đã thêm vào danh sách yêu thích.")
          : toast.error("Đã xóa khỏi danh sách yêu thích.");
      },

      onError: () => {
        // rollback
        setLiked((prev) => !prev);

        toast.error("Có lỗi xảy ra, vui lòng thử lại.");
      },
    });
  };

  return (
    <div className="relative w-56 px-2 transition-transform hover:scale-105">
      <NavLink to={`/rooms/${data.slug}`}>
        <img
          loading="lazy"
          decoding="async"
          src={data.images[0].url}
          alt={data.title}
          className="z-0 h-52 w-full rounded-3xl object-cover object-center"
        />

        <h3 className="py-1 font-montserrat text-base font-medium">
          {data.title}
        </h3>

        <p className="text-sm text-gray-600">
          {data.room_district}, {data.room_city}
        </p>

        <div className="mt-1 flex gap-5 cursor-text">
          <div>
            <span className="font-montserrat text-lg font-semibold">
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
          onClick={handleToggleLike}
          disabled={isPending}
          className="absolute top-4 right-4 rounded-full bg-white/80 p-2 shadow"
        >
          <FaHeart
            className={`text-lg transition-all duration-300 ${
              liked
                ? "text-red-500 scale-110"
                : "text-gray-400 hover:text-red-400"
            }`}
          />
        </button>
      </NavLink>
    </div>
  );
};

export default ListItems;
