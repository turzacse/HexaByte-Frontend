import React from 'react';

const Section = ({ title, description }) => {
    return (
        <div className="py-10 text-center">
            <h2 className="text-3xl font-bold text-[#123955] mb-4">{title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
    );
};

export default Section;
