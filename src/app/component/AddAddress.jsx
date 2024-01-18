'use client';

import React, { useState } from 'react';
import Location from '@/app/component/Location';
import message from '../utlis/alert';
import Link from 'next/link';


const Order = () => {
  const [address, setAddress] = useState({
    d_address: '',
    pincode: '',
    landmark: '',
    alternate_num: '',
  });

  return (
    <>
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
            value={address.d_address}
            required
            onChange={(e) =>
              setAddress({ ...address, d_address: e.target.value })
            }
          />
        </label>

        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>LandMark :</span>
          </div>
          <input
            type='text'
            placeholder='Ex - Kaziranga Hotel'
            className='input input-bordered w-full max-w-xs'
            value={address.landmark}
            required
            onChange={(e) =>
              setAddress({ ...address, landmark: e.target.value })
            }
          />
        </label>

        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Alternate Phone :</span>
          </div>
          <input
            type='number'
            placeholder='Ex - 88888-11111'
            className='input input-bordered w-full max-w-xs'
            value={address.alternate_num}
            onChange={(e) =>
              setAddress({ ...address, alternate_num: e.target.value })
            }
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
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
          />
        </label>
      </div>
      {address.alternate_num != '' &&
      address.d_address != '' &&
      address.landmark != '' &&
      address.pincode != '' ? (
        <button
          type='submit'
          onClick={() => message('success', 'Order placed succesfully 🙂')}
          className='btn ml-8 w-72 mt-3 shadow-xl mb-3 btn-success'
        >
         <Link href={'/my-order'}> Place Order</Link>
        </button>
      ) : (
        <button
          type='submit'
          onClick={() => message('error', 'Pls fill all the fields')}
          className='btn ml-8 w-72 mt-3 shadow-xl mb-3 btn-success'
        >
          Place Order
        </button>
      )}

      <Location />
    </>
  );
};

export default Order;
