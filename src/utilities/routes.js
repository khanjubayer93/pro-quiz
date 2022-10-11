import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Error from "../components/Error";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Root from "../components/Root";


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
                path: '/quiz', element: <Quiz></Quiz>,
            },
            { path: '/about', element: <About></About> }
        ]
    }
])

export default router;