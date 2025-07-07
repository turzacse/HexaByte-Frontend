// import React from 'react';
// import Heading from '../../Components/Heading/Heading';

// const AskForService = () => {
//     return (
//         <div className="bg-gray-100 pb-12">
//             <Heading title='Ask For a Service' description='We’re here to build your ideas into reality. Let’s collaborate.' />
            
//         </div>
//     );
// };

// export default AskForService;




import React from 'react';
import Heading from '../../Components/Heading/Heading';

const AskForService = () => {
    return (
        <div className="bg-gray-100 pb-12">
            <Heading title='Ask For a Service' description='We’re here to build your ideas into reality. Let’s collaborate.' />

           <div className = 'my-12'>
            
             {/* Service Request Form */}
             <h2
          className="text-3xl font-bold text-center text-[#123955]  "
        >
          Request a Service
        </h2>

        {/* Description */}
        <p
          className="text-center mb-6"
        >
          Submit your service request and let’s collaborate.
        </p>
            <div className="max-w-3xl mx-auto p-4 rounded-lg shadow-md">
                <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md" />
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-md" />
                    <input type="text" placeholder="Phone Number (Optional)" className="w-full px-4 py-2 border rounded-md" />
                    <input type="text" placeholder="Company / Organization" className="w-full px-4 py-2 border rounded-md" />
                    <select className="w-full px-4 py-2 border rounded-md">
                        <option>Select Service Category</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>Mobile App</option>
                        <option>SEO & Marketing</option>
                        <option>Custom Software</option>
                    </select>
                    <textarea placeholder="Project Description" rows="4" className="w-full px-4 py-2 border rounded-md" />
                    <input type="file" className="w-full px-4 py-2 border rounded-md" />
                    <button type="submit" className="bg-[#123955] hover:bg-[#0e2e47] text-white px-6 py-2 rounded-md w-[170px] mx-auto ">Submit Request</button>
                </form>
            </div>

            {/* Why Choose HexaByte Section */}
            <div className="max-w-5xl mx-auto mt-16">
                <h3 className="text-2xl font-bold mb-6 text-[#123955] text-center">Why Choose HexaByte?</h3>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                    {[
                        "3+ Years Industry Experience",
                        "Dedicated Project Manager",
                        "Scalable Tech Stack",
                        "Transparent Workflow"
                    ].map((item, i) => (
                        <div key={i} className="bg-white text-center p-6 rounded-lg shadow-md">
                            <p className="text-md font-semibold text-[#123955]">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials (Optional) */}
            <div className="max-w-5xl mx-auto mt-16">
                <h3 className="text-2xl font-bold mb-6 text-[#123955] text-center">What Our Clients Say</h3>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {[
                        {
                            name: "John Doe",
                            feedback: "HexaByte delivered exactly what I needed. The team is very responsive and professional."
                        },
                        {
                            name: "Sarah Lee",
                            feedback: "Great communication and delivery. Highly recommend for custom web development."
                        },
                        {
                            name: "Michael Smith",
                            feedback: "The experience was smooth, and the results exceeded our expectations."
                        }
                    ].map((t, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-sm text-gray-600">"{t.feedback}"</p>
                            <p className="mt-4 font-semibold text-[#123955]">— {t.name}</p>
                        </div>
                    ))}
                </div>
            </div>
             </div>
        </div>
    );
};

export default AskForService;
