import { useLayoutEffect, useRef, useState } from "react";
import { FaConciergeBell, FaHome } from "react-icons/fa";
import { GiAirBalloon } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";

const baseClasses =
  "nav-link flex items-center text-base p-5 font-montserrat transition-colors duration-200";

const Navbar = ({ isOpen = true }) => {
  const location = useLocation();
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const linkRef = useRef({});

  useLayoutEffect(() => {
    const activeLink = linkRef.current[location.pathname];

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicator({ left: offsetLeft, width: offsetWidth });
    }
  }, [location.pathname, isOpen]);

  return isOpen ? (
    <nav className="flex flex-col items-center justify-center gap-6">
      {/* === Thanh menu chính === */}
      <ul className="relative flex" ref={navRef}>
        {[
          {
            title: "Nguyên căn",
            link: "/",
            icon: <FaHome className="text-2xl" />,
          },
          {
            title: "Căn hộ",
            link: "/experiences",
            icon: <GiAirBalloon className="text-2xl" />,
          },
          {
            title: "Khách sạn",
            link: "/services",
            icon: <FaConciergeBell className="text-2xl" />,
          },
        ].map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              ref={(el) => (linkRef.current[item.link] = el)}
              className={({ isActive }) =>
                isActive
                  ? `${baseClasses}  active text-brandPrimary-1`
                  : `${baseClasses} text-gray-700 hover:text-gray-900`
              }
            >
              <div className="flex relative items-center gap-4">
                {item.icon}
                <span className="invisible absolute font-semibold">
                  {item.title}
                </span>
                <span>{item.title}</span>
              </div>
            </NavLink>
          </li>
        ))}

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
