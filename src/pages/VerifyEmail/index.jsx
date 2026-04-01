import { verifyEmail } from "@/features/auth/authAsync";
import { CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Đang xác thực tài khoản...");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setMessage("Thiếu mã xác thực.");
      return;
    }

    dispatch(verifyEmail(token))
      .unwrap()
      .then((res) => {
        setMessage("done");
        setTimeout(() => navigate("/"), 4000);
      })
      .catch((err) => {
        setMessage(
          err.message ||
            "Xác thực thất bại. Token không hợp lệ hoặc đã hết hạn.",
        );
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          {message?.includes("done") ? (
            <CheckCircle className="text-green-500 w-12 h-12" />
          ) : (
            <XCircle className="text-red-500 w-12 h-12" />
          )}
        </div>

        {/* Success message */}
        {message.includes("done") ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Xác thực Email thành công!
            </h2>
            <p className="mt-2 text-black">
              Chúng tôi sẽ chuyển bạn sang trang chủ và để bạn tiếp tục đăng
              nhập.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Xác thực email thất bại!
            </h2>
            <p className="mt-2 text-black">
              Vui lòng kiểm tra lại email hoặc thử lại.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
