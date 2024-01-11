import Image from 'next/image';
import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

const Navbar = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <>
      <div className='navbar'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>AquadropHub</a>
        </div>
        <div className='flex-none gap-2'>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='flex-none'>
                {userId && (
                  <>
                    <UserButton afterSignOutUrl='/' />
                  </>
                )}

                <button className='btn btn-square btn-ghost'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block w-5 h-5 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <Link href={'/login'}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
