import Header from "@/layouts/DefaultLayout/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function DefaultLayout() {
  return (
    <div>
      <Header type="main" />
      <main className="max-w-screen-2xl mx-auto px-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
