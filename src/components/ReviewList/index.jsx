import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { NavLink } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { Button } from "../ui/button";

function ReviewList({ host, reviews }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <Button
        variant="ghost"
        size="lg"
        className="bg-gray-100 text-base rounded-xl mt-5 py-6"
        onClick={() => setIsDialogOpen(true)}
      >
        Hiển thị tất cả đánh giá
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-montserrat text-xl text-center">
              Tất cả đánh giá
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 gap-5 mt-5">
            {reviews?.map((item) => (
              <div
                key={item.id}
                className="h-fit border hover:border-gray-600 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-4 items-center">
                  <NavLink
                    to={`/users/profile/${host.id}`}
                    className="flex gap-5 items-center"
                  >
                    <img
                      src={item.avatar}
                      alt="avatar"
                      className="rounded-full object-cover w-16"
                    />
                  </NavLink>
                  <div>
                    <span className="font-montserrat font-medium text-lg">
                      {item.author}
                    </span>
                    <div className="flex items-center gap-1 text-gray-700 text-sm">
                      <span>{item.rating}</span>
                      <FaRegStar className="text-red-500 text-xs" />
                      <span>&middot;</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-800 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ReviewList;
