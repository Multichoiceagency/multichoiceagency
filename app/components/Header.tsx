"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MegaMenu from "./MegaMenu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme(); // Get the current theme from next-themes

  // Scroll handler to set background and logo change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu items on click
  const toggleMenu = (menu: string) => {
    setActiveMenu(prevMenu => (prevMenu === menu ? null : menu));
  };

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  // Close all menus
  const closeAllMenus = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  // Background color based on scroll status
  const getHeaderBgColor = () => {
    if (isScrolled) {
      return "bg-background";
    }
    return "bg-transparent";
  };

  // Text color based on theme and scroll status
  const getTextColor = () => {
    if (theme === 'dark') {
      return "text-white"; // White text in dark mode
    }
    return isScrolled ? "text-foreground" : "text-white"; // Change text color based on scroll
  };

  // Dynamic logo handling based on theme and scroll
  const getLogoSrc = () => {
    if (theme === 'dark') {
      return "/images/logo-wit.png"; // Always use white logo in dark mode
    }
    // Use the scroll state to switch logo in light mode
    return isScrolled ? "/images/logo-multichoiceagency.png" : "/images/logo-wit.png";
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBgColor()} py-4 md:py-6`}
    >
      <div className="w-full mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <Link href="/">
            <Image
              src={getLogoSrc()} // Get dynamic logo based on theme and scroll
              alt="Multichoice Agency Logo"
              width={150}
              height={42}
              className="h-auto w-auto"
            />
          </Link>

          {/* Main navigation */}
          <nav className="hidden md:flex space-x-6 font-semibold">
            {["Functies", "Oplossingen", "Middelen", "Enterprise", "Prijsberekening"].map(item => (
              <button
                key={item}
                onClick={() => toggleMenu(item)}
                className={`flex items-center ${getTextColor()} hover:text-primary ${activeMenu === item ? 'text-primary' : ''}`}
              >
                {item} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            ))}
          </nav>
        </div>

        {/* Right-side buttons and mobile menu toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop links */}
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className={`${getTextColor()} hover:text-primary`}>
              Contact opnemen met verkoop
            </Link>
            <Link href="#" className={`${getTextColor()} hover:text-primary`}>
              Inloggen
            </Link>
          </nav>

          {/* Desktop button */}
          <Button variant="default" className="hidden md:inline-block">
            Aan de slag
          </Button>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden text-2xl focus:outline-none ${getTextColor()}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      <MegaMenu activeMenu={activeMenu} onClose={closeAllMenus} />

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            {/* Mobile menu logo */}
            <Image
              src={getLogoSrc()} // Dynamic logo in mobile menu
              alt="Multichoice Agency Logo"
              width={150}
              height={42}
              className="h-auto w-auto"
            />
            <button onClick={closeAllMenus} className="text-2xl focus:outline-none text-foreground" aria-label="Close Menu">
              <X />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {["Functies", "Oplossingen", "Middelen", "Enterprise", "Prijsberekening"].map(menu => (
              <button 
                key={menu}
                onClick={() => toggleMenu(menu)} 
                className="w-full text-left py-2 flex justify-between items-center text-foreground hover:text-primary"
              >
                {menu} <ChevronDown className="h-4 w-4" />
              </button>
            ))}
          </div>
          <div className="p-4">
            <Button variant="default" className="w-full mb-2">
              Aan de slag
            </Button>
            <Button variant="outline" className="w-full">
              Inloggen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
