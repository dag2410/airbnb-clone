// import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = ({ title, subTitle, heroImage }) => {
  return (
    <section className="relative w-full h-screen mt-28 overflow-hidden ">
      <div className="mx-auto">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="w-screen flex flex-col items-center gap-1 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1
            className="text-5xl font-bold text-transparent bg-clip-text 
                      bg-gradient-to-r from-blue-300 via-red-300 to-pink-200 
                      text-center leading-snug"
          >
            {title}
          </h1>

          <p className="font-sans text-5xl text-white text-center font-semibold leading-snug">
            {subTitle}
          </p>
        </div>

        {/* Button */}
        <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 flex gap-4">
          {[
            {
              title: "Khám phá ngay",
              link: "/",
              onClick: () =>
                document
                  .getElementById("listing-section")
                  .scrollIntoView({ behavior: "smooth" }),
            },
            { title: "Trở thành host", link: "/host/create-listing" },
          ].map((item, index) => (
            <Button
              key={index}
              asChild
              variant="ghost"
              className="px-12 py-8 bg-gray-200 font-sans text-xl text-black transition-all duration-300 hover:bg-rose-500 hover:scale-105 will-change-transform"
              size="lg"
              onClick={item.onClick}
            >
              <Link to={item.link}>{item.title}</Link>
            </Button>
          ))}
        </div>

        <div className="absolute top-3/4 left-1/2 right-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-500">
            <span className="w-20 text-center text-sm mb-2 select-none">
              Khám phá ngay bên dưới
            </span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
