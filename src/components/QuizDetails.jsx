import React from 'react';
import Option from './Option';

const QuizDetails = ({ quizDetails }) => {
    const { question, options } = quizDetails;
    console.log(quizDetails)
    return (
        <div className='border-4 border-pink-400 m-10 p-8 rounded-lg'>
            <div className='mb-5'>
                <h1 className='text-3xl font-extrabold text-pink-700'>Q</h1>
                <h1>{question}</h1>
            </div>
            <div>
                {
                    options.map(option=> <Option
                    option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;