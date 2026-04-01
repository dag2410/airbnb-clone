import DialogEdit from "@/components/DialogEdit";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function LoginSettings({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const formatDateTime = (date) => {
    const d = new Date(date);

    const time = d.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const day = d.toLocaleDateString("vi-VN");

    return `${time} ${day}`;
  };

  return (
    <div>
      <div>
        <h3 className="font-montserrat text-2xl font-semibold">
          Đăng nhập và bảo mật
        </h3>
        <div className="flex flex-col gap-5 divide-y">
          {[
            {
              title: "Mật khẩu",
              content: "Mật khẩu đã được cập nhật",
              btn: user.password ? "Chỉnh sửa" : "Thêm",
              type: "password",
            },
            {
              title: "Google",
              content: user.google_connect ? "Đã kết nối" : "",
              btn: user.google_connect ? "Ngắt kết nối" : "",
            },
            {
              title: "Phiên đăng nhập hiện tại",
              content: <strong>{formatDateTime(user.last_login)}</strong>,
            },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mt-5">
                <h4 className="font-montserrat text-lg font-semibold ">
                  {item.title}
                </h4>
                <Button
                  variant="ghost"
                  className="underline font-montserrat font-medium p-0 h-auto bg-inherit"
                  onClick={() => {
                    setIsEditing(true);
                    setActiveItem(item);
                  }}
                >
                  {item.btn}
                </Button>
              </div>
              <span
                className={`font-montserrat text-base  ${
                  item.content ? "text-gray-700" : "text-gray-500"
                }`}
              >
                {item.content ? item.content : "Chưa cung cấp"}
              </span>
            </div>
          ))}
        </div>

        {activeItem?.type === "password" && (
          <DialogEdit
            open={isEditing}
            openChange={setIsEditing}
            title="Thay đổi mật khẩu"
            submitLabel="Lưu"
            fields={[
              {
                name: "currentPassword",
                placeholder: "Mật khẩu hiện tại",
                type: "password",
                required: true,
              },
              {
                name: "newPassword",
                placeholder: "Mật khẩu mới",
                type: "password",
                required: true,
              },
              {
                name: "confirmPassword",
                placeholder: "Nhập lại mật khẩu mới",
                type: "password",
                required: true,
              },
            ]}
            value={{
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default LoginSettings;
