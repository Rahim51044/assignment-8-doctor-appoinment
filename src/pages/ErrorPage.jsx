import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className='m-40 p-20 w-'>
            <h1 className='text-7xl text-center'>{error?.status || 404}</h1>
            <p className='text-center'>error?.error?.message || "something went wrong!"</p>
            <Link to='/'><button className='flex mx-auto text-center mt-20 text-3xl btn btn-primary'>Go to homepage</button></Link>
        </div>
    );
};

export default ErrorPage;