import React from 'react';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';

const Driver = async () => {
  const user = await currentUser();
  const users = [
    {
      name: 'Sahnawaz Alam',
      address: 'Gerukabari',
    },
    {
      name: 'Sabaz Alam',
      address: 'Bijni',
    },
  ];
  return (
    <div className='hero'>
      <div className='hero-content flex-col text-center lg:flex-row'>
        <Image
          src={user?.imageUrl || ''}
          className='max-w-sm rounded-lg shadow-2xl'
          width={300}
          height={200}
          alt='user image'
          priority={true}
        />
        <div>
          <h1 className='text-2xl m-1 font-bold text-blue-400'>
            Name: {user?.firstName + ' ' + user?.lastName}
          </h1>
          <h1 className='text-xl m-3 font-bold text-green-400'>
            Today Delivery :{' '}
          </h1>
          {
            users.map((elem)=><div key={elem.name} className='card w-90 bg-base-100 shadow-xl'>
            <figure>
              <Image
                src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt='Shoes'
                width={300}
                height={100}
              />
            </figure>
            <div className='card-body'>
              <h3 className='card-title'>
                Name :  {elem.name}
              </h3>
              <p className='card-title'>Address : {elem.address}</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-success'>Accept</button>
                <button className='btn btn-error'>Reject</button>
                <button className='btn btn-primary'>Location</button>
              </div>
            </div>
          </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Driver;
