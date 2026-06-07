import { Button } from "@/components/ui/button";
import AboutPastTrips from "@/pages/AboutMe/components/AboutPastTrips";
import AboutProfile from "@/pages/AboutMe/components/AboutProfile";
import { FaShoppingBag, FaTrain } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function AboutMe() {
  const location = useLocation();
  const isAbout = location.pathname === "/profile/about";
  const isPastTrips = location.pathname === "/profile/past-trips";

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
      { id: 3, icon: "🍜", name: "Đời sống ẩm thực" },
    ],
  };

  return (
    <div className="flex divide-x-2 divide-gray-200 max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
      {/* Left Sidebar */}
      <div className="w-4/12 px-10 py-12">
        <h1 className="font-montserrat text-3xl font-bold mb-8 tracking-tight text-gray-900">
          Hồ sơ của tôi
        </h1>
        <div className="flex flex-col gap-3">
          <NavLink
            to={"/profile/about"}
            className={`flex px-5 py-3.5 items-center gap-4 cursor-pointer rounded-2xl 
                        transition-all duration-200 ease-in-out ${
                          isAbout
                            ? "bg-brandPrimary-1 text-white shadow-md font-medium"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        } `}
          >
            <img
              src={mockHost.avatar}
              alt="avatar"
              className="rounded-full w-8 h-8 object-cover border border-gray-300"
            />
            <span className="font-montserrat text-lg font-medium">
              Giới thiệu bản thân
            </span>
          </NavLink>
          <NavLink
            to={"/profile/past-trips"}
            className={`flex px-5 py-3.5 items-center gap-4 cursor-pointer rounded-2xl
                        transition-all duration-200 ease-in-out ${
                          isPastTrips
                            ? "bg-brandPrimary-1 text-white shadow-md font-medium"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        } `}
          >
            <FaTrain className="text-xl shrink-0" />
            <span className="font-montserrat text-lg font-medium">
              Chuyến đi trước đây
            </span>
          </NavLink>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-8/12 px-16 py-12">
        {isAbout && <AboutProfile />}

        {isPastTrips && <AboutPastTrips />}
      </div>
    </div>
  );
}

export default AboutMe;
