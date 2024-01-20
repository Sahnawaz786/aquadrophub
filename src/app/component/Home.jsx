import React from 'react';
import '../globals.css';
import Link from 'next/link'


const HomePage = () => {
  return <div className='bg-image'>
      <div className='hero min-h-screen bg-base-200 '>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-3xl font-bold text-blue-500'>Get Water Delivered</h1>
            <h1 className='text-5xl font-bold text-white'>At your Door Step</h1>
            <p className='py-6'>
              Get your Water Delievered at your DoorStep by using AquaDropHub.com With just a tip of your finger get fresh water at your home 🙂
            </p>
            <Link href={'/order'}> <button className='btn btn-primary'>Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
};

export default HomePage;
