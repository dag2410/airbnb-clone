import Footer from "@/layouts/DefaultLayout/components/Footer";
import Header from "@/layouts/DefaultLayout/components/Header";
import { Outlet } from "react-router-dom";

function SecondaryLayout() {
  return (
    <div className="h-screen">
      <Header type="sub" />
      <main className="max-w-screen-2xl mx-auto px-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SecondaryLayout;
