import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SuccessCreate() {
  const navigate = useNavigate();
  const [countdown, setCountDown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }

    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
            <CheckCircle
              size={80}
              className="text-brandPrimary-1 relative z-10"
            />
          </div>
        </div>

        {/* Main Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Phòng đã được tạo thành công!
          </h1>
          <p className="text-lg text-muted-foreground">
            Cảm ơn bạn đã đăng ký phòng trên nền tảng của chúng tôi. Phòng của
            bạn hiện đang chờ phê duyệt.
          </p>
        </div>

        {/* Action Button */}
        <Button
          className="w-full bg-brandPrimary-1 hover:bg-brandPrimary-1 py-5 text-lg"
          size="lg"
        >
          Sẽ tự động quay về trang chủ sau {countdown}s
        </Button>
      </div>
    </div>
  );
}

export default SuccessCreate;
