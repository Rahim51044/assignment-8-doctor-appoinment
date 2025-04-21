import React from 'react';
import doctorImage1 from '../assets/banner-img-1.png'
import doctorImage2 from '../assets/doctor-sample.png'

const Banner = () => {
    return (
<div>
<div className='bg-white mx-10 py-10 shadow-lg bg-gradient-to-b from-gray-300 to-white rounded-2xl border-white border-2'>
            <h1 className='text-xl lg:text-5xl font-bold text-center m-5'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
            <p className='text-gray-500 text-center w-2/3 mx-auto pb-5 text-sm md:text-base'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments  receive quality care you can trust.</p>
            <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center gap-5 '>
                <img className='w-[300px] md:w-[500px] h-[250px] md:h-[400px]' src={doctorImage1} alt="" />
                <img className='w-[300px] md:w-[500px] h-[250px] md:h-[400px]' src={doctorImage2} alt="" />
            </div>
        </div>
</div>
    );
};

export default Banner;