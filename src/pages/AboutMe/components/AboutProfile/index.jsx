import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutProfile() {
  const navigate = useNavigate();

  const mockHost = {
    id: "host_001",
    name: "Bông",
    avatar: "https://i.pravatar.cc/100?img=12",
    isSuperhost: true,
    isVerified: true,
    bio: "Chủ nhà siêu cấp với nhiều năm kinh nghiệm, luôn cam kết mang đến trải nghiệm tuyệt vời nhất cho khách. Luôn thân thiện, nhiệt tình và phản hồi rất nhanh.",
    rating: 4.92,
    reviewCount: 13,
    monthsHosting: 6,
    responseRate: "100%",
    responseTime: "trong 1 giờ",
    location: "Hà Nội, Việt Nam",
    coHosts: [
      {
        id: "co_001",
        name: "Quyên",
        avatar: "https://i.pravatar.cc/100?img=15",
      },
    ],
    traits: [
      "Thân thiện và chuyên nghiệp",
      "Giỏi giao tiếp và luôn hỗ trợ khách nhanh chóng",
      "Quan tâm đến trải nghiệm và sự thoải mái của khách",
    ],
    school: "Đại học Hà Nội",
    dreamDestination: "Sài Gòn",
    job: "Sinh viên",
    age: 21,
    funFact: "nấu ăn ngon",
    hobbies: [
      { id: 1, icon: "☕", name: "Cà phê" },
      { id: 2, icon: "🎮", name: "Thể thao trực tiếp" },
      { id: 3, icon: "🍜", name: "Đời sống ẩm thực" },
    ],
  };

  return (
    <div className="flex flex-col gap-8 w-full animate-fade-in">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b pb-5 border-gray-100">
        <div>
          <h1 className="font-montserrat text-2xl font-bold text-gray-900">
            Giới thiệu bản thân
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Quản lý thông tin cá nhân và câu chuyện của bạn.
          </p>
        </div>
        <Button
          variant="outline"
          className="rounded-xl border-gray-300 hover:bg-gray-50 shadow-sm"
          onClick={() => navigate("/profile/about/edit")}
        >
          Chỉnh sửa
        </Button>
      </div>

      {/* Profile Card Lineup */}
      <div className="flex gap-8 items-start">
        {/* Avatar Box Component */}
        <div
          className="w-5/12 py-10 flex flex-col items-center shadow-md border border-gray-100 
                              rounded-3xl bg-gradient-to-br from-gray-50 via-red-50 to-red-100/60 shrink-0"
        >
          <img
            src={mockHost.avatar}
            alt="avatar"
            className="rounded-full w-24 h-24 object-cover ring-4 ring-white shadow-md"
          />
          <span className="font-montserrat text-2xl font-bold mt-4 text-gray-900">
            {mockHost.name}
          </span>
          <span className="font-montserrat text-sm font-medium text-gray-700 mt-1 bg-white/80 px-3 py-1 rounded-full shadow-sm">
            {mockHost.location}
          </span>
        </div>

        {/* Grid Introduce Info */}
        <div className="w-10/12 space-y-3 bg-gray-50/50 p-6 rounded-3xl border border-gray-100/80">
          {[
            { label: "school", title: `Nơi từng học` },
            { label: "job", title: `Công việc` },
            { label: "age", title: `Năm sinh` },
            { label: "location", title: `Nơi sống` },
            { label: "dreamDestination", title: `Điểm đến mơ ước` },
            { label: "funFact", title: `Sự thật thú vị` },
            { label: "biggestPassion", title: `Đam mê lớn nhất` },
            { label: "language", title: `Ngôn ngữ` },
          ].map((item, index) => (
            <div key={index}>
              {mockHost[item.label] && (
                <div className="flex items-center text-lg text-gray-700 py-1 border-b border-gray-100 last:border-0">
                  <span className="w-6/12 text-gray-600 font-medium">
                    {item.title}
                  </span>
                  <span className="w-6/12 font-semibold text-gray-900">
                    {mockHost[item.label]}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bio Text Paragraph */}
      <div className="bg-gray-50/40 p-6 rounded-3xl border border-dashed border-gray-200">
        <h3 className="font-montserrat font-bold text-gray-800 text-base mb-2 uppercase tracking-wider">
          Tiểu sử
        </h3>
        <p className="font-montserrat font-medium text-gray-600 leading-relaxed text-base">
          "{mockHost.bio}"
        </p>
      </div>

      {/* Hobbies Lineup */}
      <div className="pt-2">
        <h2 className="font-montserrat text-lg font-bold text-gray-900 mb-4">
          Sở thích của tôi
        </h2>
        <div className="flex gap-4 flex-wrap">
          {mockHost.hobbies.map((item) => (
            <div
              key={item.id}
              className="flex gap-2.5 items-center bg-white border border-gray-200 px-4 py-2.5 rounded-2xl shadow-sm hover:border-gray-300 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-montserrat text-base font-medium text-gray-700">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
