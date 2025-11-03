import React from "react";

const RoomUtilities = ({ amenities }) => {
  return (
    <div>
      <h3 className="font-semibold font-montserrat text-2xl">
        Nơi này có những gì cho bạn
      </h3>
      <div className={`grid grid-cols-2 grid-rows-5 mt-3 gap-5`}>
        {amenities.map((item, index) => (
          <div className="flex items-center gap-4">
            <div key={index} className="font-normal font-montserrat ">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomUtilities;
