import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import img from "../../../assets/Image/avatar.png";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Hasan MD Asif Priom",
      position: "Cheif Advisor & Co-Founder",
      description:
        "Mike brings expertise in software development, managing the core technical aspects of our projects.",
      imageUrl: img,
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
      name: "Roshnat Tanjihee Anosua ",
      position: "Co-Founder",
      description:
        "Jane is our technology wizard, ensuring we stay ahead of the curve with cutting-edge solutions.",
      imageUrl: img,
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      facebookUrl: "https://facebook.com",
    },
    {
      name: "Fahim Montasir Turza",
      position: "Co-Founder & Software Engineer",
      description:
        "With over 10 years of experience in the tech industry, John leads our team with a passion for innovation.",
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
      imageUrl: img,
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      facebookUrl: "https://facebook.com",
    },

    // Add more team members as needed
  ];

  return (
    <section className="relative bg-[#fff] py-12" id="meet-our-team">
    {/* Background Video */}
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
  
      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            <h3 className="text-xl font-semibold uppercase text-gray-700">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500">{member.position}</p>
  
            {/* Description */}
            <p className="text-gray-500 text-[12px] mb-4">
              {member.description}
            </p>
  
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4">
              <a
                href={member.linkedinUrl}
                className="text-blue-200 hover:text-blue-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href={member.twitterUrl}
                className="text-blue-300 hover:text-blue-400"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href={member.facebookUrl}
                className="text-blue-200 hover:text-blue-300"
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
