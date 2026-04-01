import * as httpRequest from "@/utils/httpRequest";

export const getWishlist = async () => {
  const response = await httpRequest.get("/wishlists");
  return response;
};

export const toggleLike = async (roomId) => {
  const response = await httpRequest.post("/wishlists", { room_id: roomId });
  return response;
};

export const clearWishlist = async () => {
  const response = await httpRequest.del("/wishlists");
  return response;
};

export default {
  getWishlist,
  toggleLike,
  clearWishlist,
};
