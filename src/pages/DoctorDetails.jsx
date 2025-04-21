import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaRegRegistered } from "react-icons/fa";
import { addFavorite } from '../utils';


const DoctorDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const {id} = useParams();
    const singleDoctor = data.find(doctor=>doctor.id===parseInt(id))
    console.log(singleDoctor);
    const {name, image,education, hospital_name, registration_number,speciality, avaibility, fee } = singleDoctor || {};

    const handleFavorite = () =>{
        addFavorite(singleDoctor)
    }
    return (
        <div className='mx-20 my-12'>
            <div className='bg-white mb-5 rounded-2xl py-12'>
                <h1 className='text-center text-2xl font-bold'>Doctor’s Profile Details</h1>
                <p className='text-center px-4 sm:px-6 md:px-10 lg:px-20'>
                 Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.
                </p>
            </div>
           <div className='bg-white p-8 flex flex-col lg:flex-row gap-5 rounded-2xl '>
           <img className='w-[300px] h-[300px] rounded-2xl ' src={image} alt="" />
           <div className='space-y-2'>
           <h1 className='text-4xl font-bold'>{name}</h1>
           <p className='text-black-600'>{education}</p>
           <p>{speciality}</p>
           <p className='text-black-600 border-b border-dashed border-gray-400 pb-3'>Working at <br /> <span className='text-3xl font-bold'> {hospital_name }</span></p>
            <h2 className='flex items-center gap-2 border-b border-dashed border-gray-400 pb-3'><FaRegRegistered size={20} />{registration_number}</h2>
            {/* <h1>Avaibility: {avaibility}</h1> */}
            <div className='sm:flex flex-col lg:flex-row items-center gap-5'>
                        <h1 className='font-semibold mb-2 text-xl justify-center'>Availability:</h1>
                        <div className='flex flex-col lg:flex-row flex-wrap gap-2'>
                            {avaibility?.map((day, index) => (
                                <button
                                    key={index}
                                    className='bg-blue-100 text-blue-700 px-4 py-1 rounded-full border border-blue-300 hover:bg-blue-200 transition'
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    </div>
                    <h1>Consultation Fee: Taka:  <span className='text-green-600'>{fee}</span> (incl Vat) <span className='text-green-600'>per consultation</span></h1>
           </div>
           </div>
           <div className="appoinment-card-start bg-white rounded-2xl mt-8 pb-8">
            <h1 className='text-4xl font-bold text-center p-10  border-b border-dashed border-gray-400 pb-3'>Book an Appointment</h1>
            <div className='flex justify-between items-center px-10 border-b border-dashed border-gray-400 pb-3 pt-5'>
                <h1>Avaibility</h1>
                <button className='rounded-full btn'>Doctor Available Today</button>
            </div>
            <button className='btn rounded-full my-5 w-full h-full text-sm sm:text-base px-4 py-2 text-center'>
  Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
</button>
            <button onClick={handleFavorite} className='w-full rounded-full  text-white btn btn-primary px-10 mx-auto '>Book Appointment Now</button>
           </div>
        </div>
    );
};

export default DoctorDetails;