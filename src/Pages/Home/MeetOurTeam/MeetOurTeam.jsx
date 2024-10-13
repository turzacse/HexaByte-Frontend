import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import img from '../../../assets/Image/avatar.png'

const MeetOurTeam = () => {
    const teamMembers = [
        {
            name: 'Fahim Montasir Turza',
            position: 'Founder',
            description: 'With over 10 years of experience in the tech industry, John leads our team with a passion for innovation.',
            imageUrl: 'https://via.placeholder.com/150', // Placeholder image for team member
            linkedinUrl: 'https://linkedin.com',
            twitterUrl: 'https://twitter.com',
            facebookUrl: 'https://facebook.com',
        },
        {
            name: 'Maria Binte Hafiz',
            position: 'Co-Founder',
            description: 'Jane is our technology wizard, ensuring we stay ahead of the curve with cutting-edge solutions.',
            imageUrl: 'https://via.placeholder.com/150',
            linkedinUrl: 'https://linkedin.com',
            twitterUrl: 'https://twitter.com',
            facebookUrl: 'https://facebook.com',
        },
        {
            name: 'Mike Johnson',
            position: 'Lead Developer',
            description: 'Mike brings expertise in software development, managing the core technical aspects of our projects.',
            imageUrl: 'https://via.placeholder.com/150',
            linkedinUrl: 'https://linkedin.com',
            twitterUrl: 'https://twitter.com',
            facebookUrl: 'https://facebook.com',
        },
        // Add more team members as needed
    ];

    return (
        <section className="bg-[#f0f4f8] py-12" id="meet-our-team">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-[#123955] mb-8">Meet Our Team</h2>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gradient-to-r from-[#658baf] to-[#123955] p-6 rounded-lg shadow-lg text-center">
                            {/* Team Member Image */}
                            <img src={img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />

                            {/* Name and Position */}
                            <h3 className="text-xl font-semibold uppercase text-[#fff]">{member.name}</h3>
                            <p className="text-sm text-gray-200 mb-4">{member.position}</p>

                            {/* Description */}
                            <p className="text-gray-300 mb-4">{member.description}</p>

                            {/* Social Media Links */}
                            <div className="flex justify-center space-x-4">
                                <a href={member.linkedinUrl} className="text-blue-200 hover:text-blue-300">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a href={member.twitterUrl} className="text-blue-300 hover:text-blue-400">
                                    <FaTwitter className="text-2xl" />
                                </a>
                                <a href={member.facebookUrl} className="text-blue-200 hover:text-blue-300">
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
