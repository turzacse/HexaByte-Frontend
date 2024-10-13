import React from 'react';

const GetInTouch = () => {
    return (
        <section className="bg-gradient-to-r from-[#658baf] to-[#123955] text-white py-12" id="get-in-touch">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

                {/* Description */}
                <p className="text-center mb-6">
                    Have questions or want to work together? We would love to hear from you!
                </p>

                <div className='flex md:flex-row flex-col justify-between'>
                    {/* Contact Form */}
                    <form className= "flex-1 bg-gray-200 text-black p-8 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 bg-[#506a7c] text-white rounded"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-3 bg-[#506a7c] text-white rounded"
                                required
                            />
                        </div>
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full p-3 bg-[#506a7c] text-white rounded mb-4"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Alternative Contact Methods */}
                    <div className="mt-8 text-center flex-1">
                        <h3 className="text-xl font-semibold mb-4">Or reach us at:</h3>
                        <p>Email: <a href="mailto:turzacse@gmail.com" className="text-yellow-500 hover:underline">turzacse@gmail.com</a></p>
                        <p>Phone: <a href="tel:+1234567890" className="text-yellow-500 hover:underline">+880 1315 44 45 47</a></p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default GetInTouch;
