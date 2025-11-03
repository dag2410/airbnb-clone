import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const RoomIntro = ({ introduce, isExpand, setIsExpand }) => {
  const textRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      const isTextOverflow = el.scrollHeight > el.clientHeight;
      setIsOverflow(isTextOverflow || isExpand);
    }
  }, [introduce, isExpand]);

  return (
    <div>
      <p
        ref={textRef}
        className={`font-montserrat text-lg text-gray-700 transition-all duration-500 ease-in-out ${
          isExpand ? `line-clamp-none` : `line-clamp-4`
        }`}
      >
        {introduce}
      </p>
      {isOverflow && (
        <Button
          className="rounded-2xl bg-gray-100 hover:bg-gray-300 mt-3"
          variant="ghost"
          size="lg"
          onClick={() => setIsExpand((prev) => !prev)}
        >
          {isExpand ? "Ẩn bớt" : "Hiển thị thêm"}
        </Button>
      )}
    </div>
  );
};

export default RoomIntro;
