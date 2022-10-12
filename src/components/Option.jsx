import React from 'react';

const Option = ({option}) => {
    return (
        <div className='flex mb-3'>
            <input type="radio" id={option} className="radio radio-secondary mr-3" checked />
            <p><small>{option}</small></p>
        </div>
    );
};

export default Option;