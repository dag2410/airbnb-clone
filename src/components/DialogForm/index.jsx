import Google from "@/assets/images/google.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  postLogIn,
  postRegister,
  sendForgotPasswordEmail,
} from "@/features/auth/authAsync";
import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
} from "@/schema/authSchema";
import { oauthLogin } from "@/service/authService";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const DialogForm = ({
  open,
  onOpenChange,
  title,
  description,
  fields,
  submitLabel,
  links,
  extraButtons,
  step,
  setStep,
  onSuccess,
  isProtected = false,
}) => {
  const dispatch = useDispatch();
  const schemaMap = {
    login: loginSchema,
    register: registerSchema,
    forgot: forgotPasswordSchema,
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schemaMap[step]),
  });

  useEffect(() => {
    reset();
    if (!open) {
      clearErrors();
    }
  }, [step, open]);

  const handler = {
    register: async (values) => {
      const result = await dispatch(postRegister(values)).unwrap();
      if (result) {
        clearErrors();
        toast.info("Đăng kí thành công. Vui lòng xác thực email và đăng nhập.");
      }
    },

    login: async (values) => {
      const result = await dispatch(postLogIn(values)).unwrap();
      const token = result?.accessToken;
      if (token && result) {
        localStorage.setItem("token", token);
        toast.success("Đăng nhập thành công!");
      }
    },

    forgot: async (values) => {
      const result = await dispatch(sendForgotPasswordEmail(values)).unwrap();
      if (result) {
        toast.info("Chúng tôi đã gửi email đặt lại mật khẩu!");
      }
    },

    google: async () => {
      try {
        await oauthLogin();
      } catch (error) {
        toast.error("Bạn đã đăng nhập thất bại!");
      }
    },
  };

  const handleSubmitForm = async (values) => {
    try {
      if (step !== "register") {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      await handler[step]?.(values);
      onSuccess?.();
    } catch (error) {
      const message = error?.message || "Có lỗi xảy ra";

      setError("root", {
        type: "server",
        message,
      });

      toast.error(message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} forceMount={true}>
      {isProtected && <DialogOverlay />}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            {isProtected ? "Vui lòng đăng nhập để tiếp tục" : title}
          </DialogTitle>
          {description && (
            <p className="text-center text-sm text-gray-600">{description}</p>
          )}
        </DialogHeader>

        <form
          className="mt-5 flex flex-col gap-4 p-5"
          onSubmit={handleSubmit(handleSubmitForm)}
          noValidate
        >
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col gap-1">
              <Input
                disabled={isSubmitting}
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name)}
                className="p-6"
              />
              {errors[field.name] && (
                <span className="text-red-500 text-xs italic">
                  {errors[field.name].message}
                </span>
              )}
            </div>
          ))}

          <Button
            className="bg-brandPrimary-1 hover:bg-red-800 transition-all duration-300 ease-in-out select-none"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Đang xử lí, vui lòng chờ trong giây lát."
              : submitLabel}
          </Button>

          {/* Extra buttons (Google...) */}
          {extraButtons?.length > 0 && (
            <div className="flex flex-col gap-3">
              {extraButtons.map((btn, i) => (
                <Button
                  key={i}
                  type="button"
                  onClick={handler[btn.action]}
                  variant="outline"
                >
                  <img src={Google} className="w-6" />
                  {btn.label}
                </Button>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="mt-2 flex flex-col gap-1">
            {links?.map((link) => (
              <p key={link.target} className="text-center text-sm">
                {link.textBefore}{" "}
                <button
                  type="button"
                  className="text-brandPrimary-1 underline"
                  onClick={() => setStep(link.target)}
                >
                  {link.textLink}
                </button>
              </p>
            ))}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
