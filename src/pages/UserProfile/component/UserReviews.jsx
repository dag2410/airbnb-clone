import ReviewList from "@/components/ReviewList";
import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function UserReviews({ host }) {
  return (
    <div>
      <h2 className="font-montserrat text-2xl font-semibold mb-2">
        Đánh giá của {host.name}
      </h2>
      <span className="font-montserrat text-lg font-semibold">
        {host.reviews.length} đánh giá
      </span>
      <div className="grid grid-cols-3 mt-5 divide-x-2">
        {host.reviews.slice(0, 3).map((item) => (
          <div key={item.id} className="p-3">
            <div>
              <NavLink
                to={`/users/profile/${host.id}`}
                className="flex gap-5 items-center"
              >
                <img
                  src={item.avatar}
                  alt="avatar"
                  className="rounded-full object-cover w-16"
                />
                <span className="font-montserrat font-medium">
                  {item.author}
                </span>
              </NavLink>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                <span>{item.rating}</span>
                <FaRegStar className="text-red-500 text-sm" />
              </div>
              <span className="text-gray-900">&middot;</span>
              <span>{item.date}</span>
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      <ReviewList host={host} reviews={host.reviews} />
    </div>
  );
}

export default UserReviews;
