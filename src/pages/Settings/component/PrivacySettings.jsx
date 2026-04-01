import { Switch } from "@/components/ui/switch";
import React from "react";

function PrivacySettings() {
  return (
    <div>
      <h3 className="font-montserrat text-2xl font-semibold">Quyền riêng tư</h3>

      <div className="flex flex-col gap-5 divide-y">
        {[
          {
            id: "seen-message",
            title: "Thông báo đã đọc tin nhắn",
            content: "Cho người khác biết tôi đã đọc tin nhắn của họ.",
            defaultChecked: true,
          },
          {
            id: "post-search",
            title: "Bài đăng",
            content:
              "Cho phép bài đăng của tôi xuất hiện trong các công cụ tìm kiếm",
            defaultChecked: false,
          },
        ].map((item, index) => (
          <div key={index} className="pt-5">
            <div className="flex justify-between items-center">
              <h4 className="font-montserrat text-lg font-semibold">
                {item.title}
              </h4>

              {/* SWITCH */}
              <div className="flex items-center gap-2">
                <Switch
                  id={item.id}
                  defaultChecked={item.defaultChecked}
                  onCheckedChange={(checked) =>
                    console.log(item.id, "=>", checked)
                  }
                  className="scale-150"
                />
              </div>
            </div>

            <span
              className={`font-montserrat text-base ${
                item.content ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {item.content || "Chưa cung cấp"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrivacySettings;
