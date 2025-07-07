import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import img from "../../../assets/Image/avatar.png";
import WhatsApp from "../../../Components/WhatsApp/WhatsApp";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Asif Priom",
      position: "Cheif Advisor",
      description:
        "Mike brings expertise in software development, managing the core technical aspects of our projects.",
      imageUrl: '/team2.jpg',
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      facebookUrl: "https://facebook.com",
    },

    {
      name: "Maria Binte Hafiz",
      position: "CTO & Co-Founder",
      description:
        "Jane is our technology wizard, ensuring we stay ahead of the curve with cutting-edge solutions.",
      imageUrl: img,
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      facebookUrl: "https://facebook.com",
    },
    {
      name: "Roshnat Tanjihee",
      position: "Co-Founder",
      description:
        "Jane is our technology wizard, ensuring we stay ahead of the curve with cutting-edge solutions.",
      imageUrl: img,
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      facebookUrl: "https://facebook.com",
    },

    {
      name: "Adel Khayati",
      position: "Software Engineer",
      description:
        "Jane is our technology wizard, ensuring we stay ahead of the curve with cutting-edge solutions.",
      imageUrl: '/team5.jpg',
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      facebookUrl: "https://facebook.com",
    },

    // Add more team members as needed
  ];

  return (
    <section className="relative bg-[#fff] py-12" id="meet-our-team">
      {/* Background Video */}
      {/* <WhatsApp/> */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/team-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Title */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl font-bold text-center text-[#39357D] mb-8"
        >
          Meet Our Team
        </h2>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay={`${1 * 300}`}
          // key={index}
          className="relative md:mb-10 mb-4 bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 md:w-1/4 mx-auto w-full "
        >
          {/* Team Member Image */}
          <img
            src='/founder.jpeg'
            alt={'FMT'}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />

          {/* Name and Position */}
          <h3 className="text-xl text-center font-semibold uppercase text-gray-700">
            Fahim Montasir Turza
          </h3>
          <p className="text-sm text-center text-gray-500">Founder & Software Engineer</p>

          {/* Description */}
          <p className="text-gray-500 text-center text-[12px] mb-4">
            
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a
              href={'https://linkedin.com'}
              className="text-blue-500 hover:text-blue-600"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href={'https://linkedin.com'}
              className="text-blue-500 hover:text-blue-600"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href={'https://linkedin.com'}
              className="text-blue-500 hover:text-blue-600"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={`${index * 300}`}
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Team Member Image */}
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              {/* Name and Position */}
              <h3 className="text-xl text-center font-semibold uppercase text-gray-700">
                {member.name}
              </h3>
              <p className="text-sm text-center text-gray-500">{member.position}</p>

              {/* Description */}
              {/* <p className="text-gray-500 text-center text-[12px] mb-4">
                {member.description}
              </p> */}

              {/* Social Media Links */}
              <div className="flex justify-center mt-5 space-x-4">
                <a
                  href={member.linkedinUrl}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href={member.twitterUrl}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href={member.facebookUrl}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default MeetOurTeam;
