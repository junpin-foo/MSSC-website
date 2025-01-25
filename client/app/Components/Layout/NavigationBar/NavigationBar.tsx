"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Welcome', path: '/#welcome' },
    { name: 'About', path: '/#about' },
    { name: 'Events', path: '/#events' },
    { name: 'Contact', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const sectionId = path.replace('/#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 px-4 py-4 z-50 flex justify-center">
      <header className={`w-full max-w-4xl rounded-full transition-all duration-300 
        ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-black/80'}
        ${isOpen ? 'rounded-2xl' : 'rounded-full'}`}>
        
        <nav className="h-16 px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/mssc-nav.png" 
              alt="MSSC Logo" 
              width={48} 
              height={48} 
              className="w-16 h-16"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="group">
                <Link 
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path)}
                  className={`text-base font-medium text-white hover:text-[#fff7ec] transition-all duration-300
                    group-hover:scale-110 inline-block transform origin-center
                    ${pathname === item.path ? 'text-[#fff7ec]' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-white hover:text-[#fff7ec] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20">
            <ul className="px-6 py-4">
              {navItems.map((item) => (
                <li key={item.name} className="py-2 group">
                  <Link 
                    href={item.path}
                    onClick={(e) => handleScroll(e, item.path)}
                    className={`block text-base font-medium text-white hover:text-[#fff7ec] 
                      transition-all duration-300 group-hover:scale-110 inline-block transform origin-center
                      ${pathname === item.path ? 'text-[#fff7ec]' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavigationBar;