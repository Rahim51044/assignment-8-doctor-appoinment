import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import DoctorsContainer from './DoctorsContainer';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <DoctorsContainer doctors={data}></DoctorsContainer>
        </div>
    );
};

export default Home;