import { useRef } from "react";

const SearchField = ({
  id = "location",
  label = "Địa điểm",
  placeholder = "Tìm kiếm điểm đến",
  onClick,
  isActive,
  value,
  onChange,
}) => {
  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    inputRef.current?.focus();
    if (onClick) onClick();
  };

  return (
    <div
      className={`inline-flex flex-col py-3 pl-8 pr-24 rounded-full gap-1 
     hover:bg-gray-100 transition duration-200 cursor-pointer ${
       isActive ? "bg-gray-300 text-gray-900" : "bg-white"
     }`}
      onClick={handleClick}
    >
      <label
        htmlFor={id}
        className="text-sm font-semibold text-gray-800 
        font-montserrat cursor-pointer select-none"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e);
        }}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=" text-sm placeholder:text-gray-600 font-montserrat font-semibold
        bg-transparent border-none outline-none focus:outline-none cursor-pointer 
        select-none overflow-hidden text-ellipsis"
        onClick={(e) => {
          e.preventDefault();
          handleClick(e);
        }}
      />
    </div>
  );
};

export default SearchField;
