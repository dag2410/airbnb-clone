import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function DeleteDialog({ open, onOpenChange, onDelete }) {
  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-montserrat text-lg font-semibold text-center">
              Xóa tất cả danh sách yêu thích?
            </DialogTitle>
          </DialogHeader>
          <p className="text-left text-gray-600 font-montserrat ">
            Hành động này không thể hoàn tác. Bạn có chắc muốn xóa toàn bộ danh
            sách yêu thích?
          </p>
          <DialogFooter className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="font-montserrat"
            >
              Hủy
            </Button>
            <Button
              onClick={onDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-montserrat"
            >
              Xóa tất cả
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeleteDialog;
