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
          src={user?.imageUrl}
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
          <div className='overflow-x-auto'>
            <table className='table table-zebra'>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>

                {
                  users.map((elem,index)=><tr key={elem.name}>
                  <th>{index+1}</th>
                  <td>{elem.name}</td>
                  <td>{elem.address}</td>
                  <td>Hel</td>
                  {/* <button className="btn btn-success">Accept</button>
                  <button className="btn btn-error">Reject</button> */}
                </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;
