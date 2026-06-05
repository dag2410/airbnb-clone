import logo from "@/assets/images/logo.webp";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import SubNavbar from "./SubNavbar";
import UserNavigation from "./UserNavigation";
import "./header.css";

const Header = ({ type }) => {
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation();
  const isCreateRoom = location.pathname == "/host/create-listing";

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (type === "sub") {
    return (
      <header
        className={`sticky w-full bg-white shadow text-black px-10 pt-5 pb-4 z-30 border-b-2`}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className={`${isCreateRoom ? "" : "w-[260px]"}`}>
            <NavLink to="/">
              <img src={logo} alt="Logo" className="py-5 w-1/2 m-auto" />
            </NavLink>
          </div>
          <div>
            <div
              className={`transition-all duration-700 fade-in
              `}
            >
              <SubNavbar />
            </div>
          </div>

          <div className="flex-shrink-0">
            <UserNavigation />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow text-black px-10 pt-5 pb-4 z-30`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="w-[250px]">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="py-5 w-1/2 m-auto" />
          </NavLink>
        </div>

        <div>
          <div
            className={`transition-all duration-700 ${
              isScroll ? "hidden fade-out" : "block fade-in"
            }`}
          >
            <Navbar />
          </div>
          <div
            className={`transition-all duration-700  ${
              isScroll ? "block fade-in" : "hidden fade-out"
            }`}
          >
            <SubNavbar />
          </div>
        </div>
        <div className="flex-shrink-0">
          <UserNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
