import React, { useEffect, useState } from 'react';
import DoctorsCard from '../components/DoctorsCard';
import { getFavorites, removeFavorites } from '../utils';

const MyBookings = () => {
        const [displayDoctors, setDisplayDoctors] = useState([]);
        useEffect(()=>{
            const savedDoctors = getFavorites();
            setDisplayDoctors(savedDoctors)
        },[])

        const handleDelete = (id) => {
            
            removeFavorites(id)
            setDisplayDoctors(getFavorites())
        }
    return (
        <div className='py-12 px-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
            {
                displayDoctors.map((doctor)=> <DoctorsCard key={doctor.id} doctor={doctor} deletable={true} handleDelete={handleDelete}></DoctorsCard>)
            }
            </div>
        </div>
    );
};

export default MyBookings;


// import React from 'react';
// import { useLocation } from 'react-router';

// const MyBookings = () => {
//   const location = useLocation();
//   const { doctor } = location.state || {};

//   if (!doctor) {
//     return (
//       <div className="text-center mt-20">
//         <h1 className="text-2xl font-bold">No Booking Found</h1>
//         <p className="text-gray-600">Please book a doctor first.</p>
//       </div>
//     );
//   }

//   const { name, image, hospital_name, fee, speciality, avaibility } = doctor;

//   return (
//     <div className="mx-20 my-12">
//       <div className="bg-white p-8 rounded-2xl shadow-md">
//         <h1 className="text-3xl font-bold text-center mb-6">My Bookings</h1>
//         <div className="flex flex-col lg:flex-row gap-6">
//           <img
//             className="w-[250px] h-[250px] object-cover rounded-2xl"
//             src={image}
//             alt={name}
//           />
//           <div className="space-y-3">
//             <h2 className="text-2xl font-bold">{name}</h2>
//             <p className="text-gray-700">{speciality}</p>
//             <p className="text-gray-600">Hospital: <strong>{hospital_name}</strong></p>
//             <p>Fee: <span className="text-green-600 font-semibold">৳ {fee}</span></p>
//             <div>
//               <h3 className="font-semibold">Availability:</h3>
//               <div className="flex flex-wrap gap-2 mt-1">
//                 {avaibility?.map((day, index) => (
//                   <span
//                     key={index}
//                     className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
//                   >
//                     {day}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <button className="btn btn-primary mt-4 rounded-full px-6 py-2">
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyBookings;
