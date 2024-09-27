"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'CARS', href: '/cars' },
    { name: 'BOATS', href: '/boats' },
    { name: 'FASHION', href: '/fashion' },
    { name: 'COLLABORATIONS', href: '/collaborations' },
    { name: 'BRAND', href: '/brand' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`transition-all duration-300 ${isScrolled ? 'scale-75' : ''}`}>
          <Image
            src={isScrolled ? '/logos/logo-zwart.png' : '/logos/logo-wit.png'}
            alt="Logo"
            width={160}
            height={64}
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Menu Items */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className={`font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button variant="default">
            Gratis offerte
          </Button>
        </div>

        {/* Mobile Call Icon */}
        <motion.div 
          className="md:hidden relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a 
            href="tel:+1234567890" 
            className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full"
            aria-label="Phone"
          >
            <FontAwesomeIcon icon={faPhone} className="text-white" />
          </a>
        </motion.div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className={isScrolled ? 'text-black' : 'text-white'} />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <nav className="text-center">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Link 
                    href={item.href} 
                    className="block text-2xl font-bold my-4"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;