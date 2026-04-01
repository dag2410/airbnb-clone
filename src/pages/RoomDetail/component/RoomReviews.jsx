import ReviewList from "@/components/ReviewList";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const RoomReviews = ({ reviews, isExpand, host }) => {
  return (
    <div>
      <div className="flex gap-2 items-center font-semibold font-montserrat text-2xl mt-5">
        <FaRegStar className="text-red-500 text-2xl" />
        <span>
          {(
            reviews.reduce((sum, review) => sum + review.rating, 0) /
            reviews.length
          ).toFixed(1)}
        </span>
        <span className="text-gray-900">&middot;</span>
        <p className="font-montserrat">{reviews.length} đánh giá</p>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-x-32 gap-y-10">
        {reviews.map((item, index) => (
          <div key={index}>
            <div>
              <NavLink
                to={`/users/profile/${host.id}`}
                className="flex gap-5 items-center"
              >
                <img
                  src={item.avatar}
                  alt="avatar"
                  className="rounded-full w-16 object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold text-xl">
                    {item.author}
                  </span>
                  <span className="font-montserrat text-sm text-gray-600 ">
                    {item.location}
                  </span>
                </div>
              </NavLink>
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <FaRegStar className="text-red-500" />
                  <span>{item.rating}</span>
                </div>
                <span className="text-gray-900">&middot;</span>
                <span className="font-montserrat text-sm text-gray-600 ">
                  {new Date(item.date).toLocaleDateString("vi-VN")}
                </span>
              </div>
              <p
                className={`font-montserrat mt-2 ${
                  isExpand ? "line-clamp-none" : "line-clamp-3"
                }`}
              >
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Popover>
        <PopoverTrigger>
          <p className="mt-10 font-montserrat text-sm underline underline-offset-1 cursor-pointer ">
            Tìm hiểu quy trình đánh giá
          </p>
        </PopoverTrigger>
        <PopoverContent
          className={`font-montserrat bg-black text-white text-sm`}
        >
          Những đánh giá từ khách trước đây giúp cộng đồng của chúng ta hiểu
          thêm về từng chỗ ở. Các đánh giá được sắp xếp mặc định theo mức độ phù
          hợp. Mức độ phù hợp được xác định dựa trên thời gian đánh giá, thời
          gian ở và thông tin mà bạn cung cấp cho chúng tôi, chẳng hạn như tiêu
          chí tìm kiếm lượt đặt, quốc gia và ngôn ngữ ưu tiên của bạn.
          <br />
          <br />
          Chỉ những khách đã đặt phòng mới có thể viết đánh giá. Airbnb chỉ kiểm
          duyệt những đánh giá bị báo cáo là không tuân thủ các chính sách của
          chúng tôi.
          <br />
          <br /> Để đủ điều kiện được xếp hạng theo phân vị phần trăm hoặc gắn
          nhãn "Được khách yêu thích", bài đăng cần có ít nhất 5 đánh giá trong
          4 năm qua. Tiêu chí có thể thay đổi.
        </PopoverContent>
      </Popover>

      <ReviewList reviews={reviews} host={host} />
    </div>
  );
};

export default RoomReviews;
