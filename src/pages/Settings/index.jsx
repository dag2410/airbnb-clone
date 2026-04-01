import { Button } from "@/components/ui/button";
import { Banknote, Globe, Lock, Shield, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginSettings from "./component/LoginSettings";
import PersonalInfoSettings from "./component/PersonalInfoSettings";
import PrivacySettings from "./component/PrivacySettings";
import PreferencesSettings from "./component/PreferencesSettings";
import PaymentSettings from "./component/PaymentSettings";

const mockHost = {
  id: "host_001",
  firstName: "Dương",
  lastName: "Hải Đăng",
  username: null,
  avatar: "https://i.pravatar.cc/100?img=12",
  isSuperhost: true,
  isVerified: true,
  password: "12345678",
  language: "vi",
  money_type: "Việt Nam Đồng",
  email: "dagger241004abc@gmail.com",
  bio: "Chủ nhà siêu cấp với nhiều năm kinh nghiệm, luôn cam kết mang đến trải nghiệm tuyệt vời nhất cho khách. Luôn thân thiện, nhiệt tình và phản hồi rất nhanh.",
  phone_number: "012345644",
  google_connect: true,
  rating: 4.92,
  reviewCount: 13,
  monthsHosting: 6,
  responseRate: "100%",
  responseTime: "trong 1 giờ",
  location: "Hà Nội, Việt Nam",
  last_login: Date.now(),
  update_password_at: Date.now(),

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

function Settings() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname;

  return (
    <div className="flex justify-between divide-x min-h-screen">
      <div className="w-3/12 p-10 flex flex-col justify-start">
        <h2 className="font-montserrat text-3xl font-semibold">
          Cài đặt tài khoản
        </h2>
        <div className="flex flex-col mt-10">
          {[
            {
              icon: <User />,
              title: "Thông tin cá nhân",
              pathname: "/settings/personal-info",
            },
            {
              icon: <Shield />,
              title: "Đăng nhập và bảo mật",
              pathname: "/settings/login-and-security",
            },
            {
              icon: <Lock />,
              title: "Quyền riêng tư",
              pathname: "/settings/privacy-and-sharing",
            },
            {
              icon: <Banknote />,
              title: "Thanh toán",
              pathname: "/settings/payments",
            },
            {
              icon: <Globe />,
              title: "Ngôn ngữ và tiền tệ",
              pathname: "/settings/preferences",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-7 py-5 rounded-xl
               cursor-pointer transition-all duration-300  ${
                 pathname === item.pathname ? "bg-gray-200" : ""
               }`}
              onClick={() => navigate(item.pathname)}
            >
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div className="w-9/12 px-32 py-10">
        {pathname === "/settings/personal-info" && (
          <PersonalInfoSettings user={mockHost} />
        )}

        {pathname === "/settings/login-and-security" && (
          <LoginSettings user={mockHost} />
        )}
        {pathname === "/settings/privacy-and-sharing" && <PrivacySettings />}

        {pathname === "/settings/payments" && <PaymentSettings />}

        {pathname === "/settings/preferences" && (
          <PreferencesSettings user={mockHost} />
        )}
      </div>
    </div>
  );
}

export default Settings;
