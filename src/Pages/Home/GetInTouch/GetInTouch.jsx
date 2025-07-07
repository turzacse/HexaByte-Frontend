import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const GetInTouch = () => {
  return (
    <section
      //   data-aos="fade-up"
      //   data-aos-duration="2500"
      className="bg-white text- py-12"
      id="get-in-touch"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Title */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl text-[#0B1226] font-bold text-center mb-8"
        >
          Get in Touch
        </h2>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center mb-6"
        >
          Have questions or want to work together? We would love to hear from
          you!
        </p>

        <div className="flex md:flex-row flex-col justify-between">
          {/* Contact Form */}
          <form data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="500" className="flex-1  p-6 rounded-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 bg-[#F1F1F9] border border-[#0B1226] rounded-md text-black"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 bg-[#F1F1F9] border border-[#0B1226] rounded-md text-black"
                required
              />
            </div>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-[#F1F1F9] border border-[#0B1226] rounded-md text-black mb-4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-900 hover:bg-indigo-700 text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>

          {/* Alternative Contact Methods */}
          <div data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="500" className="mt-8 text-center flex-1">
            <h3 className="text-2xl uppercase font-bold mb-4">Or reach us at</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:turzacse@gmail.com"
                className="text-yellow-600 font-bold hover:underline"
              >
                hexabytetmsolution.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-yellow-600 font-bold hover:underline"
              >
                +880 1751-760505
              </a>
            </p>

            <div className="flex justify-center md:justify-center flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/8801751760505"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                {/* <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5" /> */}
                <IoLogoWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                href="https://www.linkedin.com/company/hexabyte-tm-solution"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                {/* <img src="/linkedin-icon.png" alt="LinkedIn" className="w-5 h-5" /> */}
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
