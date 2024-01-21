import Link from 'next/link';
import { UserButton, auth, currentUser } from '@clerk/nextjs';
import BeforeLoginUI from '@/app/utlis/BeforeLoginUI';
import AfterLoginUI from '@/app/utlis/AfterLoginUI'
 
const Navbar = async () => {
  const { userId, getToken } = auth();
  return (
    <>
      <div className='navbar'>
        <div className='flex-1'>
          <p className='btn btn-ghost text-xl'>
            <Link href={'/'}> AquadropHub</Link>
          </p>
        </div>
        <div className='flex-none gap-2'>
          <input
            type='checkbox'
            value='light'
            className='toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2'
          />
          {
            userId ? <AfterLoginUI/> : <BeforeLoginUI/>
          }
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
