import React from 'react';

const LawService = () => {
  return (
    <div className='LawServices'>
      <h1>We Provide Best Law Services</h1>
      <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
      <div className="lawServices flex gap-4 pb-40">
        <div className="lawService_card bg-base-100 w-96 shadow-sm rounded-xl shadow-md">
         <figure>
            <img className='ml-3 mt-3 rounded-xl border-2 border-indigo-600' src="../assets/success-doctor.png" alt="" />
         </figure>
          <div className="card-body">
            <h2 className="card-title">199+</h2>
            <h3>Total Lawyer</h3>
         </div>
         </div>
          <div className="lawService_card bg-base-100 w-96 shadow-sm rounded-xl shadow-md">
         <figure>
            <img className='ml-3 mt-3 rounded-xl border-2 border-indigo-600' src="../assets/success-review.png" alt="" />
         </figure>
          <div className="card-body">
            <h2 className="card-title">467+</h2>
            <h3>Total Reviews</h3>
         </div>
         </div>
          <div className="lawService_card bg-base-100 w-96 shadow-sm rounded-xl shadow-md">
         <figure>
            <img className='ml-3 mt-3 rounded-xl border-2 border-indigo-600' src="../assets/success-patients.png" alt="" />
         </figure>
          <div className="card-body">
            <h2 className="card-title">1900+</h2>
            <h3>Cases Initiated</h3>
         </div>
         </div>
          <div className="lawService_card bg-base-100 w-96 shadow-sm rounded-xl shadow-md">
         <figure>
            <img className='ml-3 mt-3 rounded-xl border-2 border-indigo-600' src="../assets/success-staffs.png" alt="" />
         </figure>
          <div className="card-body">
            <h2 className="card-title">300+</h2>
            <h3>Total Stuffs</h3>
         </div>
         </div>
      

      </div>
    </div>
  );
};

export default LawService;