import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const QuizContext = createContext([])

const Root = () => {
    const quizes = useLoaderData()
    // console.log(quizes);
    return (
        <QuizContext.Provider value={quizes.data}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizContext.Provider>
    );
};

export default Root;