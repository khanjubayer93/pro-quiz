import React from 'react';

const Allquiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;

    return (
        <div>
            <h1>Name: {name}</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default Allquiz;