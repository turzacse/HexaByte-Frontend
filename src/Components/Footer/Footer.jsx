import React from 'react';
import LogoText from '../LogoText.jsx/LogoText';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#658baf] text-white py-8">
            <div className="md:container md:mx-auto px-4">
                {/* Grid Layout for Footer Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section: Company Info */}
                    <div>
                        <div className='flex gap-2'>
                            <LogoText /> <p className="md:text-2xl font-bold">Solution</p>
                        </div>
                        <p className="text-sm mt-2">
                            Innovative software solutions to power your business.
                        </p>
                    </div>

                    {/* Middle Section: Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="#portfolio" className="hover:text-gray-300">Case Studies</a></li>
                            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right Section: Follow Us and Newsletter Subscription */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4 mb-4">
                        <FaFacebook className='text-2xl ' />
                        <FaLinkedin className='text-2xl ' />
                        <FaInstagram className='text-2xl ' />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h4>
                        <div className='relative w-[300px]'>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="py-1 px-2 rounded bg-white text-black w-full"
                            />
                            <button className=" absolute right-0 top-0 bg-yellow-500 hover:bg-yellow-600 text-black py-1 px-4 rounded-r">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="text-center mt-8 text-sm text-gray-300">
                &copy; {new Date().getFullYear()} HexaByte TM Solution. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
