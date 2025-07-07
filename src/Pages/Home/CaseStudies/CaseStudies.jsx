import React from "react";
import { FaRegEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../Components/Primary/CustomButton";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "HexaExpance",
      description:
        "Developed a scalable e-commerce platform that supports thousands of users globally.",
      imageUrl: '/p3.png',
      link: "/case-studies/e-commerce",
      id: "001p",
      //     type: "fade-up",
      //     anchorPlacement: "top-bottom",
      //     duration: 2500,
      //     delay: 200,
      //   },
    },
    {
      title: "EduTech Platform",
      description:
        "Created a mobile banking app with top-notch security features and user-friendly interface.",
      imageUrl: '/p1.PNG',
      link: "/case-studies/mobile-banking",
      id: "002p",
      //   animation: {
      //     type: "fade-up",
      //     anchorPlacement: "top-bottom",
      //     duration: 2500,
      //     delay: 500,
      //   },
    },
    {
      title: "Prosnobanai",
      description:
        "Built a healthcare platform to help patients book appointments and access medical history online.",
      imageUrl: '/p2.jpg',
      link: "/case-studies/healthcare",
      id: "003p",
      //   animation: {
      //     type: "fade-up",
      //     anchorPlacement: "top-bottom",
      //     duration: 2500,
      //     delay: 900,
      //   },
    },
    {
      title: "Healthcare Platform",
      description:
        "Built a healthcare platform to help patients book appointments and access medical history online.",
      imageUrl: '/p5.png',
      link: "/case-studies/healthcare",
      id: "003p",
      //   animation: {
      //     type: "fade-up",
      //     anchorPlacement: "top-bottom",
      //     duration: 2500,
      //     delay: 900,
      //   },
    },
    // Add more case studies as needed
  ];

  return (
    <section className="bg-white relative py-12" id="case-studies">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/team-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Title */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl font-bold text-center text-[#39357D] mb-8"
        >
          Our Work
        </h2>

        {/* Grid Layout for Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={`${index * 300}`}
              // data-aos={caseStudy.animation?.type || 'fade-up'}
              // data-aos-anchor-placement={caseStudy.animation?.anchorPlacement || 'top-bottom'}
              // data-aos-duration={caseStudy.animation?.duration || 1000}
              // data-aos-delay={caseStudy.animation?.delay || 0}
              className="relative bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <img
                src={caseStudy.imageUrl}
                alt={caseStudy.title}
                className="w-full object-cover mb-4 rounded-lg"
              />

              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {caseStudy.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                {caseStudy.description}
              </p>

              {/* CTA Button */}
              <div className="flex justify-between items-center mt-4">
                <NavLink
                  to={`/case-studies/${caseStudy?.id}`}
                  className="text-white bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
                >
                  View Details
                </NavLink>
                <NavLink>
                  <FaRegEye
                    className="text-blue-600 text-3xl hover:text-yellow-500 hover:scale-125 hover:rotate-45 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ease-in-out transform"
                  />

                </NavLink>
              </div>
            </div>
          ))}

        </div>

        <CustomButton text="See Portfolio" link="/case-studies" />
      </div>
    </section>
  );
};

export default CaseStudies;
