import { useEffect, useRef, useState } from "react";
import BookingCard from "./component/BookingCard";
import HostInfo from "./component/HostInfo";
import ImageGallery from "./component/ImageGalerry";
import Map from "./component/Map";
import RoomBenefit from "./component/RoomBenefit";
import RoomHeader from "./component/RoomHeader";
import RoomInfo from "./component/RoomInfo";
import RoomIntro from "./component/RoomIntro";
import RoomReviews from "./component/RoomReviews";
import RoomTips from "./component/RoomTips";
import RoomUtilities from "./component/RoomUtilities";
import SubHeader from "./component/SubHeader";

const mockRoom = {
  id: "bordeaux-getaway-001",
  title: "Thành Công Ba Đình",
  slug: "thanh-cong-ba-dinh",
  location: {
    ward: "Thành Công",
    city: "Hà Nội",
    country: "Việt Nam",
    lat: 21.022269,
    lng: 105.812993,
  },
  rating: 5.0,
  reviewCount: 7,
  isSuperhost: true,
  host: {
    id: "001",
    name: "hải ghazal",
    avatar: "https://i.pravatar.cc/100?img=12",
    isSuperhost: true,
    isVerified: true,

    // 🔹 Thông tin mô tả
    bio: "Chủ nhà siêu cấp với nhiều năm kinh nghiệm, luôn cam kết mang đến trải nghiệm tuyệt vời nhất cho khách. Luôn thân thiện, nhiệt tình và phản hồi rất nhanh.",

    // 🔹 Các thống kê tổng hợp từ các phòng mà host quản lý
    rating: 4.92, // trung bình cộng rating từ các reviews của tất cả rooms
    reviewCount: 13, // tổng số lượt đánh giá
    monthsHosting: 6, // số tháng kinh nghiệm đón khách
    responseRate: "100%", // tỉ lệ phản hồi tin nhắn
    responseTime: "trong 1 giờ", // trung bình thời gian phản hồi
    location: "Hà Nội, Việt Nam",

    // 🔹 Thông tin mở rộng
    coHosts: [{ name: "Quyên", avatar: "https://i.pravatar.cc/100?img=15" }],

    // 🔹 Mô tả đặc điểm chủ nhà
    traits: [
      "Thân thiện và chuyên nghiệp",
      "Giỏi giao tiếp và luôn hỗ trợ khách nhanh chóng",
      "Quan tâm đến trải nghiệm và sự thoải mái của khách",
    ],
  },
  pricePerNight: 650000,
  totalPrice: null,
  checkIn: "2022/02/13",
  checkOut: "2022/02/26",
  guests: 2,
  propertyType: "Entire rental unit",
  roomDetails: {
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
  },
  description:
    "Phòng riêng tại căn hộ cho thuê tại Thành Công, Ba Đình, Hà Nội  ",
  highlights: [
    {
      title: "Entire home",
      description: "You’ll have the apartment to yourself.",
    },
    {
      title: "Enhanced Clean",
      description:
        "This Host committed to Airbnb’s 5-step enhanced cleaning process.",
    },
    {
      title: "Self check-in",
      description: "Check yourself in with the keypad.",
    },
    {
      title: "Free cancellation",
      description: "Cancel before Feb 14 for a full refund.",
    },
  ],

  introduce:
    " Chào mừng bạn đến với Bordeaux Getaway — một căn hộ ấm cúng và phong cách giữa lòng thành phố Bordeaux, Pháp. Căn hộ được thiết kế hiện đại với ánh sáng tự nhiên tràn ngập, không gian phòng khách thoải mái và nhà bếp đầy đủ tiện nghi. Đây là nơi lý tưởng để bạn nghỉ ngơi sau một ngày khám phá những con phố rợp bóng cây, thưởng thức rượu vang Bordeaux, hay tản bộ quanh quảng trường trung tâm.Bạn sẽ có toàn bộ căn hộ cho riêng mình — hoàn hảo cho các cặp đôi hoặc du khách độc hành muốn trải nghiệm cuộc sống địa phương một cách chân thực. Chủ nhà Ghazal luôn sẵn sàng hỗ trợ và đảm bảo trải nghiệm lưu trú của bạn tuyệt vời nhất, với quy trình tự nhận phòng dễ dàng, vệ sinh đạt chuẩn, và chính sách hủy miễn phí linh hoạt. Hãy tận hưởng kỳ nghỉ của bạn tại Bordeaux với không gian yên tĩnh, tiện nghi, và phong cách như chính ngôi nhà của mình.",
  amenities: [
    "Wifi",
    "Kitchen",
    "Washer",
    "Heating",
    "TV",
    "Coffee maker",
    "Smoke alarm",
  ],
  photos: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", // Living room
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80", // Kitchen
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80", // Bedroom
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80", // Bathroom
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80", // Bathroom
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80", // Bathroom
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80", // Bathroom
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80", // Bathroom
  ],
  houseRules: [
    "No smoking",
    "No pets",
    "No parties or events",
    "Check-in after 3:00 PM",
    "Check-out before 11:00 AM",
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
      content: "Ghazal was a wonderful host. The check-in was smooth and easy.",
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
        "Loved the design and host was friendly.Loved the design and host was friendly.Loved the design and host was friendly.Loved the design and host was friendly.Loved the design and host was friendly.Loved the design and host was friendly.Loved the design and host was friendly.Loved the design and host was friendly.Loved the design and host was friendly.Loved the design and host was friendly.Loved the design and host was friendly.",
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
};

