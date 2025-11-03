import { useState } from "react";

const RoomTips = () => {
  const [showHouseRules, setShowHouseRules] = useState(false);
  const [showSafety, setShowSafety] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-10">Những điều cần biết</h2>

      <div className="grid grid-cols-3 gap-10">
        {/* Nội quy nhà */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Nội quy nhà</h3>
          <ul className="text-gray-700 leading-relaxed">
            <li>Nhận phòng sau 15:00</li>
            <li>Trả phòng trước 11:00</li>
            <li>Tối đa 2 khách</li>
          </ul>

          {!showHouseRules ? (
            <button
              className="text-gray-800 font-semibold mt-3 underline"
              onClick={() => setShowHouseRules(true)}
            >
              Hiển thị thêm
            </button>
          ) : (
            <p className="text-gray-600 mt-2">
              Không hút thuốc, không vật nuôi, không tiệc tùng.
            </p>
          )}
        </div>

        {/* An toàn và chỗ ở */}
        <div className=" py-6 grow">
          <h3 className="text-lg font-semibold mb-2">An toàn và chỗ ở</h3>
          <ul className="text-gray-700 leading-relaxed">
            <li>Chưa có thông tin về máy phát hiện khí CO</li>
            <li>Chưa có thông tin về máy báo khói</li>
            <li>Chỗ ở có camera an ninh ngoài nhà</li>
          </ul>

          {!showSafety ? (
            <button
              className="text-gray-800 font-semibold mt-3 underline"
              onClick={() => setShowSafety(true)}
            >
              Hiển thị thêm
            </button>
          ) : (
            <p className="text-gray-600 mt-2">
              Chủ nhà đảm bảo an toàn cho khách lưu trú. Camera chỉ đặt ở khu
              vực công cộng ngoài nhà.
            </p>
          )}
        </div>

        {/* Chính sách hủy */}
        <div className="py-6 grow">
          <h3 className="text-lg font-semibold mb-2">Chính sách hủy</h3>
          <p className="text-gray-700 leading-relaxed">
            Bạn được hủy miễn phí trước <strong>22 thg 1</strong>. Bạn được hoàn
            tiền một phần nếu hủy trước khi nhận phòng/bắt đầu trải nghiệm vào{" "}
            <strong>23 thg 1</strong>.
          </p>

          {!showCancel ? (
            <button
              className="text-gray-800 font-semibold mt-3 underline"
              onClick={() => setShowCancel(true)}
            >
              Hiển thị thêm
            </button>
          ) : (
            <p className="text-gray-600 mt-2">
              Xem toàn bộ chính sách của Chủ nhà này để biết chi tiết về hoàn
              tiền và điều khoản hủy.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RoomTips;
