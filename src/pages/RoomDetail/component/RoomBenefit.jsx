import React from "react";

import home from "@/assets/images/home.webp";

const RoomBenefit = ({ highlights }) => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        {highlights.map((item, index) => (
          <div key={index} className="flex gap-5">
            <div>
              <img src={home} alt="home icon" />
            </div>
            <div>
              <span className=" font-montserrat text-base font-medium  ">
                {item.title}
              </span>
              <p className="font-montserrat text-sm text-gray-600 ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomBenefit;
