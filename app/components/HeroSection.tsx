import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-black text-white px-8 py-16 md:py-32 lg:py-40">
      {/* Left Section: Text Content */}
      <div className="flex-1 md:w-1/2 flex flex-col justify-center items-start space-y-6">
        {/* Version badge */}
        <Link href="/beta" className="flex items-center space-x-2 text-sm font-semibold bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700">
          <span>3.0 Beta is Live</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </Link>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          The fastest way to <br />
          build tomorrow's web.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl max-w-lg">
          Power anything from websites to internal tools with the open-source backend framework & modern admin UI that you truly own.
        </p>

        {/* CTA Button */}
        <Link href="/schedule-demo" className="mt-6 inline-flex items-center space-x-2 px-6 py-3 bg-white text-black font-semibold rounded-lg border border-transparent hover:bg-gray-100 transition">
          <span>Schedule a Demo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </Link>
      </div>

      {/* Right Section: Image */}
      <div className="absolute-1 md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
        <Image
          src="/images/laptop.png" // Replace with your image
          alt="Laptop showcasing app"
          width={1900}
          height={1000}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
