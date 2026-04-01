"use client";

import { CheckCircle, Home, Zap, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const mockRoom = {
  id: "bordeaux-getaway-001",
  title: "Phòng lớn West Lake/Ban công/Máy giặt/Nhà bếp/Thang",
  slug: "thanh-cong-ba-dinh",
  rating: 5.0,
  reviewCount: 16,
  image:
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80",
  pricePerNight: 623336,
  totalPrice: 623336,
  discount: 74803,
  nights: 6,
  location: "Thành công ba đình",
  guests: 1,
  checkIn: "21 thg 2, 2026",
  checkOut: "27 thg 2, 2026",
  totalBefore: 3740015,
  totalAfter: 3665212,
  isRare: true,
  confirmationNumber: 123,
};

function SuccessBooking(
  {
    // bookingData: {
    //   roomTitle,
    //   location,
    //   checkIn,
    //   checkOut,
    //   guests,
    //   totalPrice,
    //   confirmationNumber,
    // },
  }
) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Animation Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-green-50 p-6 rounded-full">
              <CheckCircle
                className="w-16 h-16 text-green-600"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Đặt phòng thành công!
          </h1>
          <p className="text-lg text-gray-600">
            Cảm ơn bạn đã đặt phòng. Hóa đơn đã được gửi đến email của bạn.
          </p>
        </div>

        {/* Booking Details Card */}
        <Card className="mb-8 border-2 border-gray-200 shadow-lg">
          <CardContent className="pt-8">
            <div className="mb-6 pb-6 border-b">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">
                Mã xác nhận đặt phòng
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {mockRoom.confirmationNumber}
              </p>
            </div>

            {/* Room Info */}
            <div className="mb-8 pb-8 border-b">
              <h3 className="font-semibold text-gray-900 mb-4">
                Thông tin phòng
              </h3>
              <p className="text-lg font-medium text-gray-900 mb-3">
                {mockRoom.title}
              </p>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                {mockRoom.location}
              </div>
            </div>

            {/* Booking Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Check-in
                </p>
                <p className="font-semibold text-gray-900">
                  {mockRoom.checkIn}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Check-out
                </p>
                <p className="font-semibold text-gray-900">
                  {mockRoom.checkOut}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Khách
                </p>
                <p className="font-semibold text-gray-900">
                  {mockRoom.guests} người
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Tổng tiền
                </p>
                <p className="font-semibold text-gray-900">
                  đ{mockRoom.totalPrice.toLocaleString("vi-VN")}
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-3">
              <p className="font-semibold text-gray-900 mb-4">
                Các bước tiếp theo:
              </p>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Chủ nhà sẽ liên hệ với bạn trong 24 giờ tới để xác nhận chi
                  tiết check-in
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Lưu mã đặt phòng này để sử dụng khi liên hệ với chủ nhà hoặc
                  đối tác hỗ trợ
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Buttons */}
        <div className="flex gap-3 flex-col sm:flex-row">
          <Button
            onClick={() => navigate("/")}
            className="flex-1 h-12 text-base font-semibold bg-brandPrimary-1 hover:bg-rose-600 text-white rounded-lg"
          >
            <Home className="w-4 h-4 mr-2" />
            Quay về trang chủ
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-12 text-base font-semibold"
          >
            Xem chi tiết đặt phòng
          </Button>
        </div>

        {/* Support Info */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg text-center">
          <p className="text-sm text-gray-700 mb-2">
            Có bất kỳ câu hỏi nào? Liên hệ với đội hỗ trợ của chúng tôi
          </p>
          <p className="font-semibold text-gray-900">
            dagger241004abc@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessBooking;
