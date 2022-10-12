import React from 'react';

const QuizDetails = ({ quizDetails }) => {
    const { question, options } = quizDetails;
    return (
        <div className='border-4 border-pink-400 m-10 p-8 rounded-lg'>
            <h1>{question.p}</h1>
            <p>{options}</p>
        </div>
    );
};

export default QuizDetails;