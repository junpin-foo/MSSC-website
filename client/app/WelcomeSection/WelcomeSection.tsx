'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { welcomeService } from '../../src/services/firebase/db';
import type { SocialLinks } from '../../src/types/firebase';

const WelcomeSection = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLinks | null>(null);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      const links = await welcomeService.getSocialLinks();
      setSocialLinks(links);
    };
    fetchSocialLinks();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/MSSC-Web-BG.svg"
          alt="MSSC Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="z-10 flex-grow flex flex-col items-center justify-center text-center px-4">
      <div>
        <Image
          src="/mssc-vector.png"
          alt="MSSC Logo"
          width={438}
          height={265}
          className="w-48 h-28 object-contain"
          priority
        />
      </div>
        <h1 className="text-9xl md:text-8xl font-bold mb-2">
          <span className="text-[#be2023]">Malaysian</span>
          <span className="text-[#000000]">-</span>
          <span className="text-[#af3ba6]">Singaporean</span>
        </h1>
        <h1 className="text-6xl md:text-8xl text-black">Students Club</h1>
        </div>


      <div className="z-10 flex justify-center space-x-8 pb-36">
        {socialLinks && (
          <>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-12 h-12 text-black hover:text-purple-600 transition-colors" />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-12 h-12 text-black hover:text-blue-600 transition-colors" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-12 h-12 text-black hover:text-blue-600 transition-colors" />
            </a>
            <a href={socialLinks.linktree} target="_blank" rel="noopener noreferrer">
              <SiLinktree className="w-12 h-12 text-black hover:text-green-500 transition-colors" />
            </a>
            <a href={`mailto:${socialLinks.gmail}`}>
              <MdEmail className="w-12 h-12 text-black hover:text-red-600 transition-colors" />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default WelcomeSection;