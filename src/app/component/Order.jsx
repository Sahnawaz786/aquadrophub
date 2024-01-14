"use client";

import React, { useState } from 'react';
import Location from '@/app/component/Location';

const Order = () => {

    const [address,setAddress] = useState('');
    const [pincode,setPincode] = useState('');

  return <>
    <div className='mt-1 ml-6 card w-96 bg-base-100 overflow-x-hidden mb-5'>
      <h1 className='pl-2 text-xl text-blue-400'>Enter your Address 🚀 </h1>
      <label className='form-control w-full max-w-xs'>
        <div className='label'>
          <span className='label-text'>Address 1 :</span>
        </div>
        <input
          type='text'
          placeholder='Ex - Gerukabri'
          className='input input-bordered w-full max-w-xs'
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />
      </label>
      <label className='form-control w-full max-w-xs'>
        <div className='label'>
          <span className='label-text'>Pincode :</span>
        </div>
        <input
          type='number'
          placeholder='Ex - 783390'
          className='input input-bordered w-full max-w-xs'
          value={pincode}
          onChange={(e)=>setPincode(e.target.value)}
        />
      </label>

     {/* <Location/> */}      
    </div>
    <button className="btn ml-8 w-72 mt-3 shadow-xl mb-3 btn-success">Success</button>

    <Location/>

  </>
};

export default Order;
