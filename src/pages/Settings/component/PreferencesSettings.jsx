import DialogEdit from "@/components/DialogEdit";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function PreferencesSettings({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      key: "language",
      title: "Ngôn ngữ ưu tiên",
      content: user.language === "vi" ? "Tiếng Việt" : "English",
      editable: true,
      type: "select",
      options: [
        { label: "Tiếng Việt", value: "vi" },
        { label: "English", value: "en" },
      ],
    },
    {
      key: "money_type",
      title: "Loại tiền tệ ưu tiên",
      content: "VND",
      editable: false,
    },
    {
      key: "timezone",
      title: "Múi giờ",
      content: "GMT+7",
      editable: false,
    },
  ];

  return (
    <div>
      <h3 className="font-montserrat text-2xl font-semibold">
        Ngôn ngữ và tiền tệ
      </h3>

      <div className="flex flex-col gap-5 divide-y">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mt-5">
              <h4 className="font-montserrat text-lg font-semibold">
                {item.title}
              </h4>

              {item.editable && (
                <Button
                  variant="ghost"
                  className="underline font-montserrat font-medium p-0 h-auto bg-inherit"
                  onClick={() => {
                    setActiveItem(item);
                    setIsEditing(true);
                  }}
                >
                  Chỉnh sửa
                </Button>
              )}
            </div>

            <span
              className={`font-montserrat text-base ${
                item.content ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {item.content}
            </span>
          </div>
        ))}
      </div>

      {activeItem && (
        <DialogEdit
          open={isEditing}
          openChange={setIsEditing}
          title="Chọn ngôn ngữ"
          submitLabel="Lưu"
          fields={[
            {
              name: "language",
              type: "select",
              options: activeItem.options,
            },
          ]}
          value={{
            language: user.language,
          }}
        />
      )}
    </div>
  );
}

export default PreferencesSettings;
