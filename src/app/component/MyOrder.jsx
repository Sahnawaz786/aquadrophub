import React from 'react';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import Calender from '@/app/component/Calender'

const MyOrder = async () => {
  const user = await currentUser();
  console.log(user);
  return (
    <>
      <div className='hero'>
        <div className='hero-content flex-col text-center lg:flex-row'>
          <Image
            src={user?.imageUrl}
            className='max-w-sm rounded-lg shadow-2xl'
            width={300}
            height={200}
            alt='user image'
            priority={true}
          />
          <div>
            <h1 className='text-2xl m-1 font-bold text-blue-400'>Name: {user?.firstName + ' ' + user?.lastName}</h1>
            <h1 className='text-xl m-3 font-bold text-blue-400'>Delivery Dates 🙂 : </h1>
            <Calender/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
