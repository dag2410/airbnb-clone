const config = {
  login: {
    title: "Đăng nhập hoặc đăng ký",
    fields: [
      { name: "email", type: "email", placeholder: "Nhập email của bạn" },
      { name: "password", type: "password", placeholder: "Nhập mật khẩu" },
    ],
    submitLabel: "Đăng nhập",
    links: [
      {
        target: "forgot",
        textBefore: "Bạn quên mật khẩu?",
        textLink: "Quên mât khẩu",
      },
      {
        target: "register",
        textBefore: "Chưa có tài khoản?",
        textLink: "Đăng ký",
      },
    ],
    extraButtons: [
      {
        label: "Đăng nhập với Google",
        action: "google",
      },
    ],
  },

  register: {
    title: "Tạo tài khoản",
    fields: [
      { name: "firstName", type: "text", placeholder: "Họ" },
      { name: "lastName", type: "text", placeholder: "Tên" },
      { name: "email", type: "email", placeholder: "Email" },
      { name: "password", type: "password", placeholder: "Mật khẩu" },
      {
        name: "passwordConfirmation",
        type: "password",
        placeholder: "Nhập lại mật khẩu",
      },
    ],
    submitLabel: "Đăng ký",
    links: [
      {
        target: "login",
        textBefore: "Đã có tài khoản?",
        textLink: "Đăng nhập",
      },
    ],
  },

  forgot: {
    title: "Đặt lại mật khẩu",
    fields: [
      { name: "email", type: "email", placeholder: "Nhập email của bạn" },
    ],
    submitLabel: "Gửi liên kết đặt lại",
    links: [
      {
        target: "login",
        textBefore: "Quay lại",
        textLink: "Đăng nhập",
      },
    ],
  },
};

export default config;
