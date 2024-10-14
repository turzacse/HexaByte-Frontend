import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ text, link }) => {
    const navigate = useNavigate();
    return (
        <div className='text-center  mt-5'>
            <button
            onClick={() => navigate(link)}
            className='btn uppercase text-gray-800 font-semibold bg-[#F9A825] rounded-lg hover:bg-yellow-600 px-4 py-2'>
                {text}
            </button>
        </div>
    );
};

export default CustomButton;