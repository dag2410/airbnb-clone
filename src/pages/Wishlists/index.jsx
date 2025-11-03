import GridContainer from "@/components/GridContainer/GridContainer";
import { Button } from "@/components/ui/button";
import usePagination from "@/hooks/usePagination";
import React from "react";
const mockFavList = [
  {
    id: 1,
    image: "https://picsum.photos/400/300?random=1",
    title: "Căn hộ tại Thành phố Hồ Chí Minh",
    location: "Wabi Sabi + Bồn tắm xi măng + Netflix...",
    price: "₫2.364.889 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 2,
    image: "https://picsum.photos/400/300?random=2",
    title: "Nơi ở tại Quận 4",
    location: "am.Saigon | mới | hiện đại | giữa phố ấm...",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 3,
    image: "https://picsum.photos/400/300?random=3",
    title: "Khách sạn tại Thủ Đức",
    location: "AN TÙNG Retreat - Garder View 2...",
    price: "₫4.400.000 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 4,
    image: "https://picsum.photos/400/300?random=4",
    title: "Phòng tại Phú Nhuận",
    location: "Phòng hiện đại 5 phút đến Quận 1",
    price: "₫2.364.889 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 5,
    image: "https://picsum.photos/400/300?random=5",
    title: "Nơi ở tại Thành phố Hồ Chí Minh",
    location: "Bamboo Hideout Studio 3 trung tâm",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 6,
    image: "https://picsum.photos/400/300?random=1",
    title: "Căn hộ tại Thành phố Hồ Chí Minh",
    location: "Wabi Sabi + Bồn tắm xi măng + Netflix...",
    price: "₫2.364.889 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 7,
    image: "https://picsum.photos/400/300?random=2",
    title: "Nơi ở tại Quận 4",
    location: "am.Saigon | mới | hiện đại | giữa phố ấm...",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 8,
    image: "https://picsum.photos/400/300?random=3",
    title: "Khách sạn tại Thủ Đức",
    location: "AN TÙNG Retreat - Garder View 2...",
    price: "₫4.400.000 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 9,
    image: "https://picsum.photos/400/300?random=4",
    title: "Phòng tại Phú Nhuận",
    location: "Phòng hiện đại 5 phút đến Quận 1",
    price: "₫2.364.889 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 10,
    image: "https://picsum.photos/400/300?random=5",
    title: "Nơi ở tại Thành phố Hồ Chí Minh",
    location: "Bamboo Hideout Studio 3 trung tâm",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 11,
    image: "https://picsum.photos/400/300?random=1",
    title: "Căn hộ tại Thành phố Hồ Chí Minh",
    location: "Wabi Sabi + Bồn tắm xi măng + Netflix...",
    price: "₫2.364.889 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 12,
    image: "https://picsum.photos/400/300?random=2",
    title: "Nơi ở tại Quận 4",
    location: "am.Saigon | mới | hiện đại | giữa phố ấm...",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 13,
    image: "https://picsum.photos/400/300?random=3",
    title: "Khách sạn tại Thủ Đức",
    location: "AN TÙNG Retreat - Garder View 2...",
    price: "₫4.400.000 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 14,
    image: "https://picsum.photos/400/300?random=4",
    title: "Phòng tại Phú Nhuận",
    location: "Phòng hiện đại 5 phút đến Quận 1",
    price: "₫2.364.889 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 15,
    image: "https://picsum.photos/400/300?random=5",
    title: "Nơi ở tại Thành phố Hồ Chí Minh",
    location: "Bamboo Hideout Studio 3 trung tâm",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 16,
    image: "https://picsum.photos/400/300?random=1",
    title: "Căn hộ tại Thành phố Hồ Chí Minh",
    location: "Wabi Sabi + Bồn tắm xi măng + Netflix...",
    price: "₫2.364.889 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 17,
    image: "https://picsum.photos/400/300?random=2",
    title: "Nơi ở tại Quận 4",
    location: "am.Saigon | mới | hiện đại | giữa phố ấm...",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 18,
    image: "https://picsum.photos/400/300?random=3",
    title: "Khách sạn tại Thủ Đức",
    location: "AN TÙNG Retreat - Garder View 2...",
    price: "₫4.400.000 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 19,
    image: "https://picsum.photos/400/300?random=4",
    title: "Phòng tại Phú Nhuận",
    location: "Phòng hiện đại 5 phút đến Quận 1",
    price: "₫2.364.889 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 20,
    image: "https://picsum.photos/400/300?random=5",
    title: "Nơi ở tại Thành phố Hồ Chí Minh",
    location: "Bamboo Hideout Studio 3 trung tâm",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 21,
    image: "https://picsum.photos/400/300?random=1",
    title: "Căn hộ tại Thành phố Hồ Chí Minh",
    location: "Wabi Sabi + Bồn tắm xi măng + Netflix...",
    price: "₫2.364.889 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 22,
    image: "https://picsum.photos/400/300?random=2",
    title: "Nơi ở tại Quận 4",
    location: "am.Saigon | mới | hiện đại | giữa phố ấm...",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 23,
    image: "https://picsum.photos/400/300?random=3",
    title: "Khách sạn tại Thủ Đức",
    location: "AN TÙNG Retreat - Garder View 2...",
    price: "₫4.400.000 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 24,
    image: "https://picsum.photos/400/300?random=4",
    title: "Phòng tại Phú Nhuận",
    location: "Phòng hiện đại 5 phút đến Quận 1",
    price: "₫2.364.889 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 25,
    image: "https://picsum.photos/400/300?random=5",
    title: "Nơi ở tại Thành phố Hồ Chí Minh",
    location: "Bamboo Hideout Studio 3 trung tâm",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 26,
    image: "https://picsum.photos/400/300?random=1",
    title: "Căn hộ tại Thành phố Hồ Chí Minh",
    location: "Wabi Sabi + Bồn tắm xi măng + Netflix...",
    price: "₫2.364.889 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 27,
    image: "https://picsum.photos/400/300?random=2",
    title: "Nơi ở tại Quận 4",
    location: "am.Saigon | mới | hiện đại | giữa phố ấm...",
    price: "₫2.967.060 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 28,
    image: "https://picsum.photos/400/300?random=3",
    title: "Khách sạn tại Thủ Đức",
    location: "AN TÙNG Retreat - Garder View 2...",
    price: "₫4.400.000 cho 5 đêm",
    rate: "Mới",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 29,
    image: "https://picsum.photos/400/300?random=4",
    title: "Phòng tại Phú Nhuận",
    location: "Phòng hiện đại 5 phút đến Quận 1",
    price: "₫2.364.889 cho 5 đêm",
    rate: "5,0",
    lat: 10.7769,
    lng: 106.7009,
  },
];

function Wishlists() {
  const {
    currentPage,
    setCurrentPage,
    totalPage,
    currentItems,
    nextPage,
    prevPage,
  } = usePagination(mockFavList, 15);

  return (
    <div className="mt-30 p-10">
      <div className="flex justify-between">
        <h2 className="font-montserrat text-3xl font-bold ">
          Danh sách yêu thích
        </h2>
        <Button
          variant="ghost"
          className="font-montserrat font-semibold bg-gray-50 hover:bg-gray-200"
        >
          Xóa danh sách yêu thích
        </Button>
      </div>
      <div className="mt-10 ">
        <GridContainer listing={currentItems} favorite={true} />
      </div>
      {totalPage > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Trước
          </button>

          {Array.from({ length: totalPage }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-red-500 text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            disabled={currentPage === totalPage}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Sau
          </button>
        </div>
      )}
    </div>
  );
}

export default Wishlists;
