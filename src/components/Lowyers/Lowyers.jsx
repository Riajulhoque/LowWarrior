import React, { Suspense } from 'react';
import { useState } from 'react';
import Lowyer from '../Lowyer/Lowyer';

const Lowyers = ({data}) => {
  const [allLowyer , setAllLowyer]=useState([]);
  // console.log (data)
  return (
    <div className='grid grid-cols-2 gap-5'>
      
      <Suspense fallback= {<span>loading .......</span>}>
      {
        data.map((singleLowyer)=><Lowyer key={singleLowyer.id} singleLowyer={singleLowyer} ></Lowyer>)
      }
      </Suspense>
    </div>
  );
};

export default Lowyers;