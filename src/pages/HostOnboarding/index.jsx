import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Upload, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicInfo from "./component/BasicInfo";
import LocationInfo from "./component/LocationInfo";
import RoomInfo from "./component/RoomInfo";
import AmenitiesRules from "./component/AmenitiesRules";
import PhotosInfo from "./component/PhotosInfo";
import PricePublish from "./component/PricePublish";
import SummaryInfo from "./component/SummaryInfo";

const HostOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    introduce: "",
    propertyType: "house",
    location: {
      address_line: "",
      ward: "",
      district: "",
      city: "",
      country: "Việt Nam",
    },
    roomDetails: {
      guests: 1,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
    pricePerNight: "",
    amenities: [],
    houseRules: [],
    highlights: [],
    photos: [],
    publishDate: "",
  });
  const navigate = useNavigate();

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
      .replace(/-+/g, "-");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setFormData((prev) => ({
        ...prev,
        title: value,
        slug: generateSlug(value),
      }));
    } else if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: isNaN(Number(value)) ? value : Number(value),
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: isNaN(Number(value)) ? value : Number(value),
      }));
    }
  };

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  // Xử lý khi hoàn tất tất cả các bước
  const handleSubmit = () => {
    console.log("Room data submitted:", formData);
    navigate("/success-create");
  };

  // Hàm kiểm tra xem bước hiện tại đã hoàn thành chưa
  const isStepComplete = () => {
    switch (step) {
      case 1:
        return formData.title;
      // && formData.description && formData.introduce;
      case 2:
        return (
          // formData.location.ward &&
          // formData.location.district &&
          // formData.location.city &&
          formData.location.address_line
        );
      case 3:
        return (
          formData.roomDetails.guests > 0 &&
          formData.highlights.some((h) => h.trim())
        );
      case 4:
        return formData.amenities.length > 0 && formData.houseRules.length > 0;
      case 5:
        return formData.photos.length > 0;
      case 6:
        return formData.pricePerNight && formData.publishDate;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Tạo Phòng Cho Thuê
          </h1>
          <p className="text-muted-foreground">
            Bước {step} / 6 - {step === 1 && "Thông tin cơ bản"}
            {step === 2 && "Địa điểm"}
            {step === 3 && "Chi tiết phòng & Điểm nổi bật"}
            {step === 4 && "Tiện nghi & Quy tắc"}
            {step === 5 && "Hình ảnh"}
            {step === 6 && "Giá & Công bố"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all ${
                s <= step ? "bg-brandPrimary-1" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Form Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Thông tin cơ bản về phòng"}
              {step === 2 && "Địa điểm & Tọa độ"}
              {step === 3 && "Chi tiết phòng & Điểm nổi bật"}
              {step === 4 && "Tiện nghi & Quy tắc"}
              {step === 5 && "Hình ảnh phòng"}
              {step === 6 && "Giá & Công bố"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Cung cấp tiêu đề, mô tả, và giới thiệu chi tiết"}
              {step === 2 && "Nhập địa điểm cụ thể của phòng"}
              {step === 3 &&
                "Xác định số phòng ngủ, giường và các điểm nổi bật"}
              {step === 4 && "Chọn tiện nghi & quy tắc nhà"}
              {step === 5 && "Tải lên hình ảnh phòng"}
              {step === 6 && "Đặt giá mỗi đêm và ngày công bố"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <BasicInfo
                title={formData.title}
                description={formData.description}
                introduce={formData.introduce}
                propertyType={formData.propertyType}
                handleInputChange={handleInputChange}
              />
            )}

            {/* Step 2: Location & Coordinates */}
            {step === 2 && (
              <LocationInfo
                setFormData={setFormData}
                location={formData.location}
              />
            )}

            {/* Step 3: Room Details & Highlights */}
            {step === 3 && (
              <RoomInfo
                handleInputChange={handleInputChange}
                roomDetails={formData.roomDetails}
                highlights={formData.highlights}
                setFormData={setFormData}
              />
            )}

            {/* Step 4: Amenities & Rules */}
            {step === 4 && (
              <AmenitiesRules
                amenities={formData.amenities}
                houseRules={formData.houseRules}
                setFormData={setFormData}
              />
            )}

            {/* Step 5: Photos */}
            {step === 5 && (
              <PhotosInfo photos={formData.photos} setFormData={setFormData} />
            )}

            {/* Step 6: Price & Publish Date */}
            {step === 6 && (
              <PricePublish
                pricePerNight={formData.pricePerNight}
                handleInputChange={handleInputChange}
                publishDate={formData.publishDate}
              />
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-8">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={step === 1}
            className="gap-2 bg-transparent"
          >
            <ChevronLeft size={20} />
            Quay lại
          </Button>
          <Button
            onClick={step === 6 ? handleSubmit : handleNext}
            disabled={!isStepComplete()}
            className="gap-2 flex-1 bg-brandPrimary-1 hover:bg-rose-600"
          >
            {step === 6 ? "Hoàn tất" : "Tiếp theo"}
            {step < 6 && <ChevronRight size={20} />}
          </Button>
        </div>

        {/* Summary */}
        <SummaryInfo
          location={formData.location}
          title={formData.title}
          slug={formData.slug}
          propertyType={formData.propertyType}
          roomDetails={formData.roomDetails}
          pricePerNight={formData.pricePerNight}
          amenities={formData.amenities}
          photos={formData.photos}
        />
      </div>
    </div>
  );
};

export default HostOnboarding;
