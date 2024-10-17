import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaCogs, FaAddressCard } from 'react-icons/fa'; // Example icons
import LogoText from '../Components/LogoText.jsx/LogoText';
import { FaDiagramProject, FaMessage, FaRegMessage } from 'react-icons/fa6';
import { IoPeopleSharp } from 'react-icons/io5';

const LeftSidebar = () => {
    const Links = [
        { key: 1, title: 'Dashboard', icon: <FaHome />, address: '/admin/dashboard' },
        { key: 2, title: 'Users', icon: <FaUser />, address: '/admin/users' },
        { key: 4, title: 'Employees', icon: <IoPeopleSharp />, address: '/admin/employee' },
        { key: 4, title: 'Instructors', icon: <IoPeopleSharp />, address: '/admin/instructor' },
        // { key: 3, title: 'Settings', icon: <FaCogs />, address: '/admin/settings' },
        { key: 3, title: 'Contacts', icon: <FaMessage />, address: '/admin/contacts' },
        { key: 4, title: 'Circulars', icon: <FaAddressCard />, address: '/admin/circular' },
        
        { key: 4, title: 'Projects', icon: <FaDiagramProject />, address: '/admin/project' },
        
    ];

    return (
        <div className="bg-[#658BAF] text-white w-64 min-h-screen flex flex-col">
            {/* Logo */}
            <NavLink to='/' className="p-4 text-center text-2xl font-bold">
               <LogoText/>
            </NavLink>
            

            {/* Navigation Links */}
            <nav className="flex-grow">
                <ul className="space-y-2 p-4">
                    {Links.map((item) => (
                        <li
                        className='uppercase'
                        key={item.key}>
                            <NavLink
                                to={item.address}
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-2 p-2 text-yellow-400 bg-gray-700 rounded"
                                        : "flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
                                }
                            >
                                {item.icon} {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default LeftSidebar;
