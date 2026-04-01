import * as httpRequest from "@/utils/httpRequest";

export const getAllRooms = async () => {
  const response = await httpRequest.get("/rooms");
  return response.data;
};

export const getOneRoom = async (id) => {
  const response = await httpRequest.get(`/rooms/${id}`);
  return response.data;
};

export const createRoom = async (data) => {
  const response = await httpRequest.post("/rooms", data);
  return response.data;
};

export const updateRoom = async (id, data) => {
  const response = await httpRequest.put(`/rooms/${id}`, data);
  return response.data;
};

export const deleteRoom = async (id) => {
  const response = await httpRequest.del(`/rooms/${id}`);
  return response.data;
};

export default {
  getAllRooms,
  createRoom,
  getOneRoom,
  updateRoom,
  deleteRoom,
};
