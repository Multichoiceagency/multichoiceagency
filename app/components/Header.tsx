"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MegaMenu from "./MegaMenu";
import { ChevronDown, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null); // For toggling submenus on mobile
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Controleert of je naar beneden scrollt
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu: string) => {
    setActiveMenu(prevMenu => (prevMenu === menu ? null : menu));
    setMenuOpen(!menuOpen); // Toggle de kleur als menu opent of sluit
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
    setMenuOpen(false); // Sluit menu als de mobiele versie opent
  };

  const toggleSubmenu = (menu: string) => {
    setSubmenuOpen(prev => (prev === menu ? null : menu)); // Toggle submenu open/close
  };

  const closeAllMenus = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setSubmenuOpen(null); // Close all submenus on close
    setMenuOpen(false); // Sluit alle menu's en zet kleur terug
  };

  // Dynamische achtergrondkleur op basis van de status (default, menuOpen, isScrolled)
  const getHeaderBgColor = () => {
    if (menuOpen) return "bg-primary"; // Primaire kleur als MegaMenu open is
    if (isScrolled) return "bg-foreground"; // Voorgrondkleur bij scrollen
    return "bg-transparent"; // Transparant als standaard
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBgColor()} py-4 md:py-6`}
    >
      <div className="container w-full  mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo-multichoiceagency.png"
              alt="Asana Logo"
              width={150}
              height={42}
              className="h-auto w-auto"
            />
          </Link>

          {/* Navigatie */}
          <nav className="hidden md:flex space-x-6">
            {["Functies", "Oplossingen", "Middelen", "Enterprise", "Prijsberekening"].map(item => (
              <button
                key={item}
                onClick={() => toggleMenu(item)}
                className={`flex items-center ${isScrolled || menuOpen ? "text-foreground" : "text-white"} hover:text-primary`}
              >
                {item} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            ))}
          </nav>
        </div>

        {/* Contact opnemen met verkoop, Inloggen, Aan de slag */}
        <div className="flex items-center space-x-4">
          {/* Contact opnemen met verkoop en Inloggen */}
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Contact opnemen met verkoop
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Inloggen
            </Link>
          </nav>

          {/* Primair: Aan de slag */}
          <Button variant="default" className="hidden md:inline-block">
            Aan de slag
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Desktop MegaMenu */}
      <MegaMenu activeMenu={activeMenu} onClose={closeAllMenus} />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <Image
              src="/images/logo-multichoiceagency.png"
              alt="Asana Logo"
              width={150}
              height={42}
              className="h-auto w-auto"
            />
            <button onClick={closeAllMenus} className="text-2xl focus:outline-none" aria-label="Close Menu">
              <X />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {["Functies", "Oplossingen", "Middelen", "Enterprise", "Prijsberekening"].map(menu => (
              <div key={menu}>
                <button
                  onClick={() => toggleSubmenu(menu)}
                  className="w-full text-left py-2 flex justify-between items-center text-foreground hover:text-primary"
                >
                  {menu} <ChevronDown className="h-4 w-4" />
                </button>
                {submenuOpen === menu && (
                  <div className="pl-4 py-2 space-y-2">
                    {/* Example Submenu Items */}
                    <Link href="#" className="block hover:text-primary">
                      Submenu Item 1
                    </Link>
                    <Link href="#" className="block hover:text-primary">
                      Submenu Item 2
                    </Link>
                    <Link href="#" className="block hover:text-primary">
                      Submenu Item 3
                    </Link>
                  </div>
                )}
              </div>
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
