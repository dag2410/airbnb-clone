import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import useOutsideClick from "@/hooks/useOutsideClick";
import GuestItem from "@/layouts/DefaultLayout/components/Header/SearchBar/popups/GuestItem";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookingCard = ({ pricePerNight, room }) => {
  const navigate = useNavigate();
  const [activePopupType, setActivePopupType] = useState(null);
  const [date, setDate] = useState({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleChange = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const wrapperRef = useOutsideClick(() => setActivePopupType(null));

  const togglePopUp = (type) => {
    if (activePopupType === "calendar") return;
    setActivePopupType((prev) => (prev === type ? null : type));
  };

  const totalPrice =
    pricePerNight * Math.ceil((date?.to - date?.from) / (1000 * 60 * 60 * 24));

  return (
    <div
      className="relative p-8 shadow-2xl rounded-2xl border-2 select-none"
      ref={wrapperRef}
    >
      <div>
        {date?.from && date?.to ? (
          <span className="font-montserrat">
            <span className="underline underline-offset-1 font-medium text-2xl">
              đ{totalPrice.toLocaleString("vi-VN")}
            </span>{" "}
            cho {Math.ceil((date?.to - date.from) / (1000 * 60 * 60 * 24))} đêm
          </span>
        ) : (
          <span className="font-montserrat font-medium text-2xl">
            Thêm ngày để xem giá
          </span>
        )}
      </div>

      <div className="relative grid grid-cols-2 grid-rows-2 border border-gray-400  rounded-xl mt-4 cursor-pointer">
        {/* CheckIn */}
        <div
          className="col-span-1 row-span-1 p-2 border-r border-b border-gray-400 active:outline-black hover:bg-gray-200 transition-colors duration-200"
          onClick={() => togglePopUp("calendar")}
        >
          <span className="font-semibold">Nhận Phòng</span>
          <div>
            {date?.from ? date?.from.toLocaleDateString("vi-VN") : "Thêm ngày"}
          </div>
        </div>

        {/* CheckOut */}
        <div
          className="col-span-1 row-span-1 p-2 border-b border-gray-400 hover:bg-gray-200 transition-colors duration-200"
          onClick={() => togglePopUp("calendar")}
        >
          <span className="font-semibold">Trả Phòng</span>
          <div>
            {date?.to ? date?.to.toLocaleDateString("vi-VN") : "Thêm ngày"}
          </div>
        </div>

        {/* Guest */}
        <div
          className="col-span-2 row-span-1 p-2 flex justify-between items-center hover:bg-gray-200 transition-colors duration-200"
          onClick={() => togglePopUp("guest")}
        >
          <span className="font-semibold">Khách</span>
          <div>
            {guests.adults + guests.children} khách
            {guests.infants ? <span>, {guests.infants} em bé</span> : ""}
          </div>
          {activePopupType === "guest" ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      {/* Popup calendar */}

      {activePopupType === "calendar" && (
        <div className="absolute left-0 top-36 shadow-2xl">
          <div className="relative">
            <Calendar
              disabled={{ before: new Date() }}
              mode="range"
              numberOfMonths={2}
              selected={date}
              onSelect={setDate}
              className="rounded-2xl border-none shadow-sm w-full p-10"
              fromDate={new Date()}
              disableNavigation={false}
            />
            <Button
              variant="ghost"
              className="absolute top-0 right-2 hover:bg-transparent"
              onClick={() => setActivePopupType(null)}
            >
              <FaTimes />
            </Button>
            <Button
              variant="ghost"
              className="absolute top-0 right-16 underline underline-offset-1"
              onClick={() => setDate({ from: undefined, to: undefined })}
            >
              Xóa ngày
            </Button>
          </div>
        </div>
      )}

      {activePopupType === "guest" && (
        <div className="w-10/12 absolute shadow-2xl">
          <div className="p-10 bg-white rounded-2xl shadow-xl">
            <GuestItem
              label="Người lớn"
              sublabel="Từ 13 tuổi trở lên"
              value={guests.adults}
              onIncrement={() => handleChange("adults", 1)}
              onDecrement={() => handleChange("adults", -1)}
              type="adults"
            />
            <GuestItem
              label="Trẻ em"
              sublabel="Độ tuổi 2-12"
              value={guests.children}
              onIncrement={() => handleChange("children", 1)}
              onDecrement={() => handleChange("children", -1)}
              type="children"
            />
            <GuestItem
              label="Em bé"
              sublabel="Dưới 2 tuổi"
              value={guests.infants}
              onIncrement={() => handleChange("infants", 1)}
              onDecrement={() => handleChange("infants", -1)}
              type="infants"
            />
            <GuestItem
              label="Thú cưng"
              sublabel="Bạn sẽ mang theo động vật phục vụ?"
              value={guests.pets}
              onIncrement={() => handleChange("pets", 1)}
              onDecrement={() => handleChange("pets", -1)}
              type="pets"
              underline={true}
            />
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-col gap-5 z-0">
        <Button
          variant="default"
          size="lg"
          className={`w-full col-span-2 text-lg rounded-full py-6  
            transition-colors duration-500 ease-in-out 
            ${
              date?.from && date?.to && totalPrice > 0
                ? "bg-brandPrimary-1 hover:bg-rose-700"
                : "bg-rose-300 hover:bg-rose-300"
            }`}
          onClick={() =>
            date?.from && date?.to && totalPrice > 0
              ? navigate(`/checkout/${room.slug}`)
              : ""
          }
        >
          {date?.from && date?.to && totalPrice > 0
            ? "Đặt phòng"
            : "Kiểm tra tình trạng còn phòng"}
        </Button>

        <span className="self-center font-montserrat underline underline-offset-1">
          Bạn vẫn chưa bị trừ tiền
        </span>
      </div>
    </div>
  );
};

export default BookingCard;
