import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {
    const allQuiz = useLoaderData();
    const quiz = allQuiz.data;
    const { questions } = quiz;
    console.log(questions);

    return (
        <div>
            <h1 className='text-xl'>All Quiz area Id: {questions.length}</h1>
            <div className='grid grid-cols-2'>
                {
                    questions.map(quizDetails => <QuizDetails
                        key={quizDetails.id}
                        quizDetails={quizDetails}></QuizDetails>)
                }
            </div>
        </div>
    );
};

export default Quiz;