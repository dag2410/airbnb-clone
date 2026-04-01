import { useState } from "react";
import DeleteDialog from "./component/DeleteDialog";
import ListFav from "./component/ListFav";
import useLoading from "@/hooks/useLoading";
import Loading from "@/components/Loading";

function Wishlists() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isLoading } = useLoading();
  const handleDeleteAll = () => {
    // Gọi API hoặc cập nhật state để xoá danh sách yêu thích ở đây
    console.log("Đã xoá toàn bộ danh sách yêu thích!");
    setIsDialogOpen(false);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="mt-30 p-10">
      <ListFav onOpenDialog={() => setIsDialogOpen(true)} />
      <DeleteDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onDelete={handleDeleteAll}
      />
    </div>
  );
}

export default Wishlists;
