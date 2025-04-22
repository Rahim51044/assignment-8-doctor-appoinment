import React, { useEffect, useState } from 'react';
import DoctorsCard from '../components/DoctorsCard';
import { getFavorites, removeFavorites } from '../utils';
import Booking from './Booking';
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = ({ x, y, width, height, fill }) => {
    return (
      <path
        d={`
          M${x},${y + height}
          C${x + width / 3},${y + height}
           ${x + width / 2},${y + height / 3}
           ${x + width / 2},${y}
          C${x + width / 2},${y + height / 3}
           ${x + (2 * width) / 3},${y + height}
           ${x + width},${y + height}
          Z
        `}
        stroke="black"
        fill={fill}
      />
    );
  };

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
        const {name, fee} = MyBookings || {}
        const chartData = displayDoctors.map((doctor) => ({
            name: doctor.name,
            fee: (doctor.fee),
          }));
    return (
        <div className='py-12 px-20'>
                 {chartData.length > 0 && (
        <BarChart
        width={1000}
        height={500}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis  />
        <Tooltip />
        <Bar
          dataKey="fee"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
      )}



                <h1 className='text-3xl font-bold text-center'>My Today Appointments</h1>
                <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <div className=' mb-8 bg-white p-8 rounded-2xl space-y-8'>
            {/* {
                displayDoctors.map((doctor)=> <DoctorsCard key={doctor.id} doctor={doctor} deletable={true} handleDelete={handleDelete}></DoctorsCard>)
            } */}
            {
                displayDoctors.map((booking)=><Booking key={booking.id} booking={booking} deletable={true} handleDelete={handleDelete} ></Booking>)
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
