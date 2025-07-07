import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: 'Sarah Khan',
    position: 'Photographer',
    comment: 'HexaByte built me a clean, elegant portfolio site. My clients are impressed and so am I!',
  },
  {
    name: 'Michael Roy',
    position: 'Startup Founder',
    comment: 'Their attention to detail and quick delivery exceeded expectations. Highly recommended!',
  },
  {
    name: 'Aisha Rahman',
    position: 'UI/UX Designer',
    comment: 'Working with HexaByte was smooth from start to finish. My portfolio looks top-notch.',
  },
  {
    name: 'David Kim',
    position: 'Software Engineer',
    comment: 'They nailed the design and functionality I wanted. I now share my portfolio confidently.',
  },
  {
    name: 'Tariq Hasan',
    position: 'Digital Marketer',
    comment: 'Professional and responsive team. They delivered exactly what I had in mind.',
  },
  {
    name: 'Luna Dey',
    position: 'Illustrator',
    comment: 'My site looks fantastic on all devices! Loved the communication and process.',
  },
  {
    name: 'Neha Verma',
    position: 'Content Creator',
    comment: 'HexaByte gave my brand a powerful online identity. Very happy with the outcome!',
  },
  {
    name: 'Andrew Lee',
    position: 'Music Producer',
    comment: 'Creative minds and great service! My website is now the centerpiece of my promotion.',
  },
  {
    name: 'Jannat Akter',
    position: 'Educator',
    comment: 'The site is super fast and beautifully made. My students love it too!',
  },
  {
    name: 'Farhan Niaz',
    position: 'Freelancer',
    comment: 'Best decision ever. Their service is quick, affordable, and visually stunning!',
  },
];

const ClientReview = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center text-[#123955] mb-8">
        What Our Clients Say
      </h2>
      <div className="overflow-x-hidden border-x-4 border-yellow-500 rounded-md whitespace-nowrap px-6">
        <div className="inline-flex   space-x-6 animate-scroll-right">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-80 bg-[#0B1226] shadow-md rounded-lg px-6 py-6 border-t-4 border-yellow-500 flex-shrink-0"
            >
              <FaQuoteLeft className="text-yellow-500 text-2xl mb-2" />
              <p className="text-gray-50 text-wrap text-base mb-4 italic">"{review.comment}"</p>
              <div>
                <p className="text-white  font-bold">{review.name}</p>
                <p className="text-sm text-gray-50">{review.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
