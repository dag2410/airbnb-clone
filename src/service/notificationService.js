import * as httpRequest from "@/utils/httpRequest";

export const getNotifications = async () => {
  const response = await httpRequest.get("/notifications");
  return response;
};

export const markAsRead = async (notificationId) => {
  const response = await httpRequest.patch("/notifications/read", {
    notificationId: notificationId,
  });
  return response;
};

export const markAllAsRead = async () => {
  const response = await httpRequest.patch("/notifications/read-all");
  return response;
};

export const deleteNotification = async (id) => {
  const response = await httpRequest.del(`/notifications/${id}`);
  return response;
};

export default {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
};
