import ListContainer from "@/components/ListContainer";
import ListItems from "@/components/ListItems";
import { Button } from "@/components/ui/button";
import { list } from "postcss";
import { FaBan, FaFlag, FaLock, FaRegStar, FaStar } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import UserInfo from "./component/UserInfo";
import UserReviews from "./component/UserReviews";
import UserHobbies from "./component/UserHobbies";
import UserListings from "./component/UserListings";
import UserReport from "./component/UserReport";

function UserProfile() {
  const navigate = useNavigate();

  const mockHost = {
    id: "host_001",
    name: "Bông",
    avatar: "https://i.pravatar.cc/100?img=12",
    isSuperhost: true,
    isVerified: true,

    bio: "Meet Cris and Jenny, your passionate hosts at Duhaus! With over two years of crafting unforgettable stays in our homestay in Dalat, our love for hospitality now drives us to Saigon. Enjoy insider tips, authentic local cuisine, and our warm, cozy ambiance. Connect and join us on FB & IG: duhaus.saigon as we explore Vietnam’s vibrant culture and community together. Welcome to Duhaus - Nhà Du - your home away from home!",

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
    biggestPassion: "nấu ăn",

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

    reviews: [
      {
        id: 1,
        author: "Emily",
        date: "2022-03-01",
        rating: 5,
        location: "Hanoi",
        avatar: "https://i.pravatar.cc/100?img=1",
        content:
          "Beautiful apartment in a perfect location. Very clean and cozy!",
      },
      {
        id: 2,
        author: "Lucas",
        date: "2022-03-10",
        location: "Hanoi",
        rating: 5,
        avatar: "https://i.pravatar.cc/100?img=2",
        content:
          "Ghazal was a wonderful mockHost. The check-in was smooth and easy.",
      },
      {
        id: 3,
        author: "Sarah",
        date: "2022-03-12",
        location: "Hanoi",
        rating: 1.3,
        avatar: "https://i.pravatar.cc/100?img=3",
        content:
          "The place was okay, but not as describedThe place was okay, but not as describedThe place was okay, but not as describedThe place was okay, but not as describedThe place was okay, but not as described.",
      },
      {
        id: 4,
        author: "Tom",
        date: "2022-03-14",
        location: "Hanoi",
        rating: 3.5,
        avatar: "https://i.pravatar.cc/100?img=4",
        content:
          "Nice location, but could be cleaner. Nice location, but could be cleaner.Nice location, but could be cleaner.Nice location, but could be cleaner.Nice location, but could be cleaner.Nice location, but could be cleaner.Nice location, but could be cleaner.Nice location, but could be cleaner.Nice location, but could be cleaner.Nice location, but could be cleaner.Nice location, but could be cleaner.",
      },
      {
        id: 5,
        author: "Sophia",
        date: "2022-03-18",
        location: "Hanoi",
        rating: 4.2,
        avatar: "https://i.pravatar.cc/100?img=5",
        content:
          "Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.Loved the design and mockHost was friendly.",
      },
      {
        id: 6,
        author: "Jack",
        date: "2022-03-20",
        location: "Hanoi",
        rating: 3,
        avatar: "https://i.pravatar.cc/100?img=6",
        content: "Good overall but could improve amenities.",
      },
    ],
    listings: [
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
        image: "https://picsum.photos/400/300?random=6",
        title: "Phòng tại Thành phố Hồ Chí Minh",
        location: "Phòng hiện đại 5 phút đến Quận 1",
        price: "₫2.364.889 cho 5 đêm",
        rate: "4,92",
        lat: 10.7769,
        lng: 106.7009,
      },
      {
        id: 6,
        image: "https://picsum.photos/400/300?random=6",
        title: "Phòng tại Thành phố Hồ Chí Minh",
        location: "Phòng hiện đại 5 phút đến Quận 1",
        price: "₫2.364.889 cho 5 đêm",
        rate: "4,92",
        lat: 10.7769,
        lng: 106.7009,
      },
      {
        id: 6,
        image: "https://picsum.photos/400/300?random=6",
        title: "Phòng tại Thành phố Hồ Chí Minh",
        location: "Phòng hiện đại 5 phút đến Quận 1",
        price: "₫2.364.889 cho 5 đêm",
        rate: "4,92",
        lat: 10.7769,
        lng: 106.7009,
      },
      {
        id: 6,
        image: "https://picsum.photos/400/300?random=6",
        title: "Phòng tại Thành phố Hồ Chí Minh",
        location: "Phòng hiện đại 5 phút đến Quận 1",
        price: "₫2.364.889 cho 5 đêm",
        rate: "4,92",
        lat: 10.7769,
        lng: 106.7009,
      },
    ],
  };

  return (
    <div className="divide-y-2 pb-10">
      {/* info */}
      <div className="py-10">
        <UserInfo host={mockHost} />
      </div>

      {/* Comment  */}
      <div className="py-10">
        <UserReviews host={mockHost} reviews={mockHost.reviews} />
      </div>

      {/* Question topic */}

      <div className="py-10">
        <UserHobbies host={mockHost} />
      </div>

      {/* Listing  */}
      <div className="py-10">
        <UserListings host={mockHost} />
      </div>

      {/* report */}
      <div className="py-10 flex flex-col gap-4">
        <UserReport host={mockHost} />
      </div>
    </div>
  );
}

export default UserProfile;
