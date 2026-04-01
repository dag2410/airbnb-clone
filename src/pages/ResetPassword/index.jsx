import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "@/schema/authSchema";
import { useDispatch } from "react-redux";
// import { postResetPassword } from "@/features/auth/authAsync"; // Giả sử tên action của bạn
import { toast } from "sonner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword, verifyResetToken } from "@/features/auth/authAsync";
import Loading from "@/components/Loading";
import { PasswordField } from "@/components/PasswordField";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [isTokenValid, setIsTokenValid] = useState(null);

  useEffect(() => {
    if (!token) {
      setIsTokenValid(false);
      return;
    }

    const validateToken = async () => {
      try {
        await Promise.all([
          dispatch(verifyResetToken(token)).unwrap(),
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);

        setIsTokenValid(true);
      } catch (error) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsTokenValid(false);
      }
    };

    validateToken();
  }, [dispatch, token]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const result = await dispatch(
        resetPassword({ token, ...values }),
      ).unwrap();
      if (result) {
        toast.success(
          "Đặt lại mật khẩu thành công! Chúng tôi sẽ chuyển sang trang chủ sau 5 giây.",
        );
        setTimeout(() => {
          navigate("/");
          toast.info("Bạn có thể đăng nhập ngay lúc này!");
        }, 5000);
      }
    } catch (error) {
      setError("root", {
        type: "server",
        message:
          error?.message || "Không thể đặt lại mật khẩu. Vui lòng thử lại.",
      });
    }
  };

  if (isTokenValid === null) {
    return <Loading />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50 p-4 overflow-hidden">
      {isTokenValid ? (
        <Card className="w-full max-w-[400px] shadow-xl border-none">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Đặt lại mật khẩu
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Vui lòng nhập mật khẩu mới để bảo mật tài khoản của bạn.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
              noValidate
            >
              {errors.root && (
                <div className="bg-red-50 text-red-600 text-center text-sm p-3 rounded-md border border-red-100 italic">
                  {errors.root.message}
                </div>
              )}

              <PasswordField
                label="Mật khẩu mới"
                name="password"
                register={register}
                error={errors.password}
                showPassword={showPassword}
                toggleShowPassword={() => setShowPassword(!showPassword)}
                isSubmitting={isSubmitting}
              />

              <PasswordField
                label="Xác nhận mật khẩu"
                name="passwordConfirmation"
                register={register}
                error={errors.passwordConfirmation}
                showPassword={showPassword}
                isSubmitting={isSubmitting}
                isToggle={false}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-brandPrimary-1 hover:bg-red-600 text-white font-semibold p-6 transition-all duration-300"
              >
                {isSubmitting ? "Đang xử lý..." : "Cập nhật mật khẩu"}
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full max-w-[400px] shadow-xl border-none">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold text-red-500">
              Liên kết đã hết hạn
            </CardTitle>

            <CardDescription className="text-black text-base font-sans">
              Liên kết đặt lại mật khẩu này đã hết thời gian sử dụng hoặc không
              còn hợp lệ. Vui lòng yêu cầu gửi lại email để tiếp tục đặt lại mật
              khẩu.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <Button
              onClick={() => navigate("/")}
              className="bg-brandPrimary-1 hover:bg-red-600 text-white font-semibold p-6 text-base"
            >
              Hãy quay lại trang chủ và thử lại!
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ResetPassword;
