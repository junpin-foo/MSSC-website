"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getTeamMembers } from '@/services/firebase/db';
import type { TeamMember } from '@/types/firebase';

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const data = await getTeamMembers();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };
    fetchTeamMembers();
  }, []);

  return (
    <div className="min-h-screen bg-[#af3ba6]">
      <h1 className="text-7xl font-bold text-center pt-36 pb-16 text-white">
        OUR TEAM
      </h1>
      
      <div className="container mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center space-y-3"
            >
              <div className="relative w-48 h-48">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl text-white">{member.name}</h3>
                <p className="text-white font-medium">{member.position}</p>
                <p className="text-white text-sm">{member.major}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;