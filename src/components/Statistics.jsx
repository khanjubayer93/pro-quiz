import React, { useContext } from 'react';
import Chart from './Chart';
import { QuizContext } from './Root';

const Statistics = () => {
    const quizes = useContext(QuizContext)
    // console.log(quizes);
    return (
        <div>
            {
                quizes.map(quiz=> <Chart
                key={quiz.id}
                quiz={quiz}></Chart>)
            }
        </div>
    );
};

export default Statistics;