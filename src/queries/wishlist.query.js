import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import wishlistService from "@/service/wishlistService";

// ----------------------------
// Query Keys
// ----------------------------
export const wishlistKeys = {
  all: ["wishlists"],
  lists: () => [...wishlistKeys.all, "list"],
  list: (page, limit) => [...wishlistKeys.lists(), { page, limit }],
};

// ----------------------------
// Queries
// ----------------------------

/**
 * Lấy danh sách wishlist, có pagination (page, limit)
 */
export const useWishlist = (page = 1, limit = 10, options = {}) => {
  return useQuery({
    queryKey: wishlistKeys.list(page, limit),
    queryFn: () => wishlistService.getWishlist(page, limit),
    staleTime: 1000 * 60 * 2, // 2 phút - wishlist thay đổi theo hành vi user
    gcTime: 1000 * 60 * 10,
    placeholderData: (prevData) => prevData, // giữ data cũ khi đổi trang
    ...options,
  });
};


export const useToggleLikeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: wishlistService.toggleLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wishlistKeys.lists() });
    },
  });
};

/**
 * Xoá toàn bộ wishlist
 */
export const useClearWishlistMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: wishlistService.clearWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wishlistKeys.lists() });
    },
  });
};
