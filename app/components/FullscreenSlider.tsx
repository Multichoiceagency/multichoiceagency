"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

interface SlideContent {
  videoUrl: string;
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
    videoUrl: "/videos/video-7.mp4",
    subtitle: "Full-Service Webdesign",
    title: "Van Concept tot Online Succes",
    description: "Webdesign, development, branding en strategie. Wij bieden een complete oplossing voor uw online aanwezigheid.",
    button1: "Onze Diensten",
    button2: "Vraag een Offerte",
    button1Href: "/diensten",
    button2Href: "/offerte",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function FullscreenSlider() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
        .swiper-button-next {
          right: 20px !important;
        }
        .swiper-button-prev {
          left: 20px !important;
        }
      `}</style>
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
              <video
                src={slide.videoUrl}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 text-white">
                <div className="max-w-5xl w-full mx-auto">
                  <motion.h5 
                    className="text-lg mb-2 uppercase tracking-wider"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {slide.subtitle}
                  </motion.h5>
                  <motion.h1 
                    className="md:text-6xl font-bold mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="max-w-1xl justify-center md:text-sm mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div 
                    className="flex justify-center space-x-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Button
                      variant="default"
                    >
                      <a href={slide.button1Href}>{slide.button1}</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="text-white bg-transparent"
                    >
                      <a href={slide.button2Href}>{slide.button2}</a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ThemeProvider>
  );
}