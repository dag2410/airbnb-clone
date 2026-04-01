import * as httpRequest from "@/utils/httpRequest";

export const getConversations = async () => {
  const response = await httpRequest.get("/conversations");
  return response;
};

export const getConversationById = async (id) => {
  const response = await httpRequest.get(`/conversations/${id}`);
  return response;
};

export const createConversation = async (participantId) => {
  const response = await httpRequest.post("/conversations", {
    participantId: participantId,
  });
  return response;
};

export const sendMessage = async (conversationId, content, type = "text") => {
  const response = await httpRequest.post(
    `/conversations/${conversationId}/message`,
    {
      content,
      type,
    }
  );
  return response;
};

export const markAsRead = async (conversationId) => {
  const response = await httpRequest.put(
    `/conversations/${conversationId}/message/read`
  );
  return response;
};

export default {
  getConversations,
  getConversationById,
  createConversation,
  sendMessage,
  markAsRead,
};
