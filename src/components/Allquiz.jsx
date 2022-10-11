import React from 'react';

const Allquiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;

    return (
        <div className='border-2 m-36 p-10 rounded-lg shadow-lg bg-pink-100'>
            <div className='flex justify-center'>
                <img className='rounded-full w-60' src={logo} alt="" />
            </div>
            <div className='flex justify-between items-center mt-5'>
                <h1 className='font-bold text-xl text-secondary'>{name}</h1>
                <button className="btn btn-secondary">Get Started</button>
            </div>
        </div>
    );
};

export default Allquiz;