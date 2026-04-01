import * as yup from "yup";

export const registerSchema = yup
  .object({
    firstName: yup
      .string()
      .trim()
      .required("Vui lòng nhập họ của bạn")
      .min(2, "Họ cần ít nhất 2 ký tự")
      .max(50, "Họ không được vượt quá 50 ký tự"),
    lastName: yup
      .string()
      .trim()
      .required("Vui lòng nhập tên của bạn")
      .min(2, "Tên cần ít nhất 2 ký tự")
      .max(50, "Tên không được vượt quá 50 ký tự"),
    email: yup
      .string()
      .trim()
      .email("Vui lòng nhập đúng định dạng email")
      .required("Vui lòng nhập email của bạn"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(8, "Mật khẩu cần ít nhất 8 ký tự")
      .matches(/[a-z]/, "Mật khẩu phải chứa ít nhất 1 chữ thường")
      .matches(/[A-Z]/, "Mật khẩu phải chứa ít nhất 1 chữ hoa")
      .matches(/\d/, "Mật khẩu phải chứa ít nhất 1 số")
      .matches(/[@$!%*?&#]/, "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt")
      .matches(/^\S*$/, "Mật khẩu không được chứa khoảng trắng"),
    passwordConfirmation: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Mật khẩu nhập lại không khớp")
      .required("Trường này là bắt buộc"),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .email("Vui lòng nhập đúng định dạng email")
      .required("Vui lòng nhập email của bạn")
      .trim(),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(8, "Mật khẩu cần ít nhất 8 ký tự")
      .matches(/[a-z]/, "Mật khẩu phải chứa ít nhất 1 chữ thường")
      .matches(/[A-Z]/, "Mật khẩu phải chứa ít nhất 1 chữ hoa")
      .matches(/\d/, "Mật khẩu phải chứa ít nhất 1 số")
      .matches(/[@$!%*?&#]/, "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt")
      .matches(/^\S*$/, "Mật khẩu không được chứa khoảng trắng"),
  })
  .required();

export const forgotPasswordSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .email("Vui lòng nhập đúng định dạng email")
      .required("Vui lòng nhập email của bạn")
      .trim(),
  })
  .required();

export const resetPasswordSchema = yup
  .object({
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu mới")
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .matches(/[a-z]/, "Mật khẩu phải chứa ít nhất 1 chữ thường")
      .matches(/[A-Z]/, "Mật khẩu phải chứa ít nhất 1 chữ hoa")
      .matches(/[0-9]/, "Mật khẩu phải chứa ít nhất 1 số")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt",
      ),

    passwordConfirmation: yup
      .string()
      .required("Vui lòng xác nhận mật khẩu")
      .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp"),
  })
  .required();
