import React, { useRef } from "react";

const GuestField = ({
  label,
  value = "Thêm khách",
  placeholder = "Thêm khách",
  onClick,
  isActive,
}) => {
  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    inputRef.current?.focus();
    if (onClick) onClick();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`relative inline-flex pr-24 rounded-full hover:bg-gray-100 transition duration-200 cursor-pointer ${
          isActive ? "bg-gray-300 text-gray-900" : "bg-white"
        }`}
      >
        <div className="flex flex-col pl-8 py-3">
          <span className="text-sm font-semibold text-gray-800 font-montserrat mb-1 select-none">
            {label}
          </span>

          <input
            ref={inputRef}
            value={value}
            placeholder={placeholder}
            readOnly
            className="text-sm placeholder:text-gray-600 font-montserrat font-medium 
           bg-transparent border-none outline-none focus:outline-none cursor-pointer 
           select-none overflow-hidden text-ellipsis"
            onClick={(e) => {
              e.preventDefault();
              handleClick(e);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default GuestField;
