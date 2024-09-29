"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Import Shadcn button
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for arrows

// Example data for portfolio images and text
const portfolioItems = [
  {
    title: "Molinos de Viento",
    description: "Branding / Development / Hosting / UX/UI / WordPress",
    image: "/images/portfolio1.png", // replace with actual image paths
  },
  {
    title: "Rijks Digital Marketing",
    description: "Digital Marketing / Strategy / UX/UI",
    image: "/images/portfolio2.png", // replace with actual image paths
  },
  {
    title: "Another Project",
    description: "Web Design / Development / SEO",
    image: "/images/portfolio3.png", // replace with actual image paths
  },
];

const PortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next item
  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous item
  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#3A3A3A] py-12">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Text and Image */}
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
          {/* Text Section */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl font-bold">{portfolioItems[currentIndex].title}</h2>
            <p className="text-lg mt-2">{portfolioItems[currentIndex].description}</p>
          </div>

          {/* Image Section */}
          <div className="mt-6 md:mt-0">
            <Image
              src={portfolioItems[currentIndex].image}
              alt={portfolioItems[currentIndex].title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevItem}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextItem}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* "Bekijk alle cases" Link */}
        <div className="mt-4">
          <Button variant="link" className="text-white underline">
            Bekijk alle cases →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
