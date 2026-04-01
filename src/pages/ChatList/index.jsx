import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const mockChats = [
  {
    id: 1,
    name: "Nguyễn Minh",
    avatar: "https://i.pravatar.cc/50?img=1",
    lastMessage: "Cảm ơn bạn nhé! Hẹn gặp lại sớm.",
    time: "10:45 AM",
    unread: null,
    messages: [
      {
        from: "them",
        text: "Chào bạn, hôm nay bạn rảnh không?",
        time: "10:30 AM",
      },
      { from: "me", text: "Mình rảnh buổi chiều nhé.", time: "10:35 AM" },
      {
        from: "them",
        text: "Cảm ơn bạn nhé! Hẹn gặp lại sớm.",
        time: "10:45 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Trần Thu Hà",
    avatar: "https://i.pravatar.cc/50?img=2",
    lastMessage: "Bạn còn quan tâm căn hộ không?",
    time: "9:10 AM",
    unread: 0,
    messages: [
      { from: "them", text: "Bạn còn quan tâm căn hộ không?", time: "9:10 AM" },
    ],
  },
  {
    id: 3,
    name: "Airbnb Host",
    avatar: "https://i.pravatar.cc/50?img=3",
    lastMessage: "Chào bạn, bạn có thể check-in sớm nhé!",
    time: "Hôm qua",
    unread: 1,
    messages: [
      { from: "them", text: "Bạn có thể check-in sớm nhé!", time: "Hôm qua" },
      { from: "me", text: "Tuyệt vời, cảm ơn bạn!", time: "Hôm qua" },
    ],
  },
  {
    id: 4,
    name: "Nguyễn Thanh",
    avatar: "https://i.pravatar.cc/50?img=4",
    lastMessage: "Oke bạn nha 👍",
    time: "Thứ 5",
    unread: 0,
    messages: [{ from: "them", text: "Oke bạn nha 👍", time: "Thứ 5" }],
  },
];

function ChatList() {
  const [searchMessage, setSearchMessage] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(
    mockChats[0]
  );
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setSelectedConversation((prev) => ({
      ...prev,
    }));
    setMessage("");
  };

  return (
    <div className="w-full flex divide-x-2 h-[85vh]  border overflow-hidden">
      {/* Sidebar */}
      <div className="w-3/12 bg-white overflow-y-auto">
        <h2 className="ml-6 font-montserrat text-3xl font-semibold py-5">
          Tin nhắn
        </h2>
        <div className="cursor-pointer px-5">
          <Input
            value={searchMessage}
            onChange={(e) => setSearchMessage(e.target.value)}
            type="text"
            placeholder="Tìm kiếm tin nhắn..."
            className="w-full py-5 rounded-xl placeholder:text-base focus:bg-orange-50"
          />
        </div>

        <div className="mt-5">
          {mockChats
            .filter((chat) =>
              chat.name.toLowerCase().includes(searchMessage.toLowerCase())
            )
            .map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedConversation(item)}
                className={`px-5 py-3 border-b border-gray-100 cursor-pointer transition-all duration-300 ${
                  selectedConversation?.id === item.id
                    ? "bg-gray-100 shadow-inner"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt="avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-1 grow">
                    <div className="flex justify-between items-center">
                      <span className="font-montserrat text-base font-semibold">
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </div>
                    <span
                      className={`text-sm text-gray-700 ${
                        item.unread
                          ? "font-normal"
                          : "font-semibold text-gray-900"
                      }`}
                    >
                      {item.lastMessage}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Chat Detail */}
      <div className="w-9/12 flex flex-col justify-between ">
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-4 bg-white border-b">
          <div className="relative w-12 h-12">
            <img
              src={selectedConversation.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>

          <div>
            <h3 className="font-montserrat text-lg font-semibold">
              {selectedConversation.name}
            </h3>
            <span className="text-sm text-gray-500">Đang hoạt động</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {selectedConversation.messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 max-w-xs rounded-2xl text-sm ${
                  msg.from === "me"
                    ? "bg-gray-800 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input box */}
        <div className="flex items-center gap-3 p-4 bg-white border-t">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Nhập tin nhắn..."
            className="rounded-full py-5 flex-1"
          />
          <Button
            onClick={handleSendMessage}
            className="rounded-full bg-brandPrimary-1 hover:bg-rose-600"
          >
            <FaPaperPlane className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
