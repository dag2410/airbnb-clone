import { useLayoutEffect, useRef, useState } from "react";
import { FaConciergeBell, FaHome } from "react-icons/fa";
import { GiAirBalloon } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";

const Navbar = ({ isOpen = true }) => {
  const location = useLocation();
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeLink = document.querySelector(".nav-link.active");
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        setIndicator({ left: offsetLeft, width: offsetWidth });
      }
    };
    const timer = setTimeout(updateIndicator, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, isOpen]);

  const baseClasses =
    "nav-link flex items-center text-base p-5 font-montserrat transition-colors duration-200";

  return isOpen ? (
    <nav className="flex flex-col items-center justify-center gap-6">
      {/* === Thanh menu chính === */}
      <ul className="relative flex" ref={navRef}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${baseClasses}  active text-brandPrimary-1`
                : `${baseClasses} text-gray-700 hover:text-gray-900`
            }
          >
            <div className="flex relative items-center gap-4">
              <FaHome className="text-2xl" />
              <span className="invisible absolute font-semibold">
                Nơi lưu trú
              </span>
              <span>Nơi lưu trú</span>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/experiences"
            className={({ isActive }) =>
              isActive
                ? `${baseClasses} active text-brandPrimary-1`
                : `${baseClasses} text-gray-700 hover:text-gray-900`
            }
          >
            <div className="flex relative items-center gap-4">
              <GiAirBalloon className="text-2xl" />
              <span className="invisible absolute font-semibold">
                Trải nghiệm
              </span>
              <span>Trải nghiệm</span>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? `${baseClasses} active text-brandPrimary-1`
                : `${baseClasses} text-gray-700 hover:text-gray-900`
            }
          >
            <div className="flex relative items-center gap-4">
              <FaConciergeBell className="text-2xl" />
              <span className="invisible absolute font-semibold">Dịch vụ</span>
              <span>Dịch vụ</span>
            </div>
          </NavLink>
        </li>

        <span
          className="absolute bottom-0 h-[3px] bg-brandPrimary-1 transition-all duration-300 rounded"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </ul>

      {/* === Thanh tìm kiếm === */}
      <SearchBar />
    </nav>
  ) : (
    ""
  );
};

export default Navbar;
