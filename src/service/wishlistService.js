import * as httpRequest from "@/utils/httpRequest";

export const getWishlist = async (page, limit) => {
  const response = await httpRequest.get("/wishlists", {
    params: {
      page,
      limit,
    },
  });
  return response.data;
};

export const toggleLike = async (roomId) => {
  const response = await httpRequest.post("/wishlists", { room_id: roomId });
  return response.data;
};

export const clearWishlist = async () => {
  const response = await httpRequest.del("/wishlists");
  return response.data;
};

export default {
  getWishlist,
  toggleLike,
  clearWishlist,
};
