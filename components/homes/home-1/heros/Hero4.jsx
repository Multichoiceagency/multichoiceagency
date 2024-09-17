"use client";
import React, { useRef, useState } from 'react';
import AnimatedText from "@/components/common/AnimatedText";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sections = [
  {
    videoSrc: "/assets/videos/video-5.mp4",
    title: "Professionele Webdesign",
    subtitle: "Wij creëren websites die uw bedrijf laten groeien.",
    description: "Onze op maat gemaakte websites combineren aantrekkelijk design met gebruiksvriendelijkheid om uw online aanwezigheid te versterken en conversies te verhogen."
  },
  {
    bgImage: "/assets/images/full-width-images/section-bg-3.jpg",
    title: "Responsive Webontwikkeling",
    subtitle: "Perfecte weergave op alle apparaten.",
    description: "Van smartphones tot desktops, onze responsive websites passen zich naadloos aan elk schermformaat aan voor een optimale gebruikerservaring."
  },
  {
    bgImage: "/assets/images/full-width-images/section-bg-6.jpg",
    title: "E-commerce Oplossingen",
    subtitle: "Boost uw online verkoop met onze webshops.",
    description: "Wij ontwikkelen krachtige e-commerce platforms die uw producten presenteren, verkopen vereenvoudigen en uw omzet verhogen."
  },
];

export default function Hero4() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMuteUnmute = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation={{
          prevEl: ".snbp10",
          nextEl: ".snbn10",
        }}
        pagination={{
          el: ".sp10",
          clickable: true,
          bulletActiveClass: "active",
          renderBullet: (index, className) => {
            return `<div class="owl-page ${className}">
                   <span></span>
                  </div>`;
          },
        }}
        watchSlidesProgress
        resizeObserver
        className="home-section fullwidth-slider-fade bg-dark light-content owl-carousel owl-theme overflow-hidden position-static"
        style={{
          opacity: 1,
          display: "block",
        }}
      >
        {sections.map((elm, index) => (
          <SwiperSlide className="owl-item" key={index}>
            <section
              className="home-section bg-scroll light-content"
              style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh',
              }}
            >
              {index === 0 ? (
                <>
                  <div className="bg-video-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                    <video
                      ref={videoRef}
                      className="bg-video"
                      preload="auto"
                      autoPlay
                      muted={isMuted}
                      loop
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      <source src={elm.videoSrc} type="video/mp4" />
                    </video>
                    <div className="bg-video-overlay bg-dark-alpha-60" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}></div>
                  </div>
                  <a
                    onClick={toggleMuteUnmute}
                    href="#"
                    role="button"
                    className="bg-video-button-muted"
                    style={{ position: 'absolute', bottom: '20px', right: '70px', zIndex: 4 }}
                  >
                    <i className={`mi-volume-${isMuted ? "up" : "off"}`} />
                    <span className="visually-hidden">Volume On</span>
                  </a>
                  <a
                    onClick={togglePlayPause}
                    href="#"
                    role="button"
                    className="bg-video-button-pause"
                    style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 4 }}
                  >
                    <i className={`mi-${isPlaying ? "pause" : "play"}`} />
                    <span className="visually-hidden">Pause</span>
                  </a>
                </>
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${elm.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1,
                  }}
                />
              )}
              <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120" style={{ position: 'relative', zIndex: 3 }}>
                <div className="home-content" style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <div className="row">
                    <div className="col-md-10 offset-md-1 mb-20 mb-sm-0">
                      <h2 className="hs-title-11 mb-30 mb-xs-10 owl-animate-fadeInUp">
                        {elm.title}
                      </h2>
                      <h1 className="hs-title-12 mb-30 mb-sm-20">
                        <span
                          className="owl-animate-chars"
                          data-splitting="chars"
                        >
                          <AnimatedText text={elm.subtitle} />
                        </span>
                      </h1>
                      <p className="hs-desc-1 mb-50 mb-sm-30 owl-animate-fadeInUp owl-delay-200">
                        {elm.description}
                      </p>
                      <div className="local-scroll owl-animate-fadeInUp owl-delay-700 wch-unset">
                        <a
                          href="#about"
                          className="btn btn-mod btn-border-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                          data-btn-animate="y"
                          tabIndex="-1"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">Onze diensten</span>
                            <span
                              className="btn-animate-y-2"
                              aria-hidden="true"
                            >
                              Ontdek meer
                            </span>
                          </span>
                        </a>
                        <a
                          href="#contact"
                          className="btn btn-mod btn-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                          data-btn-animate="y"
                          tabIndex="-1"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">
                              Gratis adviesgesprek
                            </span>
                            <span
                              className="btn-animate-y-2"
                              aria-hidden="true"
                            >
                              Plan direct een adviesgesprek
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
        <div className="owl-controls clickable">
          <div className="owl-pagination sp10"></div>
          <div className="owl-buttons">
            <div className="owl-prev snbp10" role="button" tabIndex={0}>
              <span className="visually-hidden">Vorige Slide</span>
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
              <span className="visually-hidden">Volgende Slide</span>
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