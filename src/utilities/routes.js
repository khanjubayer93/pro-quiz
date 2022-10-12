import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import Error from "../components/Error";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Root from "../components/Root";
import Statistics from "../components/Statistics";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/home', element: <Home></Home>

            },
            {
                path: '/allquiz/:allquizId',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.allquizId}`)
                }, element: <Quiz></Quiz>,
            },
            { path: '/blog', element: <Blog></Blog> },
            {
                path: '/statistics',
                loader: async () => {
                    fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Statistics></Statistics>
            },
            { path: '/about', element: <About></About> }
        ]
    }
])

export default router;