const RoomDetail = () => {
  const [isExpand, setIsExpand] = useState(false);
  const galleryRef = useRef(null);
  const utilitiesRef = useRef(null);
  const locationRef = useRef(null);
  const reviewsRef = useRef(null);
  const bookingRef = useRef(null);
  const hostRef = useRef(null);

  const [showSubHeader, setShowSubHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;

      const { bottom } = galleryRef.current.getBoundingClientRect();
      setShowSubHeader(bottom < 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-full mt-10">
        {/* Title */}
        {/* ref gallery */}
        <section>
          <RoomHeader
            title={mockRoom.title}
            rating={mockRoom.rating}
            reviews={mockRoom.reviews}
            location={{
              city: mockRoom.location.city,
              country: mockRoom.location.country,
              ward: mockRoom.location.ward,
            }}
          />
        </section>

        {/* Images */}
        <section ref={galleryRef} className="scroll-m-28">
          <ImageGallery
            mainPhoto={mockRoom.photos[0]}
            subPhotos={mockRoom.photos}
          />
        </section>

        {/* information */}
        <section className="flex justify-between">
          <div className="w-7/12">
            <section className="border-b-2 py-10">
              <RoomInfo
                description={mockRoom.description}
                roomDetails={{
                  guests: mockRoom.roomDetails.guests,
                  bedrooms: mockRoom.roomDetails.bedrooms,
                  beds: mockRoom.roomDetails.beds,
                  baths: mockRoom.roomDetails.baths,
                }}
                host={{ avatar: mockRoom.host.avatar }}
                ref={hostRef}
              />
            </section>

            {/* benefit */}
            <section className="py-10 border-b-2">
              <RoomBenefit highlights={mockRoom.highlights} />
            </section>

            {/* introduce */}
            <section className="py-10 border-b-2">
              <RoomIntro
                introduce={mockRoom.introduce}
                isExpand={isExpand}
                setIsExpand={setIsExpand}
              />
            </section>

            {/* utilities  */}
            <section className="py-10 scroll-m-28" ref={utilitiesRef}>
              <RoomUtilities amenities={mockRoom.amenities} />
            </section>
          </div>

          {/*  Booking Card*/}
          <div className="w-4/12 mt-10 scroll-m-28" ref={bookingRef}>
            <BookingCard
              pricePerNight={mockRoom.pricePerNight}
              room={mockRoom}
            />
          </div>
        </section>

        {/* Rating & Comment list */}
        <section ref={reviewsRef} className="scroll-m-28 py-10 border-y-2">
          <RoomReviews
            reviews={mockRoom.reviews}
            isExpand={isExpand}
            host={mockRoom?.host}
          />
        </section>

        {/* Map */}
        <section className="py-10 border-b-2" ref={locationRef}>
          <h3 className="font-montserrat text-2xl font-semibold">
            Nơi bạn sẽ đến
          </h3>
          <span className="font-montserrat">
            {"Phường " +
              mockRoom.location.ward +
              ", " +
              mockRoom.location.city +
              ", " +
              mockRoom.location.country}
          </span>
          <Map lat={mockRoom.location.lat} lng={mockRoom.location.lng} />
        </section>

        {/* Host information */}
        <section className="py-10 border-b-2 scroll-m-16" ref={hostRef}>
          <HostInfo host={mockRoom.host} />
        </section>

        {/* Host information chưa kết hợp mockRoom */}
        <section className="py-10 border-b-2 scroll-m-16">
          <RoomTips />
        </section>
      </div>

      {showSubHeader && (
        <SubHeader
          refs={{
            galleryRef,
            utilitiesRef,
            locationRef,
            reviewsRef,
            bookingRef,
          }}
        />
      )}
    </>
  );
};

export default RoomDetail;
