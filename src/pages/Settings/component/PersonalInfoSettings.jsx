import DialogEdit from "@/components/DialogEdit";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function PersonalInfoSettings({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeItem, setActiveItem] = useState(null);


  

  return (
    <>
      <h3 className="font-montserrat text-2xl font-semibold">
        Thông tin cá nhân
      </h3>
      <div className="flex flex-col gap-5 divide-y">
        {[
          {
            title: "Tên pháp lý",
            content: user.firstName + " " + user.lastName,
            type: "fullName",
          },
          {
            title: "Tên ưa dùng",
            content: user.username,
            type: "userName",
          },
          {
            title: "Địa chỉ email",
            content: user.email,
            type: "email",
          },
          {
            title: "Số điện thoại",
            content: user.phone_number,
            type: "phoneNumber",
          },
          {
            title: "Địa chỉ cư trú",
            content: user.location,
            type: "location",
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
                  setActiveItem(item);
                  setIsEditing(true);
                }}
              >
                {item.content ? "Chỉnh sửa" : "Thêm"}
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

      {activeItem && (
        <DialogEdit
          open={isEditing}
          openChange={setIsEditing}
          title={activeItem.title}
          submitLabel="Lưu"
          fields={[
            {
              name: activeItem.type,
              placeholder: activeItem.title,
            },
          ]}
          value={{
            [activeItem.type]: activeItem.content || "",
          }}
        />
      )}
    </>
  );
}

export default PersonalInfoSettings;
