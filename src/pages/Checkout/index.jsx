import { useState } from "react";
import { ChevronLeft, Star, Diamond } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockRoom = {
  id: "bordeaux-getaway-001",
  title: "Phòng lớn West Lake/Ban công/Máy giặt/Nhà bếp/Thang",
  slug: "thanh-cong-ba-dinh",
  rating: 5.0,
  reviewCount: 16,
  image:
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80",
  pricePerNight: 623336,
  discount: 74803,
  nights: 6,
  guests: 1,
  checkIn: "21 – 27 thg 2, 2026",
  totalBefore: 3740015,
  totalAfter: 3665212,
  isRare: true,
};

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("instant");
  const [selectedMethod, setSelectedMethod] = useState("momo");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [methodInfo, setMethodInfo] = useState({
    momoPhone: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const paymentMethods = [
    {
      id: "momo",
      name: "MoMo Wallet",
      desc: "Thanh toán nhanh qua ví MoMo.",
      logo: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png",
    },
    {
      id: "stripe",
      name: "Stripe (Thẻ quốc tế)",
      desc: "Thanh toán bằng thẻ Visa, MasterCard.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stripe_Logo%2C_revised_2016.svg",
    },
  ];

  const currentMethod = paymentMethods.find((m) => m.id === selectedMethod);

  const isValid = () => {
    if (selectedMethod === "momo")
      return /^\d{9,12}$/.test(methodInfo.momoPhone.trim());
    if (selectedMethod === "stripe") {
      const { cardNumber, expiry, cvc } = methodInfo;
      return (
        /^\d{13,19}$/.test(cardNumber.replace(/\s/g, "")) &&
        /^\d{2}\/\d{2}$/.test(expiry) &&
        /^\d{3,4}$/.test(cvc)
      );
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => navigate(`/rooms/${mockRoom.slug}`)}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <h1 className="text-2xl font-semibold">Xác nhận và thanh toán</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Thanh toán ngay */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Chọn thời điểm thanh toán</h2>
            <div
              onClick={() => setSelectedPayment("instant")}
              className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                selectedPayment === "instant"
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Thanh toán ngay</h3>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPayment === "instant"
                      ? "border-gray-900 bg-gray-900"
                      : "border-gray-300"
                  }`}
                >
                  {selectedPayment === "instant" && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Thanh toán ngay đ{mockRoom.totalAfter.toLocaleString("vi-VN")}
              </p>
            </div>
          </div>

          {/* PHƯƠNG THỨC THANH TOÁN */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Phương thức thanh toán</h2>

            <div
              className="border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 cursor-pointer flex justify-between items-center"
              onClick={() => setIsDialogOpen(true)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={currentMethod?.logo}
                  alt="logo"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {currentMethod?.name}
                  </p>
                  <p className="text-sm text-gray-500">{currentMethod?.desc}</p>

                  {selectedMethod === "momo" && methodInfo.momoPhone && (
                    <p className="text-xs text-gray-500 mt-1">
                      SĐT: {methodInfo.momoPhone}
                    </p>
                  )}
                  {selectedMethod === "stripe" && methodInfo.cardNumber && (
                    <p className="text-xs text-gray-500 mt-1">
                      **** **** **** {methodInfo.cardNumber.slice(-4) || "####"}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-600 font-medium">
                Thay đổi
              </span>
            </div>
          </div>

          {/* XÁC NHẬN */}
          <button
            className="w-full py-4 rounded-xl font-semibold text-lg bg-brandPrimary-1 hover:bg-rose-600 text-white transition-colors duration-300"
            disabled={!isValid()}
            onClick={() =>
              navigate(`/checkout/${mockRoom.slug}/success-booking`)
            }
          >
            Xác nhận và thanh toán
          </button>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={mockRoom.image}
                alt={mockRoom.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-gray-900 line-clamp-2">
                  {mockRoom.title}
                </h3>
                <div className="text-sm text-gray-700">
                  {mockRoom.checkIn} · {mockRoom.guests} khách
                </div>
                <div className="border-t pt-3 flex justify-between text-sm">
                  <span>
                    {mockRoom.nights} đêm ×{" "}
                    {mockRoom.pricePerNight.toLocaleString("vi-VN")}₫
                  </span>
                  <span>{mockRoom.totalBefore.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="flex justify-between text-green-600 text-sm">
                  <span>Giảm giá</span>
                  <span>-{mockRoom.discount.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Tổng</span>
                  <span>{mockRoom.totalAfter.toLocaleString("vi-VN")}₫</span>
                </div>
                {mockRoom.isRare && (
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg mt-3">
                    <Diamond className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">
                        Nơi này rất hiếm khi còn chỗ.
                      </span>{" "}
                      Nhà/phòng cho thuê của chúng tôi thường kín phòng.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DIALOG chọn phương thức (với input) */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[420px]">
          <DialogHeader>
            <DialogTitle>Chọn phương thức thanh toán</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition-all ${
                  selectedMethod === method.id
                    ? "border-gray-900 bg-gray-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <img
                  src={method.logo}
                  alt={method.name}
                  className="w-10 h-10 object-contain"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{method.name}</p>
                  <p className="text-sm text-gray-500">{method.desc}</p>
                </div>
                {selectedMethod === method.id && (
                  <div className="text-sm text-green-600 font-medium">
                    Đã chọn
                  </div>
                )}
              </div>
            ))}

            <div className="mt-4">
              {selectedMethod === "momo" && (
                <>
                  <label className="text-sm text-gray-700">
                    Số điện thoại MoMo
                  </label>
                  <Input
                    placeholder="Nhập số điện thoại"
                    value={methodInfo.momoPhone}
                    onChange={(e) =>
                      setMethodInfo((p) => ({
                        ...p,
                        momoPhone: e.target.value,
                      }))
                    }
                    className="mt-2"
                  />
                </>
              )}

              {selectedMethod === "stripe" && (
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-700">Số thẻ</label>
                    <Input
                      placeholder="4242 4242 4242 4242"
                      value={methodInfo.cardNumber}
                      onChange={(e) =>
                        setMethodInfo((p) => ({
                          ...p,
                          cardNumber: e.target.value.replace(/[^\d\s]/g, ""),
                        }))
                      }
                      className="mt-2"
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="text-sm text-gray-700">Hết hạn</label>
                      <Input
                        placeholder="MM/YY"
                        value={methodInfo.expiry}
                        onChange={(e) =>
                          setMethodInfo((p) => ({
                            ...p,
                            expiry: e.target.value,
                          }))
                        }
                        className="mt-2"
                      />
                    </div>
                    <div className="w-24">
                      <label className="text-sm text-gray-700">CVC</label>
                      <Input
                        placeholder="123"
                        value={methodInfo.cvc}
                        onChange={(e) =>
                          setMethodInfo((p) => ({
                            ...p,
                            cvc: e.target.value.replace(/\D/g, ""),
                          }))
                        }
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Hủy
              </Button>
              <Button
                disabled={!isValid()}
                onClick={() => setIsDialogOpen(false)}
              >
                Lưu
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
