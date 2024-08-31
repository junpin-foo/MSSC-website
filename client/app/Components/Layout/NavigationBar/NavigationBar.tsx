"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Past Events', path: '/past-events' },
    { name: 'Upcoming Events', path: '/upcoming-events' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavItemClick = (path: string) => {
    setIsOpen(false);
    if (pathname === '/' && path !== '/') {
      // If on home page and clicking a section, scroll to it
      const sectionId = path.replace('/', '');
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    // For other cases, Next.js Link component will handle navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#fff6ed] z-50">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/mssc-logo.png" alt="Logo" width={85} height={50} className="h-20 w-auto object-contain" />
          </Link>
        </div>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.path} 
                className={`text-black font-bold font-georgia hover:text-[#ffd0a1] transition duration-100 ${pathname === item.path ? 'text-[#ffd0a1]' : ''}`}
                onClick={(e) => {
                  if (pathname === '/' && item.path !== '/') {
                    e.preventDefault();
                    handleNavItemClick(item.path);
                  }
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fff6ed]">
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.name} className="my-2">
                <Link 
                  href={item.path} 
                  className={`text-black font-bold font-georgia hover:text-[#ffd0a1] transition duration-100 ${pathname === item.path ? 'text-[#ffd0a1]' : ''}`}
                  onClick={(e) => {
                    if (pathname === '/' && item.path !== '/') {
                      e.preventDefault();
                      handleNavItemClick(item.path);
                    }
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;