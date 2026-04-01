import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuestItem = ({
  label,
  subLabel,
  value,
  onIncrement,
  onDecrement,
  underline = false,
  type = "adults",
}) => {
  return (
    <div className="flex items-center justify-between py-3  border-b-2 last:border-none select-none mt-5">
      <div>
        <p className="font-semibold font-montserrat text-gray-950 mb-1">
          {label}
        </p>
        {subLabel && (
          <p
            className={`text-sm text-gray-600 ${
              underline ? "underline underline-offset-2" : ""
            }`}
          >
            {subLabel}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          disabled={value === 0}
          onClick={onDecrement}
          className="rounded-full w-8 h-8"
        >
          <Minus size={16} />
        </Button>
        <span className="w-4 text-center">{value}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={onIncrement}
          className="rounded-full w-8 h-8"
        >
          <Plus size={16} />
        </Button>
      </div>
    </div>
  );
};

export default GuestItem;
