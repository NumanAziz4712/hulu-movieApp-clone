import React from 'react';
import requests from '../utils/requests';
import { useRouter } from 'next/router';
const Nav = () => {
  const router = useRouter();
  return (
    <nav className='relative'>
      <div className='flex px-10 mt-8 items-center scrollbar-hide overflow-x-scroll sm:px-20 whitespace-nowrap text-xl space-x-10 sm:space-x-20'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className='cursor-pointer transition duration-150 transform hover:scale-125 last:pr-24 hover:text-white ease-out active:text-red-500'
          >
            {title}
          </h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 ' />
    </nav>
  );
};

export default Nav;
