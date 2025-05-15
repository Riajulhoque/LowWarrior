import React from 'react';
import { useLoaderData } from 'react-router';
const MyBookings = ({singleLowyer}) => {
  const data =useLoaderData()

  return (
    <div>
      <div className="LawyerProfileHeader">
        <h1>Lawyer’s Profile Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
      </div>
       <div className="LawyerProfileDetails flex p-10">
      <div className="lowyerImg w-[30%] "> 
        <img className='ml-3 mt-3 rounded-xl border-2 border-indigo-600' src='../assets/lawyer.png' alt="" />
      </div>
      <div className="lowyerInfo w-[70%] p-10 bg-color-red">
          <a className="btn text-[#50d71e] hover:bg-green-500 hover:text-[#ffffff] rounded-full pl-10 pr-10">Experience</a>
        <p>License No:</p>
        <h2>Availability </h2>
        <h2>name</h2>
        <p> speciality</p>
        <h2>Consultation Fee: {singleLowyer.fee}</h2>
        {/* <button className="btn mt-2 btn-block  text-[#176AE5] hover:bg-blue-500 hover:text-[#ffffff] border-radius-20 rounded-full ">View Details</button> */}
        
      </div>

      </div>
      <div className="Appointment pb-20 shadow-sm rounded-xl shadow-xl/30 border-1 border-indigo-500">
        <h1>Book an Appointment</h1>
        <div className="Availability flex mt-10 grid-cols-2 place-content-between">
          <h2>Availability</h2>
           <a className="btn text-[#50d71e] hover:bg-green-500 hover:text-[#ffffff] rounded-full pl-10 pr-10 ">Experience</a>
        </div>
        
        <button className="btn mt-20 btn-block  text-[#176AE5] hover:bg-blue-500 hover:text-[#ffffff] border-radius-20 rounded-full ">Book Appointment Now</button>
        </div> 


    </div>
  );
};

export default MyBookings;