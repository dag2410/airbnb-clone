import GridContainer from "@/components/GridContainer/GridContainer";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import {
  useClearWishlistMutation,
  useWishlist,
} from "@/queries/wishlist.query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import DeleteDialog from "./component/DeleteDialog";

function Wishlists() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const { data: roomList, isFetching } = useWishlist(page, limit);
  const { mutate: clearWishlist, isPending } = useClearWishlistMutation();

  const handleDeleteAll = () => {
    clearWishlist(undefined, {
      onSuccess: () => {
        setIsDialogOpen(false);
      },
    });
  };

  const changePage = (newPage) => {
    setSearchParams({
      page: newPage,
      limit,
    });
  };

  const rows = roomList?.rows ?? [];
  const pagination = roomList?.pagination ?? { totalPage: 0 };
  console.log(roomList);

  return !isFetching ? (
    <div className="mt-30 p-10">
      <div className="flex justify-between">
        <h2 className="font-montserrat text-2xl font-semibold">
          Danh sách phòng yêu thích
        </h2>

        {rows.length > 0 && (
          <Button
            variant="ghost"
            className="font-montserrat font-semibold bg-gray-50 hover:bg-gray-200"
            onClick={() => setIsDialogOpen(true)}
          >
            Xóa danh sách yêu thích
          </Button>
        )}
      </div>

      <div className="mt-10">
        {rows.length > 0 ? (
          <GridContainer listing={rows} isLike />
        ) : (
          <div className="flex h-[400px] items-center justify-center rounded-xl border border-dashed">
            <div className="text-center">
              <p className="text-2xl font-semibold">Chưa có dữ liệu</p>
              <p className="mt-2 text-gray-500">
                Bạn chưa thêm phòng nào vào danh sách yêu thích.
              </p>
            </div>
          </div>
        )}
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
