import { Button } from "@/components/ui/button";
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

function EditProfile() {
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
      { id: 3, icon: "🍜", name: "Đời sống ẩm thực" },
      { id: 3, icon: "🍜", name: "Đời sống ẩm thực" },
      { id: 3, icon: "🍜", name: "Đời sống ẩm thực" },
      { id: 3, icon: "🍜", name: "Đời sống ẩm thực" },
      { id: 3, icon: "🍜", name: "Đời sống ẩm thực" },
      { id: 3, icon: "🍜", name: "Đời sống ẩm thực" },
    ],
  };

  const infoItems = [
    {
      icon: <FaUserGraduate />,
      label: "Nơi tôi từng theo học:",
      value: "ĐH Hà Nội",
    },
    { icon: <FaBriefcase />, label: "Công việc của tôi:", value: "Sinh viên" },
    {
      icon: <FaLightbulb />,
      label: "Thập niên tôi sinh ra:",
      value: "thập niên 00",
    },

    { icon: <FaGlobe />, label: "Nơi tôi sống:", value: "Hà Nội, Việt Nam" },
    {
      icon: <FaPlaneDeparture />,
      label: "Nơi tôi luôn muốn đến:",
      value: "Sài Gòn",
    },
    {
      icon: <FaUtensils />,
      label: "Sự thật thú vị về tôi:",
      value: "nấu ăn ngon",
    },
    { icon: <FaHeart />, label: "Thứ mà tôi luôn nghĩ đến:", value: "nấu ăn" },
    { icon: <FaLanguage />, label: "Ngôn ngữ của tôi:", value: "Tiếng Việt" },
  ];
  return (
    <div className="mt-20 flex justify-between">
      <div className="w-4/12 h-1/2 relative flex justify-center">
        <img
          src={mockHost.avatar}
          alt="avatar"
          className="rounded-full object-cover w-40 h-40"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute bottom-0 left-42 shadow-lg rounded-xl px-3 bg-white"
        >
          Chỉnh sửa
        </Button>
      </div>
      <div className="w-8/12 p-5">
        <div>
          <h2 className="font-montserrat text-3xl font-bold">Hồ sơ của tôi</h2>
          <p className="font-montserrat text-lg mt-5 text-gray-700">
            Host và khách có thể xem hồ sơ của bạn và hồ sơ này có thể hiển thị
            trên Airbnb để giúp chúng tôi tạo dựng niềm tin trong cộng đồng của
            mình.
          </p>
        </div>

        <div className="divide-y-reverse divide-y-2">
          <div className="grid grid-cols-2 grid-rows-4 mt-10 gap-10">
            {infoItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center cursor-pointer
                        rounded-lg hover:bg-gray-100 px-7 py-5 transition-all 
                        duration-300 ease-in-out border-b-2"
              >
                <div className="flex gap-5">
                  <span className="text-lg mt-1">{item.icon}</span>
                  <span className="font-montserrat text-lg">
                    {item.label}
                    <span className="font-medium"> {item.value}</span>
                  </span>
                </div>
                <FaChevronRight />
              </div>
            ))}
          </div>

          <div className="py-10">
            <div className="flex flex-col gap-5">
              <h2 className="font-montserrat text-3xl font-bold">
                Giới thiệu bản thân
              </h2>
              <p className="font-montserrat text-lg">{mockHost.bio}</p>
            </div>
            <Button
              variant="ghost"
              size="lg"
              className="bg-gray-100 hover:bg-gray-200 text-base mt-5"
            >
              Chỉnh sửa thông tin giới thiệu
            </Button>
          </div>

          <div className="py-10">
            <div className="flex flex-col gap-5">
              <h2 className="font-montserrat text-3xl font-bold">
                Sở thích của tôi
              </h2>
              <div className="grid grid-cols-2 gap-5">
                {mockHost.hobbies.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-montserrat text-lg *:">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="lg"
              className="bg-gray-100 hover:bg-gray-200 text-base mt-5"
            >
              Chỉnh sửa sở thích
            </Button>
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <Button size="lg" className="text-lg">
            Hoàn tất
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
