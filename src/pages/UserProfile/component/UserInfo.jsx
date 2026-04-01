import React from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function UserInfo({ host }) {
  return (
    <div className="flex gap-10">
      <div className="w-4/12 flex flex-col gap-5 p-5">
        <div className="flex shadow-lg px-12 py-8 gap-5 rounded-2xl">
          <div className="w-3/6 flex flex-col items-center gap-3">
            <NavLink to={`/users/profile/${host.id}`}>
              <img
                src={host.avatar}
                alt="avatar"
                className="rounded-full object-cover"
              />
              <div className="flex flex-col items-center">
                <span className="font-montserrat text-2xl font-semibold">
                  {host.name}
                </span>
                {host.isSuperhost ? (
                  <span className="font-montserrat text-sm text-gray-600">
                    Chủ nhà siêu cấp
                  </span>
                ) : (
                  ""
                )}
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col w-3/6 gap-4">
            <div className="flex flex-col">
              <div className="font-montserrat font-semibold text-xl">
                {host.reviewCount}
              </div>
              <div className="font-montserrat text-sm font-semibold">
                Đánh giá
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 font-montserrat font-semibold text-xl">
                <span>{host.rating}</span>
                <FaStar />
              </div>
              <div className="font-montserrat text-sm font-semibold">
                Xếp hạng
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-montserrat font-semibold text-xl">
                {host.monthsHosting}
              </div>
              <div className="font-montserrat text-sm font-semibold">
                {" "}
                tháng kinh nghiệm đón khách
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-8/12 flex flex-col gap-10 px-10">
        <h1 className="font-montserrat font-semibold text-3xl">
          Thông tin về {host.name}
        </h1>
        <ul className="">
          {[
            { label: "school", title: `Nơi tôi từng theo học` },
            { label: "job", title: `Công việc của tôi` },
            { label: "age", title: `Năm sinh` },
            { label: "location", title: `Sống` },
            { label: "dreamDestination", title: `Nơi tôi luôn muốn đến` },
            { label: "funFact", title: `Sự thật thú vị về tôi` },
            { label: "biggestPassion", title: `Thứ mà tôi luôn nghĩ đến` },
            { label: "language", title: `Ngôn ngữ của tôi` },
          ].map((item, index) => (
            <div key={index} className="mb-2">
              {host[item.label] && (
                <span className="font-montserrat">
                  {item.title}:{" "}
                  <span className="font-montserrat font-semibold">
                    {host[item.label]}
                  </span>
                </span>
              )}
            </div>
          ))}
        </ul>
        <p className="font-montserrat font-medium text-lg">{host.bio}</p>
      </div>
    </div>
  );
}

export default UserInfo;
