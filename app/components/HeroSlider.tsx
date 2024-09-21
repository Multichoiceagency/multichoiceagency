"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnimatedText from "@/components/common/AnimatedText";

// Define the interface for the section data
gImage: string;
  title: string;
  subtitle: string;
}

// The sections data with image, title, subtitle, and status
const sections: Section[] = [
  {
    bgImage: "/assets/images/full-width-images/section-bg-5.jpg",
    title: "Resonance Creative Studio",
    subtitle: "Maximize your online impact with our solutions.",
  },
  {
    bgImage: "/assets/images/full-width-images/section-bg-3.jpg",
    title: "Resonance Creative Studio",
    subtitle: "Grow your business with a new online experience.",
  },
  {
    bgImage: "/assets/images/full-width-images/section-bg-6.jpg",
    title: "Resonance Creative Studio",
    subtitle: "Redefine your strategy for long-term success.",
  },
];

// Hero4 component with Tailwind CSS and TypeScript
export default function Hero4() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        navigation={{
          prevEl: ".snbp10",
          nextEl: ".snbn10",
        }}
        pagination={{
          el: ".sp10",
          clickable: true,
          bulletActiveClass: "active",
          renderBullet: (index, className) => {
            return `<div class="owl-page ${className}"><span></span></div>`;
          },
        }}
        className="swiper-container w-full h-screen overflow-hidden"
      >
        {sections.map((elm, index) => (
          <SwiperSlide key={index}>
            <section
              className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${elm.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="container mx-auto z-10 relative text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInUp">
                  {elm.title}
                </h2>
                <h1 className="text-2xl md:text-5xl font-semibold mb-8">
                  <AnimatedText text={elm.subtitle} />
                </h1>
                <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
                  <a
                    href="#about"
                    className="btn btn-lg bg-transparent border border-white text-white rounded-full px-6 py-3 transition hover:bg-white hover:text-black"
                  >
                    Learn More
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-lg bg-white text-black rounded-full px-6 py-3 transition hover:bg-transparent hover:border hover:border-white hover:text-white"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <a href="#about" className="scroll-down-4 text-white text-xl">
                  <i className="mi-arrow-down"></i>
                </a>
              </div>
              <div className="absolute top-0 right-0 p-4 hidden md:block">
                <span className="text-sm text-white">{elm.status}</span>
              </div>
            </section>
          </SwiperSlide>
        ))}

        <div className="owl-controls clickable">
          <div className="owl-pagination sp10"></div>
          <div className="owl-buttons">
            <div className="owl-prev snbp10" role="button" tabIndex={0}>
              <span className="visually-hidden">Previous Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="27px"
                height="57px"
                viewBox="0 0 27 57"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z" />
              </svg>
            </div>
            <div className="owl-next snbn10" role="button" tabIndex={0}>
              <span className="visually-hidden">Next Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="27px"
                height="57px"
                viewBox="0 0 27 57"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z" />
              </svg>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}
