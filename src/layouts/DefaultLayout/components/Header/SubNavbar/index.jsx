import searchIcon from "@/assets/images/search-btn.svg";
import "@/layouts/DefaultLayout/components/Header/header.css";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import Navbar from "../NavBar";

const SubNavbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const css =
    "flex items-center gap-2 text-lg px-10 py-2 font-montserrat text-sm rounded-full transition-colors duration-200 font-semibold cursor-pointer select-none";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
        if (isClick) setIsClick(false);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClick]);

  const handleClick = () => setIsClick((prev) => !prev);

  return (
    <>
      {/* SubNavbar */}
      <div
        className={`transition-all duration-600 ${
          isClick ? "block fade-in" : "hidden fade-out"
        }`}
      >
        <Navbar />
      </div>
      <div
        className={`flex bg-white rounded-full shadow-md overflow-hidden divide-x divide-gray-200 
                    transition-all duration-600 cursor-pointer
                    ${isClick ? "hidden fade-out" : "block fade-in"}`}
        onClick={handleClick}
      >
        <div className={css}>
          <FaHome className="text-xl" />
          <div>Địa điểm bất kỳ</div>
        </div>
        <div className={css}>Thời gian bất kỳ</div>
        <div className={css}>
          <div>Thêm Khách</div>
          <img src={searchIcon} alt="search" className="w-8" />
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
