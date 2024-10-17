import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Contact = () => {
    const contactData = [
        {
            _id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            dateTime: '2024-01-12',
            subject: 'Website issue',
            message: 'I am facing an issue with the website’s login functionality.',
            status: 'Pending',
        },
        {
            _id: '2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            dateTime: '2024-02-15',
            subject: 'Query about new feature',
            message: 'Can you please tell me more about the upcoming feature?',
            status: 'Pending',
        },
        {
            _id: '3',
            name: 'Mark Johnson',
            email: 'mark@example.com',
            dateTime: '2024-03-20',
            subject: 'Support request',
            message: 'I need help with the platform navigation. Could you assist?',
            status: 'Pending',
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold uppercase text-[#123955] mb-4">Contacts</h2>
            <div className='mb-4'>
                <input type="text" className='px-2 py-2 rounded-md bg-gray-50 text-[#123955] md:w-[300px] w-full' name="search" id="" placeholder='Search' />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 border border-gray-300">
                    <thead className="bg-[#658baf] text-white">
                        <tr className='text-left'>
                            <th className="px-4 py-2 border-b">S/no</th>
                            <th className="px-4 py-2 border-b">Name</th>
                            {/* <th className="px-4 py-2 border-b">Email</th> */}
                            <th className="px-4 py-2 border-b">Date & Time</th>
                            <th className="px-4 py-2 border-b">Subject</th>
                            <th className="px-4 py-2 border-b">Message</th>
                            <th className="px-4 py-2 border-b">Status</th>
                            <th className="px-4 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactData.map((contact, index) => (
                            <tr key={contact._id}>
                                <td className="px-4 py-2 border-b">{index + 1}</td>
                                <td className="px-4 py-2 border-b">{contact.name}</td>
                                {/* <td className="px-4 py-2 border-b">{contact.email}</td> */}
                                <td className="px-4 py-2 border-b">{contact.dateTime}</td>
                                <td className="px-4 py-2 border-b">{contact.subject}</td>
                                {/* <td className="px-4 py-2 border-b">
                                    {contact.subject.length > 13
                                        ? contact.subject.slice(0, 12) + '...'
                                        : contact.subject}
                                </td> */}
                                <td className="px-4 py-2 border-b">
                                    {contact.message.length > 25
                                        ? contact.message.slice(0, 20) + '...'
                                        : contact.message}
                                </td>
                                <td className="px-4 py-2 border-b">{contact.status}</td>
                                <td className="px-4 py-2 border-b space-x-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                                        <FaEye />
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-[#658baf]">
                        <tr>
                            <td colSpan="8" className="px-4 py-4"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>


            
        </div>
    );
};

export default Contact;
