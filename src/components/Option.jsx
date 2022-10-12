import React from 'react';

const Option = ({option}) => {
    return (
        <div className='flex mb-3'>
            <input type="radio" name="radio-3" className="radio radio-secondary mr-3" checked />
            <p><small>{option}</small></p>
        </div>
    );
};

export default Option;