import * as httpRequest from "@/utils/httpRequest";

export const getAllUsers = async () => {
  const response = await httpRequest.get("/users");
  return response;
};

export const getUserById = async (id) => {
  const response = await httpRequest.get(`/users/${id}`);
  return response;
};

export const updateUser = async (id, data) => {
  const response = await httpRequest.put(`/users/${id}`, data);
  return response;
};

export const deleteUser = async (id) => {
  const response = await httpRequest.del(`/users/${id}`);
  return response;
};

export default {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
