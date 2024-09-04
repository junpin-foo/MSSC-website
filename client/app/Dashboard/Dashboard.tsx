import React from 'react';
import Image from 'next/image';

// I want to link google rsvp form here
const RSVPForm = () => (
  <form className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4">
    <h3 className="text-xl font-bold mb-4">RSVP for Upcoming Event</h3>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit RSVP
      </button>
    </div>
  </form>
);

// I want to retrieve ig posts from msscsfu acc
const InstagramPost = ({ imageSrc, caption }: { imageSrc: string; caption: string }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
    <Image src={imageSrc} alt="Instagram Post" width={400} height={400} className="w-full h-64 object-cover" />
    <div className="p-4">
      <p className="text-gray-800">{caption}</p>
    </div>
  </div>
);


export default function DashboardPage() {

  const instagramPosts = [
    {
      imageSrc: "https://picsum.photos/400/300?random=1",
      caption: "Join us for our upcoming Malaysian Culture Night! RSVP now!"
    },
    {
      imageSrc: "https://picsum.photos/400/300?random=1",
      caption: "Throwback to last month's Singaporean Food Festival. What a feast!"
    },

  ];

  return (
    <div className="min-h-screen pt-60 bg-[#000000]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Current Activities</h2>
            <RSVPForm />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
            {instagramPosts.map((post, index) => (
              <InstagramPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}