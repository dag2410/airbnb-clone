import { Button } from "@/components/ui/button";
import { use, useRef, useState } from "react";
import {
  FaBriefcase,
  FaChevronRight,
  FaGlobe,
  FaHeart,
  FaLanguage,
  FaLightbulb,
  FaPlaneDeparture,
  FaUserGraduate,
  FaUtensils,
} from "react-icons/fa";
import DialogEdit from "./component/DialogEdit";
import { Input } from "@/components/ui/input";
import HobbySelector from "./component/HobbySelector";
import EditableSection from "./component/EditableSection";
import { useNavigate } from "react-router-dom";

const mockHost = {
  id: "host_001",
  name: "Bông",
  avatar: "https://i.pravatar.cc/100?img=12",
  isSuperhost: true,
  isVerified: true,

  bio: "Chủ nhà siêu cấp với nhiều năm kinh nghiệm, luôn cam kết mang đến trải nghiệm tuyệt vời nhất cho khách. Luôn thân thiện, nhiệt tình và phản hồi rất nhanh.",

  rating: 4.92,
  reviewCount: 13,
  monthsHosting: 6,
  responseRate: "100%",
  responseTime: "trong 1 giờ",
  location: "Hà Nội, Việt Nam",

  coHosts: [
    {
      id: "co_001",
      name: "Quyên",
      avatar: "https://i.pravatar.cc/100?img=15",
    },
  ],

  traits: [
    "Thân thiện và chuyên nghiệp",
    "Giỏi giao tiếp và luôn hỗ trợ khách nhanh chóng",
    "Quan tâm đến trải nghiệm và sự thoải mái của khách",
  ],
  // Giới thiệu bản thân
  school: "Đại học Hà Nội",
  dreamDestination: "Sài Gòn",
  job: "Sinh viên",
  age: 21,
  funFact: "nấu ăn ngon",

  // Sở thích
  hobbies: [
    { id: 1, icon: "☕", name: "Cà phê" },
    { id: 2, icon: "🎮", name: "Thể thao trực tiếp" },
    { id: 4, icon: "🎮", name: "Thể thao trực tiếp" },
  ],

  infoItems: [
    {
      icon: <FaUserGraduate />,
      label: "Nơi tôi từng theo học",
      value: "",
      description:
        "Trường đại học, cao đẳng, hoặc cơ sở giáo dục gần đây nhất mà bạn từng theo học.",
    },
    {
      icon: <FaBriefcase />,
      label: "Công việc của tôi",
      value: "Sinh viên",
      description:
        "Vị trí công việc hiện tại hoặc công việc chính mà bạn đang làm.",
    },
    {
      icon: <FaLightbulb />,
      label: "Năm sinh",
      value: "2004",
      description:
        "Thập niên (ví dụ: 80, 90, 00) bạn sinh ra. Giúp mọi người dễ dàng tìm hiểu về bạn hơn.",
    },
    {
      icon: <FaGlobe />,
      label: "Nơi tôi sống",
      value: "Hà Nội, Việt Nam",
      description: "Thành phố và quốc gia bạn đang sinh sống hiện tại.",
    },
    {
      icon: <FaPlaneDeparture />,
      label: "Nơi tôi luôn muốn đến",
      value: null,
      description:
        "Thành phố, quốc gia, hoặc địa điểm cụ thể mà bạn luôn mơ ước được ghé thăm.",
    },
    {
      icon: <FaUtensils />,
      label: "Sự thật thú vị về tôi",
      value: "nấu ăn ngon",
      description:
        "Một điều độc đáo hoặc bất ngờ về bạn mà mọi người nên biết.",
    },
    {
      icon: <FaHeart />,
      label: "Thứ mà tôi luôn nghĩ đến",
      value: "nấu ăn",
      description:
        "Sở thích, đam mê, hoặc điều mà bạn thường dành thời gian suy nghĩ.",
    },
    {
      icon: <FaLanguage />,
      label: "Ngôn ngữ của tôi",
      value: "Tiếng Việt",
      description: "Ngôn ngữ chính mà bạn sử dụng để giao tiếp.",
    },
  ],
};

function EditProfile() {
  const navigate = useNavigate();
  const [editingItem, setEditingItem] = useState(null);
  const currentItem = mockHost.infoItems.find(
    (item) => item.label === editingItem
  );
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // them logic
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCloseDialog = () => {
    setEditingItem(null);
  };

  const isDialogOpen = currentItem !== undefined;

  return (
    <div className="mt-20 flex justify-between">
      <div className="w-4/12 h-1/2 relative flex justify-center">
        <img
          src={mockHost.avatar}
          alt="avatar"
          className="rounded-full object-cover w-40 h-40"
        />
        <Input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <Button
          variant="ghost"
          size="sm"
          onClick={triggerFileSelect}
          className="absolute bottom-0 left-42 shadow-lg rounded-xl px-3 bg-white"
        >
          Chỉnh sửa
        </Button>
      </div>
      <div className="w-8/12 p-5">
        <div>
          <h2 className="font-montserrat text-3xl font-semibold">
            Hồ sơ của tôi
          </h2>
          <p className="font-montserrat text-lg mt-5 text-gray-700">
            Host và khách có thể xem hồ sơ của bạn và hồ sơ này có thể hiển thị
            trên Airbnb để giúp chúng tôi tạo dựng niềm tin trong cộng đồng của
            mình.
          </p>
        </div>

        <div className="divide-y-reverse divide-y-2">
          <div className="grid grid-cols-2 grid-rows-4 mt-10 gap-10">
            {mockHost.infoItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center cursor-pointer
                          rounded-lg hover:bg-gray-100 px-7 py-5 transition-all 
                          duration-300 ease-in-out border-b-2"
                onClick={() => setEditingItem(item.label)}
              >
                <div className="flex gap-5">
                  <span className="text-lg mt-1">{item.icon}</span>
                  <span
                    className={`font-montserrat text-lg ${
                      item.value ? "" : "text-gray-600"
                    }`}
                  >
                    {item.value ? `${item.label}:` : item.label}
                    <span className="font-medium"> {item.value}</span>
                  </span>
                </div>
                <FaChevronRight />
              </div>
            ))}
          </div>

          <div className="py-10">
            <EditableSection label={"Giới thiệu bản thân"} bio={mockHost.bio} />
          </div>

          <div className="py-10">
            <HobbySelector
              label={"Bạn thích gì"}
              description={
                "Chọn một số sở thích mà bạn muốn hiển thị trên hồ sơ."
              }
              currentHobbies={mockHost.hobbies}
              onSave={(newHobbies) => console.log("Sở thích mới:", newHobbies)}
            />
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <Button
            size="lg"
            className="text-lg"
            onClick={() => navigate("/profile/about")}
          >
            Hoàn tất
          </Button>
        </div>

        {currentItem && (
          <DialogEdit
            open={isDialogOpen}
            openChange={handleCloseDialog}
            label={currentItem.label}
            description={currentItem.description}
            currentValue={currentItem.value}
          />
        )}
      </div>
    </div>
  );
}

export default EditProfile;
