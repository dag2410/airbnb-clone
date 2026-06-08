import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import GridContainer from "@/components/GridContainer/GridContainer";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import wishlistService from "@/service/wishlistService";
import DeleteDialog from "./component/DeleteDialog";

function Wishlists() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const { data: roomList, isFetching } = useQuery({
    queryKey: ["wishlists", page, limit],
    queryFn: () => wishlistService.getWishlist(page, limit),
  });

  const handleDeleteAll = () => {
    console.log("Đã xoá toàn bộ danh sách yêu thích!");
    setIsDialogOpen(false);
  };

  const changePage = (newPage) => {
    setSearchParams({
      page: newPage,
      limit,
    });
  };

  if (!roomList) return <p>Không có dữ liệu</p>;

  const { rows, pagination } = roomList;

  return !isFetching ? (
    <div className="mt-30 p-10">
      <div className="flex justify-between">
        <h2 className="font-montserrat text-2xl font-semibold">
          Danh sách phòng yêu thích
        </h2>

        <Button
          variant="ghost"
          className="font-montserrat font-semibold bg-gray-50 hover:bg-gray-200"
          onClick={() => setIsDialogOpen(true)}
        >
          Xóa danh sách yêu thích
        </Button>
      </div>

      <div className="mt-10">
        <GridContainer listing={rows} isLike />
      </div>

      {pagination.totalPage > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => changePage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Trước
          </button>

          {Array.from({ length: pagination.totalPage }, (_, i) => i + 1).map(
            (item) => (
              <button
                key={item}
                onClick={() => changePage(item)}
                className={`px-3 py-2 rounded-lg ${
                  page === item
                    ? "bg-red-500 text-white"
                    : "border border-gray-300"
                }`}
              >
                {item}
              </button>
            ),
          )}

          <button
            onClick={() => changePage(page + 1)}
            disabled={page === pagination.totalPage}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Sau
          </button>
        </div>
      )}

      <DeleteDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onDelete={handleDeleteAll}
      />
    </div>
  ) : (
    <Loading />
  );
}

export default Wishlists;
