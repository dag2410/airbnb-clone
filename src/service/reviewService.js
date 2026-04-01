import * as httpRequest from "@/utils/httpRequest";

export const getAllReviews = async () => {
  const response = await httpRequest.get("/reviews");
  return response;
};

export const getReviewById = async (id) => {
  const response = await httpRequest.get(`/reviews/${id}`);
  return response;
};

export const createReview = async (data) => {
  const response = await httpRequest.post("/reviews", data);
  return response;
};

export const updateReview = async (id, data) => {
  const response = await httpRequest.put(`/reviews/${id}`, data);
  return response;
};

export const deleteReview = async (id) => {
  const response = await httpRequest.del(`/reviews/${id}`);
  return response;
};

export default {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
