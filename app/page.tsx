import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider"; // Assuming ImagesSlider is correctly exported from here.

export default function Home() {
  return (
    <main className="w-full">
      <ImagesSlider
        images={[
          "/slider/images/section-bg-1.jpg",
          "/slider/images/section-bg-2.jpg",
          "/slider/images/section-bg-3.jpg",
        ]}
      >
        {/* Example children content for the slider */}
        <div className="absolute z-50 text-white text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Our Service</h1>
          <p className="text-lg">We provide excellent marketing solutions</p>
        </div>
      </ImagesSlider>
    </main>
  );
}
