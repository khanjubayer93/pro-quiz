import React from 'react';
import { useContext } from 'react';
import img from '../image/header.png'
import Allquiz from './Allquiz';
import { QuizContext } from './Root';

const Home = () => {
    const quizes = useContext(QuizContext)
    // const {name} = quizes.data;
    // console.log(name);
    console.log(quizes);
    return (
        <div className=''>
            <div>
                <img className='w-full h-96' src={img} alt="" />
                <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                    {
                        quizes.map(quiz => <Allquiz
                            key={quiz.id}
                            quiz={quiz}></Allquiz>)
                    }
                </div>

            </div>
        </div>
    );

};


export default Home;