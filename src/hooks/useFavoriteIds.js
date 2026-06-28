import { useMemo } from "react";
import { useWishlist } from "@/queries/wishlist.query";

export const useFavoriteIds = () => {
  const { data } = useWishlist(1, 10);

  return useMemo(
    () => new Set(data?.rows?.map((item) => item.room.id) ?? []),
    [data],
  );
};
