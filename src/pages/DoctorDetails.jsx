import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const DoctorDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const {id} = useParams();
    const singleDoctor = data.find(doctor=>doctor.id===parseInt(id))
    console.log(singleDoctor);
    const {name, image, } = singleDoctor || {};
    return (
        <div>
            <h1>{name}</h1>
            <img className='w-[200px] h-[200px]' src={image} alt="" />
        </div>
    );
};

export default DoctorDetails;