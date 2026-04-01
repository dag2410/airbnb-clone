import { Link } from "react-router-dom";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-7xl font-bold text-gray-900 mb-4">Oops! 404</h2>

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Ố ồ - Trang bạn đang tìm kiếm không tồn tại. Có thể đã bị xóa hoặc tạm
          thời không khả dụng.
        </p>

        <div className="mb-8">
          <p className="text-gray-600 mb-6">
            <span className="font-semibold">Lỗi code:</span> 404
          </p>
        </div>

        <Link
          to="/"
          className="inline-block bg-brandPrimary-1 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Trở về nhà nào!!!
        </Link>
      </div>
    </main>
  );
}
