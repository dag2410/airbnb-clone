import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-sm text-gray-800 px-20 py-16 ">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto mx-auto space-y-8">
        {/* Footer Links */}
        <div className="flex gap-8 border-b border-gray-300 pb-8">
          {/* Column 1 */}
          <div className="grow">
            <h3 className="font-semibold text-base mb-3">Hỗ trợ</h3>
            <ul className="space-y-2">
              {[
                "Trung tâm trợ giúp",
                "AirCover",
                "Chống phân biệt đối xử",
                "Hỗ trợ người khuyết tật",
                "Các tùy chọn hủy",
                "Báo cáo lo ngại của khu dân cư",
              ].map((text, idx) => (
                <li key={idx}>
                  <NavLink
                    to="/"
                    className="hover:underline transition-colors duration-300"
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="grow">
            <h3 className="font-semibold text-base mb-3">Đón tiếp khách</h3>
            <ul className="space-y-2">
              {[
                "Cho thuê nhà trên Airbnb",
                "AirCover cho Chủ nhà",
                "Tài nguyên về đón tiếp khách",
                "Diễn đàn cộng đồng",
                "Đón tiếp khách có trách nhiệm",
                "Khóa học miễn phí về công việc Đón tiếp khách",
              ].map((text, idx) => (
                <li key={idx}>
                  <NavLink
                    to="/"
                    className="hover:underline transition-colors duration-300"
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="grow">
            <h3 className="font-semibold text-base mb-3">Airbnb</h3>
            <ul className="space-y-2">
              {[
                "Trang tin tức",
                "Tính năng mới",
                "Cơ hội nghề nghiệp",
                "Nhà đầu tư",
                "Chỗ ở khẩn cấp Airbnb.org",
              ].map((text, idx) => (
                <li key={idx}>
                  <NavLink
                    to="/"
                    className="hover:underline transition-colors duration-300"
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-gray-700">
          <div className="flex gap-5">
            <span className="text-center sm:text-right text-gray-600 text-sm">
              ©HaiDangCom
            </span>
            <a href="#" className="hover:underline">
              Quyền riêng tư
            </a>
            <a href="#" className="hover:underline">
              Điều khoản
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>Tiếng Việt (VN)</span>
            <span>₫ VND</span>
            <address className="flex items-center gap-3 text-lg">
              <a href="#" className="hover:underline transition">
                <i className="fa-brands fa-facebook hover:text-brandPrimary-1 transition-all duration-500 ease-in-out"></i>
              </a>
              <a href="#" className="hover:underline transition">
                <i className="fa-brands fa-twitter hover:text-brandPrimary-1 transition-all duration-500 ease-in-out"></i>
              </a>
              <a href="#" className="hover:underline transition">
                <i className="fa-brands fa-instagram hover:text-brandPrimary-1 transition-all duration-500 ease-in-out"></i>
              </a>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
