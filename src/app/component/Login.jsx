'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

const message = (message) => {
  message==='success'
    ? toast.success('Redirecting you to Order Page', {
        position: 'top-center',
        duration: 1500,
      })
    : toast.error('Pls Select a valid day !', {
        position: 'top-center',
        duration: 1500,
      });
};

const Login = () => {
  const [days, setDays] = useState(0);

  return (
    <div className='mt-1 card w-96 bg-base-100 shadow-xl overflow-x-hidden'>
      <figure>
        <Image
          src='https://cdn1.vectorstock.com/i/1000x1000/08/65/water-delivery-service-man-delivering-vector-21520865.jpg'
          width={300}
          height={300}
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
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        <div className=' mt-3 card-actions justify-end'>
          {days>0 ? (
            <button onClick={()=>message('success')} className='btn btn-primary'>
              <Link href={'/order'}>Order Now</Link>
            </button>
          ) : (
            <button className='btn btn-primary' onClick={(e)=>message('error')} > Order Now</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
