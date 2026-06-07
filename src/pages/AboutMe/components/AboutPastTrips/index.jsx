import { Button } from "@/components/ui/button";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AboutPastTrips() {
  const navigate = useNavigate();
  const mockBookings = [
    {
      id: 1,
      roomName: "Luxury Apartment Landmark 81",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      location: "Bình Thạnh, Hồ Chí Minh",
      checkIn: "01/08/2026",
      checkOut: "05/08/2026",
      totalPrice: 4500000,
      reviewed: false,
    },
    {
      id: 2,
      roomName: "Beach Villa Đà Nẵng",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      location: "Ngũ Hành Sơn, Đà Nẵng",
      checkIn: "15/07/2026",
      checkOut: "18/07/2026",
      totalPrice: 7200000,
      reviewed: true,
    },
  ];

  return (
    <div className="flex flex-col gap-8 w-full animate-fade-in">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b pb-5 border-gray-100">
        <div>
          <h1 className="font-montserrat text-2xl font-bold text-gray-900">
            Chuyến đi trước đây
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Xem lại các chuyến đi đã hoàn thành của bạn.
          </p>
        </div>
      </div>

      {mockBookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
          <FaShoppingBag className="text-7xl text-gray-300 mb-4" />
          <p className="font-montserrat text-base text-gray-600 text-center max-w-sm px-6 leading-relaxed">
            Sau khi thực hiện chuyến đi đầu tiên trên Airbnb, bạn sẽ tìm thấy
            các đặt chỗ trước đây của mình tại đây.
          </p>
          <Button
            size="lg"
            className="bg-brandPrimary-2 hover:bg-brandPrimary-2/90 text-white font-medium text-sm rounded-xl mt-6 px-6 shadow-md transition-all"
            onClick={() => navigate("/")}
          >
            Đặt chuyến đi ngay
          </Button>
        </div>
      ) : (
        <div className="space-y-5">
          {mockBookings.map((booking) => (
            <div
              key={booking.id}
              className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="flex flex-col sm:flex-row">
                <img
                  src={booking.image}
                  alt={booking.roomName}
                  className="w-full sm:w-56 h-56 object-cover shrink-0 rounded-2xl"
                />

                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h2 className="font-montserrat text-xl font-bold text-gray-900 line-clamp-1">
                          {booking.roomName}
                        </h2>
                        <p className="text-gray-400 text-sm font-medium mt-0.5">
                          {booking.location}
                        </p>
                      </div>

                      {booking.reviewed ? (
                        <span className="h-fit text-xs px-3 py-1 rounded-full bg-green-50 text-green-700 font-semibold border border-green-200/50 shrink-0">
                          Đã đánh giá
                        </span>
                      ) : (
                        <span className="h-fit text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-200/50 shrink-0">
                          Chờ đánh giá
                        </span>
                      )}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                      <div>
                        <span className="text-gray-400 text-sm font-medium block">
                          Nhận phòng
                        </span>
                        <span className="font-semibold text-gray-800 text-sm">
                          {booking.checkIn}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm font-medium block">
                          Trả phòng
                        </span>
                        <span className="font-semibold text-gray-800 text-sm">
                          {booking.checkOut}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-gray-600 text-sm font-medium block">
                        Tổng chi phí
                      </span>
                      <span className="font-bold text-gray-900 text-lg underline">
                        {booking.totalPrice.toLocaleString()}đ
                      </span>
                    </div>

                    <div>
                      {!booking.reviewed ? (
                        <Button
                          size="sm"
                          className="rounded-xl px-4 text-sm font-semibold shadow-sm"
                          onClick={() =>
                            navigate(`/bookings/${booking.id}/review`)
                          }
                        >
                          Đánh giá chuyến đi
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-xl px-4 text-sm font-semibold text-gray-600"
                        >
                          Xem đánh giá
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
