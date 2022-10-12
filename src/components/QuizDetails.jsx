import React from 'react';
import Option from './Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({ quizDetails, showRightAns }) => {
    const {id, question, options } = quizDetails;
    // console.log(quizDetails)
    return (
        <div className='border-4 border-pink-400 m-10 p-8 rounded-lg'>
            <div className='mb-5'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl font-extrabold text-pink-700'>Q</h1>
                    <EyeIcon onClick={() => showRightAns()} className='w-5'></EyeIcon>
                </div>
                <h1>{question}</h1>
            </div>
            <div>
                {
                    options.map(option => <Option
                        option={option}
                        id={id}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;