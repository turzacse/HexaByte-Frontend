import React from 'react';

const CustomButton = ({text}) => {
    return (
        <button className='btn bg-[#F9A825] text-center px-4 py-2'>
            {text}
        </button>
    );
};

export default CustomButton;