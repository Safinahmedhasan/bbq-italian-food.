import React from 'react';
import ToolTrip from '../Tooltrip/ToolTrip';

const Blog = () => {
    return (
        <div>
            <div className='container p-32 mx-auto mt-[-40px]'>
                <div>
                    <div className='bg-gradient-to-r from-orange-500 to-orange-300 w-10 text-center p-2 rounded-full absolute mt-[-20px] ml-[-20px] text-slate-100'>01</div>
                    <div className='border border-orange-500 p-5 rounded-xl'>
                        <h2 className='text-slate-100 bg-gradient-to-r from-orange-500 to-orange-300 p-5 rounded-xl mb-5 font-semibold text-1xl pl-7'>Tell us the differences between uncontrolled and controlled components</h2>
                        <p className='text-orange-500 px-5'>Uncontrolled components rely on the DOM to manage state, while controlled components explicitly manage state using props and callbacks provided by the parent component. Uncontrolled components are simpler but offer less control, while controlled components provide more control and functionality.</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='bg-gradient-to-r from-orange-500 to-orange-300 w-10 text-center p-2 rounded-full absolute mt-[-20px] ml-[-20px] text-slate-100'>02</div>
                    <div className='border border-orange-500 p-5 rounded-xl'>
                        <h2 className='text-slate-100 bg-gradient-to-r from-orange-500 to-orange-300 p-5 rounded-xl mb-5 font-semibold text-1xl pl-7'>How to validate React props using PropTypes</h2>
                        <p className='text-orange-500 px-5'>PropTypes is a library in React that allows you to define and enforce the expected data types for the props passed to your components. It helps validate the correctness of props and detects potential bugs or mismatches in the data being passed. By specifying prop types, you can ensure that the correct data types are used and provide better documentation for the expected props of your components.</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='bg-gradient-to-r from-orange-500 to-orange-300 w-10 text-center p-2 rounded-full absolute mt-[-20px] ml-[-20px] text-slate-100'>03</div>
                    <div className='border border-orange-500 p-5 rounded-xl'>
                        <h2 className='text-slate-100 bg-gradient-to-r from-orange-500 to-orange-300 p-5 rounded-xl mb-5 font-semibold text-1xl pl-7'>Tell us the difference between nodejs and express js.</h2>
                        <p className='text-orange-500 px-5'>
                            Node.js is a runtime environment that allows you to execute JavaScript code on the server-side. It provides the foundation for building server-side applications using JavaScript.

                            Express.js, on the other hand, is a web application framework built on top of Node.js. It simplifies the process of building web applications and APIs by providing a set of abstractions and utilities. Express.js handles routing, middleware management, and other web-related tasks, making it easier to build robust and scalable web applications using Node.js.

                        </p>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='bg-gradient-to-r from-orange-500 to-orange-300 w-10 text-center p-2 rounded-full absolute mt-[-20px] ml-[-20px] text-slate-100'>04</div>
                    <div className='border border-orange-500 p-5 rounded-xl'>
                        <h2 className='text-slate-100 bg-gradient-to-r from-orange-500 to-orange-300 p-5 rounded-xl mb-5 font-semibold text-1xl pl-7'>What is a custom hook, and why will you create a custom hook?</h2>
                        <p className='text-orange-700 px-5'>A custom hook is a reusable function in React that allows you to extract and reuse logic and stateful behavior across multiple components. You would create a custom hook to promote code reuse, abstract complex logic, and organize your code by separating concerns.</p>
                    </div>
                </div>

                


            </div>
        </div>
    );
};

export default Blog;