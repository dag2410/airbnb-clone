import React, { useEffect, useRef, useState } from "react";
import GuestItem from "./GuestItem";
import useOutsideClick from "@/hooks/useOutsideClick";

const GuestPopup = ({ onClose, onSelectGuest, guestCounts }) => {
  const mockGuest = [
    {
      label: "Người lớn",
      subLabel: "Từ 13 tuổi trở lên",
      type: "adults",
    },
    {
      label: "Trẻ em",
      subLabel: "Độ tuổi 2-12",
      type: "children",
    },
    {
      label: "Em bé",
      subLabel: "Dưới 2 tuổi",
      type: "infants",
    },
    {
      label: "Thú cưng",
      subLabel: "Bạn sẽ mang theo động vật phục vụ?",
      type: "pets",
    },
  ];

  const [guests, setGuests] = useState(guestCounts);

  const popupRef = useOutsideClick(onClose);

  const handleChange = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: prev[type] + delta,
    }));
  };

  useEffect(() => {
    const totalGuests = guests.adults + guests.children;
    const displayText =
      `${totalGuests} khách` +
      (guests.infants ? `, ${guests.infants} em bé` : "") +
      (guests.pets ? `, ${guests.pets} thú cưng` : "");

    onSelectGuest(guests, displayText);
  }, [guests, onSelectGuest]);

  useEffect(() => {
    if (guestCounts) {
      setGuests(guestCounts);
    }
  }, [guestCounts]);

  return (
    <div
      ref={popupRef}
      className="flex flex-col gap-5 p-10 bg-white rounded-2xl shadow-xl divide-y-2"
    >
      {mockGuest.map((item, index) => (
        <div key={index}>
          <GuestItem
            label={item.label}
            subLabel={item.subLabel}
            value={guests[item.type]}
            onIncrement={() => handleChange(item.type, 1)}
            onDecrement={() => handleChange(item.type, -1)}
            type={item.type}
          />
        </div>
      ))}
    </div>
  );
};

export default GuestPopup;
