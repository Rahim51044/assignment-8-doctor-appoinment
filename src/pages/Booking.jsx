import React from 'react';

const Booking = ({booking,deletable,handleDelete}) => {
    const {name, education, speciality, fee, id} = booking || {};

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                <h1>{name}</h1>
                <p>{education}</p>
                <p>{speciality}</p>
                </div>
            <h1>Appoinment fee: {fee} +Vat</h1>
            </div>
 
            {deletable &&  <button onClick={()=>handleDelete(id)} className='btn btn-primary w-full'>Cancel appoinment</button>}
        </div>
    );
};

export default Booking;