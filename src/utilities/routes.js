import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Root from "../components/Root";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/quiz', element: <Quiz></Quiz>,
            loader:()=> fetch(``) },
            { path: '/about', element: <About></About> }
        ]
    }
])

export default router;