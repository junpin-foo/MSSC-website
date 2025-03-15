'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { aboutService } from '@/services/firebase/db';
import type { AboutUsContent } from '@/types/firebase';

const AboutUs = () => {
  const [content, setContent] = useState<AboutUsContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await aboutService.getContent();
        console.log('Fetched data:', data); // Debug log
        setContent(data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    fetchContent();
  }, []);

  return (
    <div className="min-h-screen bg-[#be2023] text-white">
      <h1 className="text-7xl font-bold text-center pt-36 pb-16">ABOUT US</h1>
      
      <div className="w-full mx-auto px-36">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-5xl font-light leading-relaxed">
              {content?.mission}
            </p>
            
            <p className="text-2xl leading-relaxed">
              {content?.description}
            </p>

            <button className="bg-white text-[#be2023] text-xl font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all">
              MEET THE TEAM
            </button>
          </div>

          <div className="relative h-[600px] w-full">
            <Image
              src="/mssc_main.jpg"
              alt="MSSC Team"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;