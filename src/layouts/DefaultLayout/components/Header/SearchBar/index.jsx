import { useEffect, useRef, useState } from "react";
import DateField from "./fields/DateField";
import GuestField from "./fields/GuestField";
import SearchField from "./fields/SearchField";
import CalendarPopup from "./popups/CalendarPopup";
import LocationPopup from "./popups/LocationPopup";
import GuestPopup from "./popups/GuestPopup";
import searchIcon from "@/assets/images/search-btn.webp";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const SearchBar = () => {
  const [activePopupType, setActivePopupType] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [guestValue, setGuestValue] = useState("");
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState({
    from: undefined,
    to: undefined,
  });
  const Portal = ({ children }) => createPortal(children, document.body);

  const [guestCounts, setGuestCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const togglePopUp = (type) => {
    if (activePopupType === type) return;
    setActivePopupType((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActivePopupType(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActivePopupType]);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (searchValue) params.set("location", searchValue);
    if (dateRange.from) params.set("from", dateRange.from.toISOString());
    if (dateRange.to) params.set("to", dateRange.to.toISOString());

    Object.entries(guestCounts).forEach(([key, value]) => {
      if (value > 0) params.set(key, value);
    });

    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="relative pb-4">
      {/* Thanh tìm kiếm tổng */}

      <div className="flex bg-white rounded-full shadow-md divide-x divide-gray-200">
        <SearchField
          onClick={() => togglePopUp("search")}
          isActive={activePopupType === "search"}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <DateField
          onClick={() => {
            togglePopUp("date");
            setDateValue(dateValue);
          }}
          isActive={activePopupType === "date"}
          value={dateValue}
        />

        <GuestField
          label="Khách"
          onClick={() => {
            togglePopUp("guest");
          }}
          isActive={activePopupType === "guest"}
          value={guestValue}
        />

        <Button
          onClick={handleSearch}
          className="absolute right-5 self-center bg-transparent hover:bg-transparent rounded-full p-0 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <img src={searchIcon} alt="search" className="select-none w-14" />
        </Button>
      </div>

      {activePopupType === "search" && (
        <div
          className={
            "absolute w-1/2 bottom-0 h-0 transition-all duration-900 ease-in-out z-30"
          }
        >
          <LocationPopup
            onClose={() => {
              setActivePopupType(null);
            }}
            onSelectLocation={(value) => {
              setSearchValue(value);
              setActivePopupType(null);
            }}
          />
        </div>
      )}
      {activePopupType === "date" && (
        <div
          className={
            "absolute w-full bottom-0 h-0 transition-all duration-900 ease-in-out z-30"
          }
        >
          <CalendarPopup
            onClose={() => {
              setActivePopupType(null);
            }}
            onSelectDate={(range, formatted) => {
              setDateRange(range);
              setDateValue(formatted);
            }}
            selectedRange={dateRange}
          />
        </div>
      )}
      {activePopupType === "guest" && (
        <div
          className={
            "absolute w-1/2 bottom-0 right-0 h-0 transition-all duration-900 ease-in-out z-30"
          }
        >
          <GuestPopup
            onClose={() => setActivePopupType(null)}
            guestCounts={guestCounts}
            onSelectGuest={(counts, displayText) => {
              setGuestCounts(counts);
              setGuestValue(displayText);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
