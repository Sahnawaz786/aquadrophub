import React from 'react'
import Link from 'next/link'

const BeforeLoginUI = () => {
  return (
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
                <>
                  <Link href={'/sign-up'}>Sign Up</Link>
                  <Link href={'/sign-in'}>Login</Link>
                </>
              </li>
            </ul>
          </div>
  )
}

export default BeforeLoginUI