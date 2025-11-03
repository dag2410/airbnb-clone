import { Button } from "@/components/ui/button";
import { FaShoppingBag, FaTrain } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
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
    ],
  };

  return (
    <div className="flex divide-x-2 divide-gray-200  ">
      <div className="w-4/12 px-20 py-10">
        <h1 className="font-montserrat text-3xl font-bold mb-5">
          Hồ sơ của tôi
        </h1>
        <div
          className="flex flex-col gap-5 mt-5 
        "
        >
          <NavLink
            to={"/profile/about"}
            className={`flex px-5 py-3 items-center gap-5 cursor-pointer rounded-2xl 
                        transition-colors duration-300 ease-in-out ${
                          isAbout ? "bg-gray-200" : "hover:bg-gray-100"
                        } `}
          >
            <img
              src={mockHost.avatar}
              alt="avatar"
              className="rounded-full w-9"
            />
            <span className="font-montserrat text-lg">Giới thiệu bản thân</span>
          </NavLink>
          <NavLink
            to={"/profile/past-trips"}
            className={`flex px-5 py-3 items-center gap-6 cursor-pointer rounded-2xl
                        transition-colors duration-300 ease-in-out ${
                          isPastTrips ? "bg-gray-200" : "hover:bg-gray-100"
                        } `}
          >
            <FaTrain className="text-3xl" />
            <span className="font-montserrat text-lg">Chuyến đi trước đây</span>
          </NavLink>
        </div>
      </div>

      <div className="w-7/12 px-20 py-10">
        {isAbout && (
          <div className="flex flex-col gap-5 divide-y-2">
            {/* Title */}
            <div className="flex gap-5">
              <h1 className="font-montserrat text-2xl font-bold mb-5">
                Giới thiệu bản thân
              </h1>
              <Button
                variant="ghost"
                className="bg-gray-50 hover:bg-gray-100 rounded-xl"
                onClick={() => navigate("/profile/about/edit")}
              >
                Chỉnh sửa
              </Button>
            </div>

            {/* avatar */}
            <div
              className="w-7/12 px-32 py-10 mt-5 flex flex-col items-center shadow-xl 
                            rounded-2xl border border-gray-100 bg-gradient-to-r from-gray-100 via-red-300 to-red-400"
            >
              <img
                src={mockHost.avatar}
                alt="avatar"
                className="rounded-full w-30"
              />
              <span className="font-montserrat text-xl font-semibold mt-2">
                {mockHost.name}
              </span>
              <span className="font-montserrat text-sm text-gray-600 min-w-32 text-center">
                {mockHost.location}
              </span>
            </div>

            {/* introduce */}
            <div className="mt-5 pt-7">
              {[
                { label: "school", title: `Nơi tôi từng theo học` },
                {
                  label: "dreamDestination",
                  title: `Nơi tôi hằng muốn đến`,
                },
                { label: "job", title: `Công việc của tôi là` },
                { label: "age", title: `Sinh năm` },
                { label: "funFact", title: `Sự thật thú vị` },
              ].map((item, index) => (
                <div key={index} className="mb-2">
                  {mockHost[item.label] && (
                    <span className="font-montserrat">
                      {item.title}:{" "}
                      <span className="font-montserrat font-semibold">
                        {mockHost[item.label]}
                      </span>
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="pt-7">
              <p className="font-montserrat font-semibold text-lg">
                {mockHost.bio}
              </p>
            </div>

            {/*hobbies  */}

            <div className="pt-7">
              <h2 className="font-montserrat text-2xl font-semibold">
                Sở thích của tôi
              </h2>
              <div className="flex justify-between mt-5">
                {mockHost.hobbies.map((item, index) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-montserrat text-lg *:">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {isPastTrips && (
          <div className="mb-96">
            <h1 className="font-montserrat text-2xl font-bold mb-5">
              Chuyến đi trước đây
            </h1>

            <div className="flex flex-col gap-10 mt-20">
              <FaShoppingBag className="text-9xl self-center" />
              <p className="font-montserrat text-lg self-center">
                Sau khi thực hiện chuyến đi đầu tiên trên Airbnb, bạn sẽ tìm
                thấy các đặt chỗ trước đây của mình tại đây.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Button
                size="lg"
                className="bg-brandPrimary-2 hover:text-black 
                hover:bg-brandPrimary-2 text-lg transition-colors duration-300"
                onClick={() => navigate("/")}
              >
                Đặt chuyến đi
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
