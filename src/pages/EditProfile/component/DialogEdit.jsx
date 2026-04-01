import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

function DialogEdit({
  open,
  openChange,
  label,
  description,
  currentValue,
  onSave,
}) {
  const [inputValue, setInputValue] = useState(currentValue || "");

  useEffect(() => {
    setInputValue(currentValue || "");
  }, [currentValue]);

  const handleSave = (e) => {
    if (onSave) {
      onSave(inputValue);
      setInputValue(e.target.value);
    }
    openChange(false);
  };

  // const isBio = label === "Giới thiệu bản thân";

  return (
    <Dialog open={open} onOpenChange={openChange}>
      <DialogContent className="border-b-2 p-8">
        <DialogHeader>
          <DialogTitle className="font-montserrat text-2xl text-left">
            {label}
          </DialogTitle>
          {description && (
            <p className="text-left font-montserrat text-gray-600 text-base mt-1">
              {description}
            </p>
          )}
        </DialogHeader>

        <Input
          placeholder={label}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="placeholder:font-montserrat py-6"
        />

        <div className="flex justify-end mt-4">
          <Button className="ml-2" onClick={handleSave}>
            Lưu
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogEdit;
