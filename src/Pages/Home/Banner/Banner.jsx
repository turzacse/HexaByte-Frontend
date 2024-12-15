import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center bg-[#173A63]'
            style={{
                background: `linear-gradient(135deg, #13345D, #14365F, #0A254D, #0A254D, #0A254D, #0A254D, )`,
            }}
        >
            <img className='w-1/2 md:h-[520px]' src="./2b.PNG" alt="" />
            <img
                style={{ transform: 'scaleX(-1)' }}
                className='w-1/2 md:h-[520px]' src="./2b.PNG" alt="" />

            {/* <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#ffffff',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#ffffff',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        backgroundColor: '#CA8A04',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        textAlign: 'center',
                        width: '150px'
                    }}
                >
                    Get a Quote
                </div>
            </div> */}
        </div>
    );
};

export default Banner;