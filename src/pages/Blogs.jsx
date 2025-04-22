import React from 'react';
import { MdDateRange } from "react-icons/md";


const Blogs = () => {
 
    return (
        <div className=''>
            <div className='bg-white p-5 mx-20 rounded-2xl mb-5 '>
                <h1 className='border-b border-dashed border-gray-400 pb-2'>What is useState and how does it work in React?
                </h1>
                <p className='text-blue-700'>Answer:</p>
                <p className='border-b border-dashed border-gray-400 pb-2'>useState is a React Hook that lets you add state to functional components.
                </p>
                <div className='flex items-center gap-2 pt-5'>
                <MdDateRange size={20} />
                <h1>addet at 23-04/2025 </h1>
                </div>
            </div>

            <div className='bg-white p-5 mx-20 rounded-2xl mb-5 '>
                <h1 className='border-b border-dashed border-gray-400 pb-2'>What is the purpose of useEffect in React?
                </h1>
                <p className='text-blue-700'>Answer:</p>
                <p className='border-b border-dashed border-gray-400 pb-2'>The useEffect hook in React is used to handle side effects in functional components. Side effects are operations that affect something outside the scope of the current function, such as: Fetching data from an API Subscribing to a data stream or event listener Directly interacting with the DOM Setting up timers
                </p>
                <div className='flex items-center gap-2 pt-5'>
                <MdDateRange size={20} />
                <h1>addet at 23-04/2025 </h1>
                </div>
            </div>

            <div className='bg-white p-5 mx-20 rounded-2xl mb-5 '>
                <h1 className='border-b border-dashed border-gray-400 pb-2'>What is a custom hook in React and when should you use one?
                </h1>
                <p className='text-blue-700'>Answer:</p>
                <p className='border-b border-dashed border-gray-400 pb-2'>A custom hook in React is a reusable function that starts with use and lets you encapsulate logic using React hooks like useState, useEffect, etc.
                </p>
                <div className='flex items-center gap-2 pt-5'>
                <MdDateRange size={20} />
                <h1>addet at 23-04/2025 </h1>
                </div>
            </div>

            <div className='bg-white p-5 mx-20 rounded-2xl mb-5 '>
                <h1 className='border-b border-dashed border-gray-400 pb-2'>Difference between controlled and uncontrolled components? Which one is better?

                </h1>
                <p className='text-blue-700'>Answer:</p>
                <p className='border-b border-dashed border-gray-400 pb-2'>In React, controlled and uncontrolled components refer to how form data is handled. A controlled component is one where the form input element’s value is controlled by React state. This means the value is stored in a state variable and updated through an onChange handler. Because of this, the data is always in
                </p>
                <div className='flex items-center gap-2 pt-5'>
                <MdDateRange size={20} />
                <h1>addet at 23-04/2025 </h1>
                </div>
            </div>

            <div className='bg-white p-5 mx-20 rounded-2xl mb-5 '>
                <h1 className='border-b border-dashed border-gray-400 pb-2'>Tell us something about useFormStatus() (explore and explain)

                </h1>
                <p className='text-blue-700'>Answer:</p>
                <p className='border-b border-dashed border-gray-400 pb-2'>
                useFormStatus() — a newer hook introduced in React 18 with React Server Components (RSC) and form actions, especially when working with Server Actions in Next.js 13+.
                </p>
                <div className='flex items-center gap-2 pt-5'>
                <MdDateRange size={20} />
                <h1>addet at 23-04/2025 </h1>
                </div>
            </div>


        </div>
    );
};

export default Blogs;