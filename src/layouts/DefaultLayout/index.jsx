import Header from "@/layouts/DefaultLayout/components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import HeroImage from "@/assets/images/hero-image.webp";
import HeroImageExperiences from "@/assets/images/hero-image-experiences.webp";
import HeroImageService from "@/assets/images/hero-image-service.webp";
import ContactSection from "./components/ContactSection";

function DefaultLayout() {
  const location = useLocation();
  const pages = [
    {
      page: "home",
      link: "/",
      title: "Trải nghiệm không gian bạn xứng đáng có.",
      subTitle: "Đặt phòng dễ dàng, an toàn và linh hoạt.",
      heroImage: HeroImage,
    },
    {
      page: "experiences",
      link: "/experiences",
      title: "Căn hộ riêng tư cho hành trình của bạn.",
      subTitle: "Không gian thoải mái như chính ngôi nhà của bạn.",
      heroImage: HeroImageExperiences,
    },
    {
      page: "services",
      link: "/services",
      title: "Phòng khách sạn tiện nghi và đẳng cấp.",
      subTitle: "Dịch vụ chuyên nghiệp, sẵn sàng phục vụ bạn.",
      heroImage: HeroImageService,
    },
  ];

  const currentPage =
    pages.find((item) => item.link === location.pathname) || pages[0];

  return (
    <div className="h-screen">
      <Header type="main" />
      {currentPage && (
        <HeroSection
          heroImage={currentPage.heroImage}
          title={currentPage.title}
          subTitle={currentPage.subTitle}
        />
      )}
      <main
        className="max-w-screen-2xl mx-auto px-5 scroll-mt-36"
        id="listing-section"
      >
        <Outlet />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
