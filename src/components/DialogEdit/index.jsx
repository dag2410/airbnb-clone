import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

function DialogEdit({
  open,
  openChange,
  title,
  fields = [],
  submitLabel,
  value = {},
}) {
  const [formData, setFormData] = useState(value);

  const { register, formState: errors, reset } = useForm();

  useEffect(() => {
    setFormData(value);
  }, [value]);

  const handleChange = (name, val) => {
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    openChange(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={openChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center font-montserrat text-xl font-semibold">
              {title}
            </DialogTitle>

            <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit}>
              {fields.map((field, index) => {
                if (field.type === "select") {
                  return (
                    <Select
                      key={index}
                      value={formData[field.name]}
                      onValueChange={(val) => handleChange(field.name, val)}
                    >
                      <SelectTrigger className="mt-3">
                        <SelectValue placeholder="Chọn giá trị" />
                      </SelectTrigger>

                      <SelectContent>
                        {field.options.map((opt, idx) => (
                          <SelectItem key={idx} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  );
                }

                return (
                  <Input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-3"
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                );
              })}

              <Button
                type="submit"
                size="lg"
                className="bg-brandPrimary-1 text-white font-semibold hover:bg-brandPrimary-2 transition-colors mt-3"
              >
                {submitLabel}
              </Button>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogEdit;
