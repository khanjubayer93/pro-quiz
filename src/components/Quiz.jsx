import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';
import { ToastContainer, toast } from 'react-toastify';

const Quiz = () => {
    const allQuiz = useLoaderData();
    const quiz = allQuiz.data;
    const { questions } = quiz;

    const showRightAns = () => {
        console.log('toast');
        const notify = () => toast("Wow so easy!");

    }

    return (
        <div>
            <h1 className='text-5xl font-bold flex justify-center text-pink-600'>Pro Quiz</h1>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                {
                    questions.map(quizDetails => <QuizDetails
                        key={quizDetails.id}
                        quizDetails={quizDetails}
                        showRightAns={showRightAns}></QuizDetails>)
                }
            </div>
        </div>
    );
};

export default Quiz;