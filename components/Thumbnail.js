import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

const Thumbnail = ({ movie }) => {
  console.log(movie);
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className='group hover:border-opacity-0 hover:ring-1 ring-[#98cc55] cursor-pointer transition duration-200 ease-out transform sm:hover:scale-105 hover:z-50 border border-gray-600 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-gray-200/5'>
      <div className=' relative h-[350px]  w-auto'>
        <Image
          src={`${BASE_URL}${movie.poster_path || movie.backdrop_path}`}
          //   height={1080}
          //   width={1920}
          layout='fill'
          //   height={600}
          //   width={500}
          objectFit='cover'
          alt='hulu logo'
        />
      </div>
      <div className=''>
        <div className='p-5 '>
          <p className='truncate text-gray-400 max-w-md'>{movie.overview}</p>
          <h2 className='mt-1 sm:text-2xl text-lg text-white font-medium'>
            {movie.title || movie.original_name}
          </h2>
          <p className='flex text-xs sm:text-base mt-3 text-gray-400 items-center '>
            {movie.media_type && `${movie.media_type} .`}{' '}
            {movie.release_date || movie.first_air_date} .{' '}
            <ThumbUpIcon className='h-5 mx-2' /> {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
