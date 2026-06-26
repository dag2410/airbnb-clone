import Chatbot from "@/components/Chatbot";
import ListContainer from "@/components/ListContainer";
import Loading from "@/components/Loading";
import { useRooms } from "@/queries/room.query";

function Experiences() {
  const { data: roomList, isPending } = useRooms();

  return (
    <>
      {isPending ? (
        <div className="h-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div>
          <div className="mt-10 flex flex-col gap-10">
            {[
              {
                title: "Nơi lưu trú mới nhất của hệ thống",
                data: roomList?.latestRooms,
              },
              {
                title: "Top phòng được đánh giá cao của chúng tôi",
                data: roomList?.topRatedRooms,
              },
              {
                title: "Không gian lưu trú được yêu thích tại Hà Nội",
                data: roomList?.hanoiRooms,
              },
              {
                title: "Khám phá vẻ đẹp yên bình tại Ninh Bình",
                data: roomList?.ninhbinhRooms,
              },
              {
                title: "Phòng nghỉ giá tốt, tiết kiệm cho chuyến đi",
                data: roomList?.budgetRooms,
              },
            ].map((item, index) => (
              <ListContainer
                key={index}
                title={item.title}
                listing={item.data}
              />
            ))}
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
}
export default Experiences;
