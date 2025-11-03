import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import useOutsideClick from "@/hooks/useOutsideClick";

const CalendarPopup = ({ onClose, onSelectDate, selectedRange }) => {
  const [date, setDate] = useState(
    selectedRange?.from ? selectedRange : { from: undefined, to: undefined }
  );
  const [type, setType] = useState("ngày");
  const popupRef = useOutsideClick(onClose);

  useEffect(() => {
    if (selectedRange) {
      setDate(selectedRange);
    }
  }, [selectedRange]);

  useEffect(() => {
    if (date?.from && date?.to) {
      const formatted = `${date.from.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "short",
      })} - ${date.to.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "short",
      })}`;
      onSelectDate(date, formatted);
    } else {
      onSelectDate("");
    }
  }, [date, onSelectDate]);

  return (
    <div ref={popupRef} className="p-2 bg-white rounded-2xl shadow-xl">
      <div className="py-8 flex justify-center">
        <div className="inline-flex gap-1 bg-gray-200 rounded-full p-1 select-none">
          {["Ngày", "Tháng", "Linh hoạt"].map((label) => (
            <Button
              variant="ghost"
              key={label}
              size="sm"
              className={`px-10 py-4 rounded-full text-sm hover:bg-gray-50 transition-colors duration-300 ease-in-out ${
                type === label.toLowerCase()
                  ? "bg-white text-black"
                  : "text-black disabled:hover:"
              }`}
              onClick={() => setType(label.toLowerCase())}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
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
    </div>
  );
};

export default CalendarPopup;
