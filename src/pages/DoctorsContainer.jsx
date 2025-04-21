import React from 'react';
import DoctorsCard from '../components/DoctorsCard';

const DoctorsContainer = ({doctors}) => {
    console.log(doctors);
    return (
        <div className='py-12 mx-20'>
            <h1 className='text-center text-3xl font-bold'>Our Best Doctors</h1>
            <p className='text-center px-30 pb-10'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
            {
                doctors.map((doctor)=> <DoctorsCard key={doctor.id} doctor={doctor}></DoctorsCard>)
            }
            </div>
        <button>Show all</button>
        </div>
    );
};

export default DoctorsContainer;