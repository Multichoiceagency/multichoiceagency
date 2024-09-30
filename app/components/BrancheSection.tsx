"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the content for each section, including background images
const sections = [
  {
    id: 1,
    title: "For Agencies",
    description:
      "Payload was created specifically because software consultancies needed a better solution.",
    backgroundImage: "/images/2.jpg", // Example image URL
  },
  {
    id: 2,
    title: "For Marketing",
    description:
      "Payload’s best-in-class suite of editing tools feels like they’re from the future.",
    backgroundImage: "/images/3.jpg", // Example image URL
  },
  {
    id: 3,
    title: "For Developers",
    description:
      "Payload will unblock and accelerate your team in new ways.",
    backgroundImage: "/images/4.jpg", // Example image URL
  },
];

export default function HoverSection() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Entire Background Image changes based on hover */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage:
            hoveredSection !== null
              ? `url(${sections[hoveredSection].backgroundImage})`
              : "none",
        }}
        animate={{
          opacity: hoveredSection !== null ? 1 : 0,
        }}
      />

      {/* Large Title */}
      <div className="relative z-10 text-center mb-16 pt-48 px-4">
        <motion.h1
          className="text-[30px] font-bold text-gray-100 max-w-6xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Payload is the <span className="font-extrabold text-white">content framework</span> that
          accelerates how developers, marketers, and product owners work together.
        </motion.h1>
      </div>

      {/* Grid with 3 Sections */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3  gap-8 max-w-7xl mx-auto px-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="relative p-8 h-72 border border-gray-700 rounded-lg overflow-hidden group bg-black"
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            {/* Card Background Image appears on hover */}
            <motion.div
              className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
              style={{
                backgroundImage: `url(${section.backgroundImage})`,
              }}
              animate={{
                opacity: hoveredSection === index ? 1 : 0,
              }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: hoveredSection === index ? 1 : 0.8,
                y: hoveredSection === index ? 0 : 20,
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-sm mt-4 text-gray-300">{section.description}</p>
            </motion.div>

            {/* Section number */}
            <div className="absolute top-2 left-2 text-lg font-bold text-gray-500">
              0{section.id}
            </div>

            {/* White Stroke Animation on hover */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"
              animate={{
                scaleX: hoveredSection === index ? 1 : 0,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
