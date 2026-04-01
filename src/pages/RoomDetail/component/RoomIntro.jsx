import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";

const RoomIntro = ({ introduce }) => {
  const textRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      const isTextOverflow = el.scrollHeight > el.clientHeight;
      setIsOverflow(isTextOverflow);
    }
  }, [introduce]);

  return (
    <div>
      <p
        ref={textRef}
        className="font-montserrat text-lg text-gray-700 line-clamp-4"
      >
        {introduce}
      </p>

      {isOverflow && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="rounded-2xl bg-gray-100 hover:bg-gray-300 mt-3"
              variant="ghost"
              size="lg"
            >
              Hiển thị thêm
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Giới thiệu về chỗ ở
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p className="whitespace-pre-wrap font-montserrat text-lg text-gray-800">
                {introduce}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default RoomIntro;
