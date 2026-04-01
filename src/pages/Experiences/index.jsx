import Chatbot from "@/components/Chatbot";
import ListContainer from "@/components/ListContainer";

function Experiences() {
  const items = [
    {
      id: 1,
      image: "https://picsum.photos/250/150?random=1",
      title: "Khách sạn Biển Xanh",
      slug: "khach-san-bien-xanh",
      location: "Nha Trang, Việt Nam",
      price: "1.500.000đ cho 3 đêm",
      rate: 4.8,
    },
    {
      id: 2,
      image: "https://picsum.photos/250/150?random=2",
      title: "Resort Cao Cấp",
      slug: "resort-cao-cap",
      location: "Đà Nẵng, Việt Nam",
      price: "2.000.000đ cho 3 đêm",
      rate: 4.6,
    },
    {
      id: 3,
      image: "https://picsum.photos/250/150?random=3",
      title: "Villa Nghỉ Dưỡng",
      slug: "villa-nghi-duong",
      location: "Phú Quốc, Việt Nam",
      price: "3.500.000đ cho 3 đêm",
      rate: 4.9,
    },
    {
      id: 4,
      image: "https://picsum.photos/250/150?random=4",
      title: "Căn hộ Hạng Sang",
      slug: "can-ho-hang-sang",
      location: "Hà Nội, Việt Nam",
      price: "1.200.000đ cho 3 đêm",
      rate: 4.5,
    },
    {
      id: 5,
      image: "https://picsum.photos/250/150?random=5",
      title: "Homestay Cổ Điển",
      slug: "homestay-co-dien",
      location: "Đà Lạt, Việt Nam",
      price: "950.000đ cho 3 đêm",
      rate: 4.7,
    },
    {
      id: 6,
      image: "https://picsum.photos/250/150?random=6",
      title: "Nhà Nghỉ Bình Dân",
      slug: "nha-nghi-binh-dan",
      location: "Huế, Việt Nam",
      price: "750.000đ cho 3 đêm",
      rate: 4.3,
    },
    {
      id: 7,
      image: "https://picsum.photos/250/150?random=7",
      title: "Căn Hộ Trung Tâm",
      slug: "can-ho-trung-tam",
      location: "TP. Hồ Chí Minh, Việt Nam",
      price: "1.800.000đ cho 3 đêm",
      rate: 4.6,
    },
    {
      id: 8,
      image: "https://picsum.photos/250/150?random=8",
      title: "Bungalow Ven Biển",
      slug: "bungalow-ven-bien",
      location: "Vũng Tàu, Việt Nam",
      price: "2.300.000đ cho 3 đêm",
      rate: 4.9,
    },
  ];
  return (
    <>
      <div className="mt-20 flex flex-col gap-10">
        <ListContainer
          title={"Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"}
          listing={items}
        />{" "}
        <ListContainer
          title={"Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"}
          listing={items}
        />{" "}
        <ListContainer
          title={"Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"}
          listing={items}
        />{" "}
        <ListContainer
          title={"Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"}
          listing={items}
        />
        <Chatbot />
      </div>
    </>
  );
}
export default Experiences;
