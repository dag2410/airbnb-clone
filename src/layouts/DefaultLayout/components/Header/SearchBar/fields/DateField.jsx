import React, { useRef } from "react";

const DateField = ({
  label = "Thời gian",
  placeholder = "Thêm ngày",
  value,
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
        className={`inline-flex flex-col py-3 pl-8 pr-20 rounded-full hover:bg-gray-100 transition duration-200 cursor-pointer ${
          isActive ? "bg-gray-300 text-gray-900" : "bg-white"
        }`}
      >
        <label className="text-sm font-semibold text-gray-800 font-montserrat mb-1 select-none">
          {label}
        </label>
        <input
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          readOnly
          className="text-sm placeholder:text-gray-600 font-montserrat font-medium 
           bg-transparent border-none outline-none focus:outline-none cursor-pointer 
           select-none overflow-hidden text-ellipsis"
        />
      </div>
    </>
  );
};

export default DateField;
