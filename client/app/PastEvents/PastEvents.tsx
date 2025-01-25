import React from 'react';
import Image from 'next/image';

const PastEvent = ({ title, date, description, imageSrc }: { title: string; date: string; description: string; imageSrc: string }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
    <Image src={imageSrc} alt={title} width={400} height={300} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{date}</p>
      <p className="text-gray-800">{description}</p>
    </div>
  </div>
);

// I am thinking where we can just retrieve from our firestore
export default function PastEventsPage() {
  const pastEvents = [
    {
      title: "Malaysian Night 2023",
      date: "November 15, 2023",
      description: "A night of Malaysian culture, food, and performances.",
      imageSrc: "https://picsum.photos/400/300?random=1"
    },
    {
      title: "Singaporean Food Festival",
      date: "September 5, 2023",
      description: "Showcasing the best of Singaporean cuisine on campus.",
      imageSrc: "https://picsum.photos/400/300?random=1"
    },

  ];

  return (
    <div className="min-h-screen pt-60 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Past Events</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <PastEvent key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}