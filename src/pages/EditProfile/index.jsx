import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
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
  FaCamera,
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
  school: "Đại học Hà Nội",
  dreamDestination: "Sài Gòn",
  job: "Sinh viên",
  age: 21,
  funFact: "nấu ăn ngon",
  hobbies: [
    { id: 1, icon: "☕", name: "Cà phê" },
    { id: 2, icon: "🎮", name: "Thể thao trực tiếp" },
    { id: 4, icon: "🎮", name: "Thể thao trực tiếp" },
  ],
  infoItems: [
    {
      id: "edu",
      icon: <FaUserGraduate />,
      label: "Nơi tôi từng theo học",
      value: "",
      description:
        "Trường đại học, cao đẳng, hoặc cơ sở giáo dục gần đây nhất mà bạn từng theo học.",
    },
    {
      id: "job",
      icon: <FaBriefcase />,
      label: "Công việc của tôi",
      value: "Sinh viên",
      description:
        "Vị trí công việc hiện tại hoặc công việc chính mà bạn đang làm.",
    },
    {
      id: "birth",
      icon: <FaLightbulb />,
      label: "Năm sinh",
      value: "2004",
      description:
        "Thập niên (ví dụ: 80, 90, 00) bạn sinh ra. Giúp mọi người dễ dàng tìm hiểu về bạn hơn.",
    },
    {
      id: "live",
      icon: <FaGlobe />,
      label: "Nơi tôi sống",
      value: "Hà Nội, Việt Nam",
      description: "Thành phố và quốc gia bạn đang sinh sống hiện tại.",
    },
    {
      id: "trip",
      icon: <FaPlaneDeparture />,
      label: "Nơi tôi luôn muốn đến",
      value: null,
      description:
        "Thành phố, quốc gia, hoặc địa điểm cụ thể mà bạn luôn mơ ước được ghé thăm.",
    },
    {
      id: "fact",
      icon: <FaUtensils />,
      label: "Sự thật thú vị về tôi",
      value: "nấu ăn ngon",
      description:
        "Một điều độc đáo hoặc bất ngờ về bạn mà mọi người nên biết.",
    },
    {
      id: "passion",
      icon: <FaHeart />,
      label: "Thứ mà tôi luôn nghĩ đến",
      value: "nấu ăn",
      description:
        "Sở thích, đam mê, hoặc điều mà bạn thường dành thời gian suy nghĩ.",
    },
    {
      id: "lang",
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
    (item) => item.label === editingItem,
  );
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Logic xử lý file
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
    <div className="max-w-7xl mx-auto flex gap-16 px-6 py-12">
      {/* Left Column: Avatar Management */}
      <div className="w-4/12 flex flex-col items-center">
        <div className="sticky top-28 flex flex-col items-center bg-gray-50/60 border border-gray-100 rounded-3xl p-8 w-full shadow-sm">
          <div
            className="relative group cursor-pointer"
            onClick={triggerFileSelect}
          >
            <img
              src={mockHost.avatar}
              alt="avatar"
              className="rounded-full object-cover w-44 h-44 border-4 border-white shadow-md group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
              <FaCamera className="text-white text-2xl" />
            </div>
          </div>

          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <Button
            variant="outline"
            size="sm"
            onClick={triggerFileSelect}
            className="mt-6 shadow-sm rounded-xl px-5 bg-white border-gray-200 text-gray-700 font-medium hover:bg-gray-50"
          >
            Thay đổi ảnh đại diện
          </Button>
        </div>
      </div>

      <div className="w-8/12 flex flex-col gap-10">
        <div className="border-b border-gray-100 pb-6">
          <h2 className="font-montserrat text-2xl font-bold text-gray-900 tracking-tight">
            Hồ sơ của tôi
          </h2>
          <p className="font-montserrat text-lg mt-3 text-gray-600 leading-relaxed">
            Host và khách có thể xem hồ sơ của bạn và hồ sơ này có thể hiển thị
            trên Airbnb để giúp chúng tôi tạo dựng niềm tin trong cộng đồng của
            mình.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
            Thông tin cơ bản
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {mockHost.infoItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center cursor-pointer rounded-2xl bg-white border border-gray-200/80 p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 ease-in-out"
                onClick={() => setEditingItem(item.label)}
              >
                <div className="flex gap-4 items-center overflow-hidden pr-2">
                  <span className="text-gray-400 text-xl shrink-0">
                    {item.icon}
                  </span>
                  <span
                    className={`font-montserrat text-base truncate ${
                      item.value ? "text-gray-500" : "text-gray-400 font-medium"
                    }`}
                  >
                    {item.value ? (
                      <>
                        <span className="text-gray-700 font-normal">
                          {item.label}:
                        </span>{" "}
                        <span className="font-semibold text-gray-900">
                          {item.value}
                        </span>
                      </>
                    ) : (
                      <span>Thêm {item.label.toLowerCase()}</span>
                    )}
                  </span>
                </div>
                <FaChevronRight className="text-gray-300 text-xs shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="border border-gray-200 bg-white p-6 rounded-2xl shadow-sm">
          <EditableSection label={"Giới thiệu bản thân"} bio={mockHost.bio} />
        </div>

        <div className="border border-gray-200 bg-white p-6 rounded-2xl shadow-sm">
          <HobbySelector
            label={"Bạn thích gì"}
            description={
              "Chọn một số sở thích mà bạn muốn hiển thị trên hồ sơ."
            }
            currentHobbies={mockHost.hobbies}
            onSave={(newHobbies) => console.log("Sở thích mới:", newHobbies)}
          />
        </div>

        <div className="mt-4 pt-6 border-t border-gray-100 flex justify-end">
          <Button
            size="lg"
            className="text-base px-8 py-6 rounded-xl shadow-md font-semibold transition-all"
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
