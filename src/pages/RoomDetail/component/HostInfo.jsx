import { Button } from "@/components/ui/button";
import React from "react";
import { FaStar } from "react-icons/fa";

const HostInfo = ({ host }) => {
  return (
    <div>
      <h3 className="font-montserrat font-medium text-2xl">
        Gặp gỡ host của bạn
      </h3>
      <div className="flex mt-10 gap-16">
        <div className="w-4/12 flex flex-col gap-5">
          <div className="flex shadow-lg px-12 py-8 gap-5">
            <div className="w-3/6 flex flex-col items-center gap-3">
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
          <ul className="flex flex-col gap-5 list-disc   list-inside">
            {host.traits.map((item, index) => (
              <li key={index} className="font-montserrat">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-8/12 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h4 className="font-montserrat text-xl font-medium">
              {host.name} là một Chủ nhà siêu cấp
            </h4>
            <p className="font-montserrat">{host.bio}</p>
          </div>

          <div className="flex flex-col gap-1 ">
            <h4 className="font-montserrat text-xl font-medium">
              Thông tin chủ nhà
            </h4>
            <span className="font-montserrat">
              Tỉ lệ phản hồi: {host.responseRate}
            </span>
            <span className="font-montserrat">
              Phản hồi trong vòng: {host.responseTime}
            </span>
          </div>

          <div>
            <Button
              variant="ghost"
              size="lg"
              className={`text-lg bg-gray-100 rounded-xl hover:bg-gray-200`}
            >
              Nhắn tin cho host
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostInfo;
