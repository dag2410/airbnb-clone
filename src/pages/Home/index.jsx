import Chatbot from "@/components/Chatbot";
import ListContainer from "@/components/ListContainer";
import Loading from "@/components/Loading";
import roomService from "@/service/roomService";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

function Home() {
  const location = useLocation();

  // Hiển thị thông báo khi đăng nhập bằng Google thành công dựa vào state được truyền từ oAuthSuccess
  useEffect(() => {
    if (location.state?.from === "oauth-success") {
      toast.success("Đăng nhập bằng Google thành công!");
    }
  }, [location.state]);

  const { data: roomList, isLoading } = useQuery({
    queryFn: roomService.getAllRooms,
    queryKey: ["rooms"],
  });

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div>
          <div className="mt-10 flex flex-col gap-10">
            <ListContainer
              title={"Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"}
              listing={roomList?.rows}
            />{" "}
            <ListContainer
              title={"Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"}
              listing={roomList?.rows}
            />{" "}
            <ListContainer
              title={"Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"}
              listing={roomList?.rows}
            />{" "}
            <ListContainer
              title={"Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"}
              listing={roomList?.rows}
            />
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
}
export default Home;
