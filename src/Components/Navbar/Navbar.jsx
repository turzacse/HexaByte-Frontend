import React, { useState } from 'react';
import LogoText from '../LogoText.jsx/LogoText';
import { NavLink } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const Links = [
        { key: 1, title: 'Home', address: '/' },
        { key: 2, title: 'About', address: '/about' },
        { key: 3, title: 'Service', address: '/service' },
        { key: 4, title: 'Career', address: '/career' },
        { key: 5, title: 'Case Studies', address: '/case-studies' },
        { key: 6, title: 'Contact', address: '/contact-us' },
    ];

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className="bg-[#658baf] text-white p-4 relative">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex md:hidden">
                    <IoMdMenu
                        className="text-2xl cursor-pointer"
                        onClick={toggleDrawer}
                    />
                </div>
                <LogoText />

                <div className="space-x-6 hidden md:flex">
                    {Links.map((item) => (
                        <NavLink key={item.key} to={item.address} className="hover:text-gray-300">
                            {item.title}
                        </NavLink>
                    ))}
                </div>

                <div>
                    <a href="#quote" className="bg-yellow-500 hover:bg-yellow-600 text-black md:py-2 md:px-4 py-1 px-2 rounded">
                        Get a Quote
                    </a>
                </div>
            </div>

            {isDrawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="fixed top-0 left-0 w-56 h-full bg-[#658BAF] shadow-lg z-50 transition-transform transform">
                        <div className="flex justify-between p-4">
                            <LogoText />
                            <IoMdClose
                                className="text-2xl cursor-pointer text-red-600"
                                onClick={toggleDrawer}
                            />
                        </div>


                        <ul className="flex flex-col space-y-2 px-4">
                            {Links.map((item) => (
                                <li key={item.key}>
                                    <NavLink
                                        to={item.address}
                                        className=" hover:text-[#658baf] text-lg"
                                        onClick={toggleDrawer}
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;