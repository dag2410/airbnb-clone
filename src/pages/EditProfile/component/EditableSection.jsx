import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function EditableSection({ label, bio }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [inputValue, setInputValue] = useState(bio || "");

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h2 className="font-montserrat text-3xl font-semibold">{label}</h2>
        <p className="font-montserrat text-lg">{bio}</p>
      </div>
      <Button
        variant="ghost"
        size="lg"
        className="bg-gray-100 hover:bg-gray-200 text-base mt-5"
        onClick={() => setIsDialogOpen(true)}
      >
        Chỉnh sửa thông tin giới thiệu
      </Button>

      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="border-b-2 p-8">
            <DialogHeader>
              <DialogTitle className="font-montserrat text-2xl text-left">
                {label}
              </DialogTitle>
            </DialogHeader>

            <Textarea
              placeholder={label}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="placeholder:font-montserrat py-3 min-h-[150px] resize-none"
            />

            <div className="flex justify-end mt-4">
              <Button className="ml-2">Lưu</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default EditableSection;
