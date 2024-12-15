import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import img from '../../../assets/Image/avatar.png'

const MeetOurTeam = () => {
    const teamMembers = [
       
        
        
        {
            name: 'Hasan MD Asif Priom',
            position: 'Cheif Advisor & Co-Founder',
            description: 'Mike brings expertise in software development, managing the core technical aspects of our projects.',
            imageUrl: 'https://z-p3-scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/449951906_8357332754318583_4324402842033991916_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF-cvXTpff7RPP7NVsv4yar_HZJ0CmZ5KD8dknQKZnkoGFHbDpR2dg-fpBvCKpD37t_BgRQ8oW9jsXp2G7tlE-6&_nc_ohc=8nCfKUgJZ-sQ7kNvgFz1Fcr&_nc_zt=23&_nc_ht=z-p3-scontent.fdac3-2.fna&_nc_gid=Ad-AtDXgUMFWjctP0SgENo5&oh=00_AYD-tf9SqWNJXwS1VXkQJ-Ik8On64lztBLAc0LkDf_7SxA&oe=6764DEA1',
            linkedinUrl: 'https://linkedin.com',
            twitterUrl: 'https://twitter.com',
            facebookUrl: 'https://facebook.com',
        },
       
        {
            name: 'Maria Binte Hafiz',
            position: 'CTO & Co-Founder',
            description: 'Jane is our technology wizard, ensuring we stay ahead of the curve with cutting-edge solutions.',
            imageUrl: img,
            linkedinUrl: 'https://linkedin.com',
            twitterUrl: 'https://twitter.com',
            facebookUrl: 'https://facebook.com',
        },
        {
            name: 'Roshnat Tanjihee Anosua ',
            position: 'Co-Founder',
            description: 'Jane is our technology wizard, ensuring we stay ahead of the curve with cutting-edge solutions.',
            imageUrl: img,
            linkedinUrl: 'https://linkedin.com',
            twitterUrl: 'https://twitter.com',
            facebookUrl: 'https://facebook.com',
        },
        {
            name: 'Fahim Montasir Turza',
            position: 'Co-Founder & Software Engineer',
            description: 'With over 10 years of experience in the tech industry, John leads our team with a passion for innovation.',
            imageUrl: 'https://z-p3-scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/439714086_1665588540514343_792969959916063930_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHmPlbm5w9RkcHXWcc3KrBeZm_O03M86vVmb87Tczzq9esAoPjc8EFtLMjvQHJzB_vOLMPr9JhfHKsf3CQ3GtZC&_nc_ohc=bTl9Y9O4SKEQ7kNvgEmG25w&_nc_zt=23&_nc_ht=z-p3-scontent.fdac3-2.fna&_nc_gid=AxmTUenm4QMi11IoEQ95nJT&oh=00_AYAbGqvrpIbRyse6rxeHpzyvMoGoBv7XmspXzONf1REkyw&oe=6764CA6C', // Placeholder image for team member
            linkedinUrl: 'https://linkedin.com',
            twitterUrl: 'https://twitter.com',
            facebookUrl: 'https://facebook.com',
        },
        {
            name: 'Adel Khayati',
            position: 'Software Engineer',
            description: 'Jane is our technology wizard, ensuring we stay ahead of the curve with cutting-edge solutions.',
            imageUrl: 'https://z-p3-scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/418805894_299744343149906_3262565982735097747_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGTx_f09Vwn42Ha2qZiedVwr_RSSz336Fev9FJLPffoV_PAYUmzS6F4FoH2BMV4GSU-p8paTtL6tcMTzYuE4o82&_nc_ohc=f0MM5QxfVRUQ7kNvgElqzOk&_nc_zt=23&_nc_ht=z-p3-scontent.fdac3-2.fna&_nc_gid=A-Dp1TWlDQaCZYVgzod18P4&oh=00_AYAMDcSZV3lmAGFVlYR8W9vVO96RcPRo9G3dfixq_l3OyA&oe=6764BE70',
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gradient-to-r from-[#658baf] to-[#123955] p-6 rounded-lg shadow-lg text-center">
                            {/* Team Member Image */}
                            <img src={member.imageUrl||img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />

                            {/* Name and Position */}
                            <h3 className="text-xl font-semibold uppercase text-[#fff]">{member.name}</h3>
                            <p className="text-sm text-gray-200">{member.position}</p>

                            {/* Description */}
                            <p className="text-gray-300 text-[12px] mb-4">{member.description}</p>

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
