import useOutsideClick from "@/hooks/useOutsideClick";
import React, { useEffect, useRef, useState } from "react";

const LocationPopup = ({ onClose, onSelectLocation }) => {
  const popupRef = useOutsideClick(onClose);
  const recommendedDestinations = [
    {
      id: 1,
      name: "Lân cận",
      description: "Tìm xung quanh bạn",
      icon: "/icons/nearby.svg",
      bg: "bg-blue-50",
    },
    {
      id: 2,
      name: "Thành phố Hồ Chí Minh, Thành phố Hồ Chí Minh",
      description: "Có các thắng cảnh như Chợ Bến Thành",
      icon: "/icons/hochiminh.svg",
      bg: "bg-indigo-50",
    },
    {
      id: 3,
      name: "Đà Lạt, Lâm Đồng",
      description: "Phù hợp cho người yêu thiên nhiên",
      icon: "/icons/dalat.svg",
      bg: "bg-rose-50",
    },
    {
      id: 4,
      name: "Bangkok, Thái Lan",
      description: "Có cuộc sống về đêm náo nhiệt",
      icon: "/icons/bangkok.svg",
      bg: "bg-green-50",
    },
    {
      id: 5,
      name: "Hạ Long, Quảng Ninh",
      description: "Phù hợp cho người yêu thiên nhiên",
      icon: "/icons/halong.svg",
      bg: "bg-orange-50",
    },
    {
      id: 6,
      name: "Thành phố Huế, Thừa Thiên-Huế",
      description: "Có kiến trúc ấn tượng",
      icon: "/icons/hue.svg",
      bg: "bg-rose-50",
    },
    {
      id: 7,
      name: "Vũng Tàu, Bà Rịa - Vũng Tàu",
      description: "Có đường bờ biển tuyệt đẹp",
      icon: "/icons/vungtau.svg",
      bg: "bg-sky-50",
    },
    {
      id: 7,
      name: "Vũng Tàu, Bà Rịa - Vũng Tàu",
      description: "Có đường bờ biển tuyệt đẹp",
      icon: "/icons/vungtau.svg",
      bg: "bg-sky-50",
    },
    {
      id: 7,
      name: "Vũng Tàu, Bà Rịa - Vũng Tàu",
      description: "Có đường bờ biển tuyệt đẹp",
      icon: "/icons/vungtau.svg",
      bg: "bg-sky-50",
    },
    {
      id: 7,
      name: "Vũng Tàu, Bà Rịa - Vũng Tàu",
      description: "Có đường bờ biển tuyệt đẹp",
      icon: "/icons/vungtau.svg",
      bg: "bg-sky-50",
    },
    {
      id: 7,
      name: "Vũng Tàu, Bà Rịa - Vũng Tàu",
      description: "Có đường bờ biển tuyệt đẹp",
      icon: "/icons/vungtau.svg",
      bg: "bg-sky-50",
    },
  ];

  return (
    <div ref={popupRef} className="bg-white rounded-3xl shadow-xl p-5 pr-1">
      <p className="text-sm font-semibold font-sans text-gray-700 mb-4 select-none">
        Điểm đến được đề xuất
      </p>

      <ul className="space-y-3 max-h-96 overflow-y-auto pr-1">
        {recommendedDestinations.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-100 cursor-pointer transition"
            onClick={() => {
              onSelectLocation(item.name);
            }}
          >
            <div
              className={`w-12 h-12 ${item.bg} flex items-center justify-center rounded-xl`}
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 leading-tight">
                {item.name}
              </p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationPopup;
