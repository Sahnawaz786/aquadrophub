import Image from 'next/image';
import Link from 'next/link';
import { UserButton, auth,currentUser } from '@clerk/nextjs';

const Navbar = async () => {
  const { userId,getToken } = auth();
  const user = await currentUser();
  // console.log(userId,user?.firstName);
  return (
    <>
      <div className='navbar'>
        <div className='flex-1'>
         <Link href={'/'} > <a className='btn btn-ghost text-xl'>AquadropHub</a></Link>
        </div>
        <div className='flex-none gap-2'>
        <input type="checkbox" value="dark" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='flex-none'>
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
                      d='M4 6h16M4 12h16M4 18h16'
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
                {userId ? (
                  <div className='flex gap-1'>
                    <UserButton afterSignOutUrl='/'  />
                    <h1>{user?.firstName}</h1>
                  </div>
                ) : (
                  <>
                    <Link href={'/sign-up'}>Sign Up</Link>
                    <Link href={'/sign-in'}>Login</Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
