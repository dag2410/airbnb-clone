import * as yup from "yup";

export const editSchema = yup
  .object({
    firstName: yup.string().trim().required("Vui lòng nhập họ của bạn"),
    lastName: yup.string().trim().required("Vui lòng nhập tên của bạn"),
    userName: yup.string().trim().required("Vui lòng nhập biệt danh của bạn"),
    email: yup
      .string()
      .trim()
      .email("Vui lòng nhập đúng định dạng email")
      .required("Vui lòng nhập email của bạn"),
    phoneNumber: yup
      .number()
      .typeError("Vui lòng nhập số điện thoại hợp lệ")
      .nullable(),
    location: yup.string().trim().nullable(),
    password: yup
      .string()
      .trim()
      .required("Trường này là bắt buộc")
      .min(8, "Mật khẩu cần ít nhất 8 ký tự"),
    passwordConfirmation: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Mật khẩu nhập lại không khớp")
      .required("Trường này là bắt buộc"),
  })
  .required();
