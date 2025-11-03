import { useEffect, useRef, useState } from "react";
import ListItems from "../ListItems";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ListContainer = ({ title, listing, showArrows = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  const itemsPerView = 7;
  const maxIndex = Math.max(0, listing.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  useEffect(() => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth + 20);
    }
  }, []);

  return (
    <div>
      <div className={`px-16`}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4 font-montserrat">
            {title}
          </h2>
          {showArrows && (
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-1.5 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-500 ease-in-out"
                aria-label="Previous items"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="p-1.5 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-500 ease-in-out"
                aria-label="Next items"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          )}
        </div>
        <div className="py-3">
          <div className="overflow-x-clip">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * itemWidth}px)`,
              }}
            >
              {listing.map((item) => (
                <div key={item.id} ref={itemRef}>
                  <ListItems data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
