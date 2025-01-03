import React, { useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import img from '../../../assets/Image/avatar.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Testimonials = () => {
  const testimonials = [
    {
      clientName: 'John Doe',
      title: 'CEO, TechCorp',
      feedback: 'HexaByte TM Solution transformed our digital infrastructure, delivering outstanding results on time.',
      logoUrl: 'https://via.placeholder.com/100',
      rating: 5,
    },
    {
      clientName: 'Jane Smith',
      title: 'CTO, InnovateX',
      feedback: 'Their professionalism and technical expertise are unmatched. Our project was a huge success!',
      logoUrl: 'https://via.placeholder.com/100',
      rating: 5,
    },
    {
      clientName: 'Mike Johnson',
      title: 'Founder, StartUp Hub',
      feedback: 'HexaByte TM Solution exceeded our expectations. We highly recommend their services.',
      logoUrl: 'https://via.placeholder.com/100',
      rating: 4.5,
    },
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section className="bg-white py-12" id="testimonials">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Title */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl font-bold text-center text-[#39357D] mb-8"
        >
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={`${index * 300}`} // Delay each testimonial animation slightly
              className="relative bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-3xl text-yellow-500 absolute top-2 left-4" />

              {/* Feedback */}
              <p className="text-gray-700 italic mt-4 mb-4">{testimonial.feedback}</p>

              {/* Client Info */}
              <div className="flex items-center mt-4">
                <img
                  src={img}
                  alt={testimonial.clientName}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#123955]">{testimonial.clientName}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <div className="flex">
                    {[...Array(5)].map((star, i) => (
                      <FaStar
                        key={i}
                        className={`text-yellow-500 ${i < testimonial.rating ? 'fill-current' : 'opacity-50'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
