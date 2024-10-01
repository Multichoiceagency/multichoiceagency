"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

export function OverOns() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-4 dark:text-white">
            Waarom een maatwerk website?
          </h2>
          <p className="text-lg text-gray-700 mb-6 dark:text-white">
            Een goed ontworpen website vormt de kern van jouw online succes. Het is dé plek waar jouw klanten voor het eerst in contact komen met je bedrijf. Laat het ontwikkelen van zo’n krachtige website maar aan ons over.
          </p>

          <ul className="space-y-4 text-sm text-gray-700 dark:text-white">
            <li>✔️ Professioneel, maatwerk design dat naadloos aansluit op de huisstijl.</li>
            <li>✔️ Super eenvoudig in beheer via Next.js, React of Headless Wordpress.</li>
            <li>✔️ Proactieve communicatie gericht op jouw succes.</li>
            <li>✔️ Focus op jouw doelen: Meer leads, digitale transformatie, en meer.</li>
          </ul>

          {/* Call to Action Button */}
          <Button
          variant={"default"} 
          className="mt-6">Meer informatie over maatwerk</Button>
        </div>
        
        {/* Right Column - Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/maatwerk-website.png" // Replace with your actual image path
            alt="Maatwerk Website"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
