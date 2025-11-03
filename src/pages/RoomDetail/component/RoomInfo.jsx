import React from "react";

const RoomInfo = ({
  description,
  roomDetails: { guests, bedrooms, beds, baths },
  host: { avatar },
  ref,
}) => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="font-semibold font-montserrat text-2xl">
          {description}
        </h2>
        <div className="flex gap-3">
          {[
            ` ${guests} guests`,
            `${bedrooms} bedrooms`,
            `${beds} beds`,
            `${baths} baths`,
          ].map((item, index, arr) => (
            <div key={index}>
              <span className="text-sm font-montserrat font-medium">
                {item}
              </span>
              {index < arr.length - 1 && <span className="ml-3">&middot;</span>}
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          src={avatar}
          alt="avatar host"
          className="rounded-full w-16 object-cover cursor-pointer"
          onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
        />
      </div>
    </div>
  );
};

export default RoomInfo;
