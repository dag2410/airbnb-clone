import ListItems from "@/components/ListItems";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function UserListings({ host }) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isAllVisible = visibleCount >= host.listings.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleDialogChange = (open) => {
    setIsDialogOpen(open);
    if (!open) {
      setVisibleCount(8);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-montserrat text-2xl font-semibold ">
          Bài đăng của {host.name}
        </h2>
        <Button
          variant="ghost"
          className="bg-gray-100 text-base rounded-xl py-5"
          onClick={() => setIsDialogOpen(true)}
        >
          Hiển thị tất cả
        </Button>
      </div>

      <div className="mt-5 flex justify-between">
        {host.listings.slice(0, 6).map((item) => (
          <div>
            <ListItems data={item} />
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-montserrat text-xl text-center">
              Tất cả bài đăng của {host.name}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-4 gap-10 mt-6">
            {host.listings.slice(0, visibleCount).map((item) => (
              <ListItems key={item.id} data={item} />
            ))}
          </div>

          {!isAllVisible && (
            <div className="flex justify-center mt-8">
              <Button
                variant="ghost"
                size="lg"
                className="bg-gray-100 text-base rounded-xl py-6 hover:bg-gray-200"
                onClick={handleShowMore}
              >
                Hiển thị thêm
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UserListings;
