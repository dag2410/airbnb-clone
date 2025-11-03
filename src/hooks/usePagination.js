import { useState, useMemo } from "react";

export default function usePagination(items = [], itemPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(items.length / itemPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemPerPage;
    return items.slice(start, start + itemPerPage);
  }, [items, currentPage, itemPerPage]);

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPage));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return {
    currentPage,
    setCurrentPage,
    totalPage,
    currentItems,
    nextPage,
    prevPage,
  };
}
