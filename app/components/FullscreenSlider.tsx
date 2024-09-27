"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { PrimaryButton, SecondaryButton} from "./Button";



interface SlideContent {
  videoUrl: string; // Only video URLs
  subtitle: string;
  title: string;
  description: string;
  button1: string;
  button2: string;
  button1Href: string;
  button2Href: string;
}

const slides: SlideContent[] = [
  {
    videoUrl: "/videos/video-1.mp4",
    subtitle: "Webdesign Studio",
    title: "Wij Ontwerpen Websites die Converteren",
    description: "Van concept tot lancering, wij creëren prachtige, gebruiksvriendelijke websites die uw bedrijf laten groeien.",
    button1: "Bekijk Ons Portfolio",
    button2: "Gratis Consult",
    button1Href: "/portfolio",
    button2Href: "/consult",
  },
  {
    videoUrl: "/videos/video-8.mp4",
    subtitle: "UI/UX Design",
    title: "Gebruikerservaring als Prioriteit",
    description: "Onze designs zijn niet alleen mooi, maar ook intuïtief. Wij zorgen voor een naadloze gebruikerservaring die bezoekers omzet in klanten.",
    button1: "Onze Design Aanpak",
    button2: "Start Uw Project",
    button1Href: "/design-proces",
    button2Href: "/contact",
  },
  {
    videoUrl: "/videos/video-3.mp4",
    subtitle: "Full-Service Webdesign",
    title: "Van Concept tot Online Succes",
    description: "Webdesign, development, branding en strategie. Wij bieden een complete oplossing voor uw online aanwezigheid.",
    button1: "Onze Diensten",
    button2: "Vraag een Offerte",
    button1Href: "/diensten",
    button2Href: "/offerte",
  },
];

export default function FullscreenSlider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
      loop={true}
      className="w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            {/* Video Background */}
            <video
              src={slide.videoUrl}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 text-white">
              <div className="max-w-4xl w-full mx-auto">
                <h5 className="text-lg mb-2 uppercase tracking-wider">{slide.subtitle}</h5>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 font-medium">{slide.description}</p>
              </div>
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <PrimaryButton variant="primary" href={slide.button1Href}>
                  {slide.button1}
                </PrimaryButton>
                <SecondaryButton href={slide.button2Href}>
                  {slide.button2}
                </SecondaryButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
