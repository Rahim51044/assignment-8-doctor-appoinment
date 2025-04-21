import React from 'react';
// import { FaRegistered } from "react-icons/fa";
import { FaRegRegistered } from "react-icons/fa";



const DoctorsCard = ({doctor}) => {
    const {name, education, registration_number, image,experience} = doctor || {};
    return (
    <div className="card bg-base-100 pt-5 shadow-sm">
  <figure className='rounded-2xl '>
    <img className='w-[200px] h-[200px] rounded-2xl'
      src={image}
      alt="Doctors" />
  </figure>
  <div className="card-body">
    <div className='flex gap-5'>
        <button className='btn rounded-full text-xl text-green-500'>Available</button>
        <button className='btn rounded-full text-xl text-blue-700'>{experience}</button>
    </div>
    <h2 className="card-title">{name}</h2>
    <h2 className='border-b border-dashed border-gray-400 pb-2'>{education}</h2>
    <h2 className='flex items-center gap-2'><FaRegRegistered size={20} />{registration_number}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default DoctorsCard;