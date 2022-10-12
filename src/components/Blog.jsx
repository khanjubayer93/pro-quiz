import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-4 border-pink-400 m-10 p-8 rounded-lg mx-60'>
                <div className='mb-3'>
                    <p className='font-bold'>Question-1</p>
                    <p>What is the purpose of react router?</p>
                </div>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='border-4 border-pink-400 m-10 p-8 rounded-lg mx-60'>
                <div className='mb-3'>
                    <p className='font-bold'>Question-2</p>
                    <p>How does context api work?</p>
                </div>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border-4 border-pink-400 m-10 p-8 rounded-lg mx-60'>
                <div className='mb-3'>
                    <p className='font-bold'>Question-3</p>
                    <p>What is useRef?</p>
                </div>
                <p>The useRef Hook allows us to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when updated.
                    It can be used to access a DOM element directly.</p>
            </div>

        </div>
    );
};

export default Blog;