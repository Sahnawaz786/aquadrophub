'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import message from '@/app/utlis/alert';

const Login = () => {
  const [days, setDays] = useState(0);

  const choice = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className='mt-1 card w-96 bg-base-100 shadow-xl overflow-x-hidden'>
      <figure >
        <Image
          src='https://cdn1.vectorstock.com/i/1000x1000/08/65/water-delivery-service-man-delivering-vector-21520865.jpg'
          width={300}
          height={300}
          priority={true}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-blue-400'>Welcome to AquadropHub.com</h2>
        <p className='text-xl'>
          In how many days should we re-deliver water to your doorStep 😉
        </p>
        <select
          title='selection'
          className='select select-secondary w-full max-w-xs mt-3'
          onChange={(e) => {
            setDays(e.target.value);
          }}
        >
          <option disabled selected>Pick Select the days : </option>
          {
             choice.map((elem,index)=><option key={index} value={index+1}>{index+1}</option>)
          }
        </select>
        <div className=' mt-3 card-actions justify-end'>
          {days>0 ? (
            <button onClick={()=>message('success','Redirecting you to the Order !')} className='btn btn-primary'>
              <Link href={'/add-address'}>Order Now</Link>
            </button>
          ) : (
            <button className='btn btn-primary' onClick={(e)=>message('error','Pls enter a valid day !')} > Order Now</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
