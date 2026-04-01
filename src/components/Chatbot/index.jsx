import React from "react";
import chatbotImage from "@/assets/images/chatbot.svg";

function Chatbot() {
  return (
    <div>
      <img
        src={chatbotImage}
        alt="chatbot"
        className="fixed bottom-32 right-14 w-20 h-16 cursor-pointer object-cover hover:scale-110 transition-all duration-300 bg-rose-300 rounded-full z-50"
      />
    </div>
  );
}

export default Chatbot;
