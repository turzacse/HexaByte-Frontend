import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#658baf] text-white py-8">
            <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
                
                {/* Left Section: Company Info */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">HexaByte TM Solution</h2>
                    <p className="text-sm mt-2">
                        Innovative software solutions to power your business.
                    </p>
                </div>
                
                {/* Middle Section: Navigation Links */}
                <div className="space-x-6 mb-4 md:mb-0">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#services" className="hover:text-gray-300">Services</a>
                    <a href="#about" className="hover:text-gray-300">About Us</a>
                    <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                </div>

                {/* Right Section: Social Media Icons */}
                <div className="space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
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
