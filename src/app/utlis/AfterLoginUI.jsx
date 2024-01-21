import Link from 'next/link';
import Image from 'next/image';
import { UserButton, auth, currentUser } from '@clerk/nextjs';

const AfterLoginUI = async () => {
  const user = await currentUser();
  return (
    <div className='dropdown dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-ghost btn-circle avatar'
      >
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>
            <Image
              src={user.imageUrl}
              width={25}
              height={2}
              alt='user_logo'
              className='rounded-full'
            />
          </button>
        </div>
      </div>

      <ul
        tabIndex={0}
        className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
      >
        <li>
          <div className='flex gap-1'>
            <UserButton afterSignOutUrl='/' />
            <h1>{user?.firstName}</h1>
          </div>
        </li>
        <li>
            <Link href={'/my-order'}>My Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default AfterLoginUI;
