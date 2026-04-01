import React from "react";

function UserHobbies({ host }) {
  return (
    <div>
      <h2 className="font-montserrat text-2xl font-semibold ">
        Hỏi {host.name} về
      </h2>
      <div className="grid grid-cols-4 gap-10 mt-5">
        {host.hobbies.map((item) => (
          <div className="flex items-center gap-3">
            <span className="text-xl">{item.icon}</span>
            <span className="font-montserrat text-lg">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserHobbies;
