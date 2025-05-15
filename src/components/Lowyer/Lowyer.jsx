import React from 'react';
import { Link } from 'react-router';

const Lowyer = ({singleLowyer}) => {
  //  const buttons =<>
  //  <Link to={'/lowyerDetails/${singleLowyer.id}'} > <button className="btn mt-2 btn-block  text-[#176AE5] hover:bg-blue-500 hover:text-[#ffffff] border-radius-20 rounded-full ">View Details</button>
  //  </Link>
  //  </>
  return (
    <div className='lowyerCards '>
      <div className="lowyerCard flex border-2 rounded-xl">
      <div className="lowyerImg w-[30%] ">
        <img className='ml-3 mt-3 rounded-xl border-2 border-indigo-600' src={singleLowyer.image} alt="" />
      </div>
      <div className="lowyerInfo w-[70%] p-10 bg-color-red">
        <div className="buttons flex gap-10 -mt-5">
          <a className="btn text-[#50d71e] hover:bg-green-500 hover:text-[#ffffff] rounded-full pl-10 pr-10">Available</a>
          <a className="btn text-[#176AE5] hover:bg-blue-500 hover:text-[#ffffff] border-radius-20 rounded-full pl-10 pr-10">{singleLowyer.experience}</a>
          
        </div>
        <h2>{singleLowyer.name}</h2>
        <p>{singleLowyer.speciality}</p>
        <p>License No: {singleLowyer.licenseNumber}</p>
        <Link to= {`lowyerDetails/${singleLowyer.id}`}>
        <button className="btn mt-2 btn-block  text-[#176AE5] hover:bg-blue-500 hover:text-[#ffffff] border-radius-20 rounded-full ">View Details</button>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default Lowyer;