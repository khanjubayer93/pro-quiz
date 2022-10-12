import React, { useContext } from 'react';

const Option = ({ option, id }) => {


    return (
        <div className='flex mb-3'>
            <input type="radio" name={id} className="radio radio-secondary mr-3" checked />
            <p><small>{option}</small></p>
        </div>
    );
};

export default Option;